function createInputTemplate(className, placeholder) {
  return `
    <li class="input-field">
      <input class="${className}" placeholder="${placeholder}" type="text" />
    </li>`;
}

const chainringInputTemplate = createInputTemplate('input-chainring', 'Chainring teeth. ex.: 22-36 or 42');
const cassetteInputTemplate = createInputTemplate('input-cassette', 'Cassette teeth. ex.: 11-12-13-14-15-18-21-24-28 or 15');

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
      const ratio = chainset.map(chainring => cassette.map(cog => chainring / cog)).flat();
      data.push({
        id: id++,
        chainset,
        cassette,
        ratio,
      });
    });
  });

  return data;
}

/** Sorts the gear ratio dataset if needed */
function sortDataset(dataset, sortOrder) {
  if (sortOrder === "ascending") {
    dataset.forEach(item => {
      item.ratio.sort((a, b) => a - b);
    });
  }
  return dataset;
}

/** Updates the Chart.js chart with the new dataset */
function updateChart(dataset, chart) {
  const labels = Array.from({ length: Math.max(...dataset.map(d => d.ratio.length)) }, (_, i) => i + 1);
  const chartData = dataset.map(item => ({
    label: `Crank ${item.chainset} with Cassette ${item.cassette}`,
    data: item.ratio,
    fill: false,
    borderColor: getRandomColor(),
    tension: 0.3
  }));

  chart.data.labels = labels;
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

/** Main calculation function that processes inputs and updates the chart */
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
          position: 'bottom',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `Gear Ratio: ${tooltipItem.raw.toFixed(2)}`;
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
}

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.tooltipped');
  const select = document.querySelectorAll('select');
  M.Tooltip.init(elems);
  M.FormSelect.init(select);
});
