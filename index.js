const chainringInput = '<li class="input-field"><input class="input-chainring" placeholder="Chainring teeth. ex.: 22- 36 or 42" type="text" /></li>';
const casseteInput = '<li class="input-field"><input class="input-cassete" placeholder="Cassete teeth. ex.: 11-12-13-14-15-18-21-24-28 or 15" type="text" /></li>';
 
function addHTMLToUL(ulId, htmlContent) {
    const ulElement = document.getElementById(ulId);
  
    if (!ulElement) {
      console.error(`UL element with ID "${ulId}" not found.`);
      return;
    }

    const newContent = document.createElement('div');
    newContent.innerHTML = htmlContent;  
    const contentFragments = Array.from(newContent.childNodes);
    contentFragments.forEach(fragment => ulElement.appendChild(fragment));
}

function removeLastLI(ulId) {
    const ulElement = document.getElementById(ulId);
  
    if (!ulElement) {
      console.error(`UL element with ID "${ulId}" not found.`);
      return;
    }
  
    const liElements = ulElement.querySelectorAll('li');
  
    if (!liElements.length) {
      console.warn(`UL element with ID "${ulId}" has no LI children.`);
      return;
    }
  
    ulElement.removeChild(liElements[liElements.length - 1]);
}

function addChainring() {
    addHTMLToUL("chainring-inputs", chainringInput);
}

function removeChainring() {
    removeLastLI("chainring-inputs");
}

function addCassetes() {
    addHTMLToUL("cassetes-inputs", casseteInput);
}

function removeCassete() {
    removeLastLI("cassetes-inputs");
}

function splitAndTrim(line) {
    const values = line.split('-')
        .map((value) => Number(value.trim()));
    return values;
}

function getArrayByClass(className) {
    const elements = document.getElementsByClassName(className);
    return Array.from(elements);
}

function getValuesFromInputsByClassName(className) {
    const elements = getArrayByClass(className)
        .map(item => {
            return splitAndTrim(item.value);
    });

    return elements;
}

function getChainrings() {
    return getValuesFromInputsByClassName('input-chainring');
}

function getCassetes() {
    return getValuesFromInputsByClassName('input-cassete');
}

function buildDataset() {
    document.getElementById("results").innerHTML= '';
    const cranksets = getChainrings();
    const cassetes = getCassetes();
    
    const data = [];
    let id = 1;
    cranksets.forEach((chainrings) => {
        cassetes.forEach((cassete) => {
            const line = [];
            chainrings.forEach((chainringTeeth) => {
                if (chainringTeeth < 1) {
                    return console.error('Invalid chainring teeth');
                }

                cassete.forEach((cogTeeth) => {
                    line.push(chainringTeeth/cogTeeth);
                });
                
            });
            data.push({
                id: id++,
                chainset: chainrings,
                cassete: cassete,
                relation: line,
            });
        });
    });
    return data;
}

function calculate() {
    const infos = buildDataset();

    const data = infos.map((element) => {
        return {
            label: 'crank ' + element.chainset + ' with ' + element.cassete, 
            data: element.relation 
        };
    });

    document.getElementById('acquisitions').innerHTML = '';

    const config = {
        type: 'line',
        data: {
            datasets: data
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Gear ratios for combinations'
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'GearRatio'
              },
              suggestedMin: 0,
              suggestedMax: 10
            }
          }
        },
    };

    new Chart(document.getElementById('acquisitions'), config);
}

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init(elems);
});