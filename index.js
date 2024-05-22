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

    const lineSize = (infos.reduce((biggesRelationLength, currentObject) => {
        const { relation: currentRelation = [] } = currentObject;
        const { relation: biggestRelation = [] } = biggesRelationLength || {};
      
        return currentRelation.length > biggestRelation.length ? currentObject : biggesRelationLength;
      }, {})).relation.length;
    
    const labels = Array.from({ length: lineSize }, (_, i) => i+1);
    const chartDataset = infos.map((element) => {
        const sortSelect = document.getElementById('sort').value;
        const relation = sortSelect === 'default' ? element.relation : element.relation.sort();
        
        while (relation.length < lineSize) {
            relation.push(NaN);
        }

        return {
            label: 'crank ' + element.chainset + ' with ' + element.cassete, 
            data: relation ,
            cubicInterpolationMode: 'monotone',
        };
    });

    document.getElementById('chart-container').innerHTML = '';
    document.getElementById('chart-container').innerHTML = '<canvas id="acquisitions"></canvas>';

    const config = {
        type: 'line',
        data: {
            labels,
            datasets: chartDataset
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
          },
          plugins: {
            title: {
              display: true,
              text: 'Gear ratios for combinations'
            },
            legend: {
              position: 'bottom',
            },
            tooltip: {
                enabled: true,
                external: function (context) {
                    context.tooltip.body.forEach((element) => {
                        const content = element.lines[0].split(':')[1];
                        element.lines[0] = content;
                    })
                }
            }
          },
        },
    };

    new Chart(document.getElementById('acquisitions'), config);
}

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.tooltipped');
    const select = document.querySelectorAll('select');
    const instancesElems = M.Tooltip.init(elems);
    const instanceSelect = M.FormSelect.init(select);
});