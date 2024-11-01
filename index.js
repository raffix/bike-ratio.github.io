const cassetteList = [
  '11-13-15-18-21-24-28',
  '12-14-16-18-21-24-28',
  '12-14-16-18-21-26-32',
  '12-13-14-15-17-19-21-23',
  '12-13-15-17-19-21-23-25',
  '13-14-15-17-19-21-23-26',
  '11-13-15-17-19-21-24-28',
  '11-13-15-17-20-23-26-30',
  '11-13-15-18-21-24-28-32',
  '11-13-15-18-21-24-28-34',
  '12-14-16-18-21-24-28-32',
  '11-13-15-18-22-27-33-40',
  '11-13-15-18-22-27-35-45',
  '11-13-15-17-19-21-24-28-32',
  '11-13-15-17-20-23-26-30-34',
  '11-13-15-17-20-23-26-30-36',
  '11-13-15-17-20-23-28-34-41',
  '11-13-15-17-20-23-28-36-46',
  '11-13-15-17-19-21-24-28-32-36',
  '11-12-13-14-15-17-19-21-23-25',
  '12-13-14-15-17-19-21-23-25-28',
  '11-12-14-16-18-20-22-25-28-32',
  '11-13-15-17-19-21-23-26-30-34',
  '11-13-15-17-20-23-26-30-34-39',
  '11-13-15-18-21-24-28-32-37-42',
  '11-13-15-17-20-23-26-30-36-43',
  '11-13-15-18-21-24-28-32-37-46',
  '11-13-15-17-20-23-28-34-41-48',
  '11-13-15-17-19-21-23-25-27-30-34',
  '11-13-15-17-19-21-23-25-27-30-34',
  '11-13-15-17-19-21-24-27-31-35-40',
  '11-13-15-17-19-21-24-28-32-37-42',
  '11-13-15-17-20-23-26-30-34-39-45',
  '11-13-15-17-19-21-24-28-32-37-46',
  '11-13-15-17-20-23-26-30-36-43-50',
  '11-13-15-18-21-24-28-33-39-45-51',
  '11-12-13-14-15-16-17-19-21-24-27-30',
  '11-12-13-14-15-17-19-21-24-27-30-34',
  '11-12-13-14-15-17-19-21-24-28-32-36',
  '10-12-14-16-18-21-24-28-32-36-40-45',
  '10-12-14-16-18-21-24-28-33-39-45-51',
];

const cassetteSuggestions = {};
cassetteList.forEach(cassette => {
  cassetteSuggestions[cassette] = null;
});



function createInputTemplate(className, placeholder) {
  return `
    <li class="input-field">
      <input class="${className}" placeholder="${placeholder}" type="text" />
    </li>`;
}

const chainringInputTemplate = createInputTemplate('input-chainring', 'Chainring teeth. ex.: 22-36 or 42');
const cassetteInputTemplate = createInputTemplate('input-cassette cassette-autocomplete', 'Cassette teeth. ex.: 11-12-13-14-15-18-21-24-28 or 15');

function initAutocompleteForInputs() {
  const inputs = document.querySelectorAll('.cassette-autocomplete');
  inputs.forEach(input => {
    M.Autocomplete.init(input, {
      data: cassetteSuggestions,
      minLength: 1 // Show suggestions after typing one character
    });
  });
}

function getULElement(ulId) {
  const ulElement = document.getElementById(ulId);
  if (!ulElement) {
    console.error(`UL element with ID "${ulId}" not found.`);
    return null;
  }
  return ulElement;
}

/** Adds HTML content to a UL element with a specific ID */
function addHTMLToUL(ulId, htmlContent) {
  const ulElement = getULElement(ulId);
  if (ulElement) ulElement.insertAdjacentHTML('beforeend', htmlContent);
}

/** Removes the last list item (LI) from a UL element */
function removeLastLI(ulId) {
  const ulElement = getULElement(ulId);
  const lastLI = ulElement.querySelector('li:last-child');
  lastLI ? ulElement.removeChild(lastLI) : console.warn(`No list items to remove in UL with ID "${ulId}".`);
}

/** Adds a chainring input field */
function addChainring() {
  addHTMLToUL("chainring-inputs", chainringInputTemplate);
}

/** Removes the last chainring input field */
function removeChainring() {
  removeLastLI("chainring-inputs");
}

/** Adds a cassette input field */
function addCassette() {
  addHTMLToUL("cassettes-inputs", cassetteInputTemplate);
  initAutocompleteForInputs();
}

/** Removes the last cassette input field */
function removeCassette() {
  removeLastLI("cassettes-inputs");
}

/** Splits and trims a string by '-' and converts it to an array of numbers */
function splitAndTrim(input) {
  return input.split('-')
    .map(value => Number(value.trim()))
    .filter(num => !isNaN(num) && num > 0);
}

/** Extracts values from inputs of a given class name */
function getValuesFromInputsByClassName(className) {
  return Array.from(document.querySelectorAll(`.${className}`))
    .map(input => splitAndTrim(input.value))
    .filter(values => values.length > 0);
}

/** Builds dataset for chart display based on chainring and cassette values */
function buildDataset(chainrings, cassettes) {
  const data = [];
  let id = 1;

  chainrings.forEach(chainset => {
    cassettes.forEach(cassette => {
      const ratioWithLabels = chainset.map(chainring => 
        cassette.map(cog => ({
          ratio: chainring / cog,
          label: `${chainring}/${cog}: ${(chainring / cog).toFixed(2)}`
        }))
      ).flat();

      data.push({
        id: id++,
        chainset,
        cassette,
        ratioWithLabels,
      });
    });
  });

  return data;
}

/** Sorts the gear ratio dataset if needed */
function sortDataset(dataset, sortOrder) {
  if (sortOrder === "ascending") {
    dataset.forEach(item => {
      item.ratioWithLabels.sort((a, b) => a.ratio - b.ratio);
    });
  }
  return dataset;
}

function generalLabel(dataset) {
  let maxSize = 0;

  dataset.forEach(item => {
    if (item.ratioWithLabels && Array.isArray(item.ratioWithLabels)) {
      maxSize = Math.max(maxSize, item.ratioWithLabels.length);
    }
  });

  // Generate an array from 1 to maxSize
  return Array.from({ length: maxSize }, (_, i) => i + 1);
}

/** Updates the Chart.js chart with the new dataset */
function updateChart(dataset, chart) {
  const chartData = dataset.map(item => {
    const data = item.ratioWithLabels.map(d => {
      return d.ratio;
    });

    const color = getRandomColor();
    return {
      label: `Crank ${item.chainset} with Cassette ${item.cassette}`,
      data: data,
      fill: false,
      borderColor: color,
      backgroundColor: color,
      tension: 0.3,
      labels: item.ratioWithLabels.map(d => d.label) // Custom labels for tooltips
    };
  });

  chart.data.labels = generalLabel(dataset);
  chart.data.datasets = chartData;
  chart.update();
}

/** Generates a random color for each dataset */
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

/** Updates the gear ratio table with the calculated ratios */
function updateGearRatioTable(chainrings, cassettes) {
  const tableBody = document.getElementById("gear-ratio-table").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear previous table contents

  // Create the header row with chainrings
  const headerRow = tableBody.insertRow();
  headerRow.insertCell().innerText = "Cog / Chainring"; // Top left cell

  chainrings.forEach(chainring => {
    headerRow.insertCell().innerText = chainring.join('-'); // Joining multiple chainring values
  });

  // Create rows for each cog in the cassette
  cassettes.forEach(cassette => {
    const row = tableBody.insertRow();
    row.insertCell().innerText = cassette.join('-'); // Joining multiple cassette values

    chainrings.forEach(chainring => {
      const ratios = chainring.map(r => cassette.map(cog => (r / cog).toFixed(2))); // Calculate ratios
      const cell = row.insertCell();
      cell.innerText = ratios.join(', '); // Joining all ratios for this cog
    });
  });
}

/** Main calculation function that processes inputs and updates the chart and table */
function calculate() {
  const chainrings = getValuesFromInputsByClassName("input-chainring");
  const cassettes = getValuesFromInputsByClassName("input-cassette");

  if (chainrings.length === 0 || cassettes.length === 0) {
    alert("Please enter valid chainring and cassette values.");
    return;
  }

  let dataset = buildDataset(chainrings, cassettes);
  const sortOrder = document.getElementById("sort").value;
  dataset = sortDataset(dataset, sortOrder);

  // Update the chart
  const ctx = document.getElementById('acquisitions').getContext('2d');
  if (window.myChart) window.myChart.destroy(); // Destroy previous chart instance
  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        title: {
          display: true,
          text: 'Gear Ratios for Chainring and Cassette Combinations'
        },
        legend: {
          display: true,
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              const datasetIndex = tooltipItem.datasetIndex;
              const dataIndex = tooltipItem.dataIndex;
              return window.myChart.data.datasets[datasetIndex].labels[dataIndex]; // Custom tooltip labels
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Gear Step'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Gear Ratio'
          }
        }
      }
    }
  });

  updateChart(dataset, window.myChart);

  updateGearRatioTable(chainrings, cassettes);
}

document.addEventListener('DOMContentLoaded', function() {
  initAutocompleteForInputs();
});

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.tooltipped');
  const select = document.querySelectorAll('select');
  M.Tooltip.init(elems);
  M.FormSelect.init(select);
});
