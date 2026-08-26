const cassetteList = [
  // 5-speed
  '14-16-18-21-28',
  '14-16-18-21-32',
  '14-17-20-24-28',
  '13-15-18-21-28',
  '14-16-18-21-24',
  '13-14-16-18-21',
  '13-14-16-18-24',
  '13-14-16-18-28',
  '14-16-18-24-32',
  '13-14-16-21-28',
  // 6-speed
  '14-16-18-21-24-28',
  '13-14-16-18-21-24',
  '13-15-17-20-23-26',
  '14-16-18-21-26-32',
  '13-14-16-18-21-28',
  '14-16-18-21-24-32',
  '13-15-17-20-24-28',
  '14-16-18-21-26-28',
  '13-14-16-18-21-26',
  '13-15-17-20-23-28',
  // 7-speed
  '11-13-15-18-21-24-28',
  '12-14-16-18-21-24-28',
  '12-14-16-18-21-26-32',
  '12-14-16-18-21-24-32',
  '13-15-17-19-21-23-26',
  '12-14-16-18-21-28-34',
  '13-15-17-20-23-26-30',
  '12-14-17-20-23-26-30',
  '12-14-16-18-21-26-34',
  '13-15-17-19-21-24-28',
  '12-14-16-18-21-24-34',
  '11-13-15-17-20-24-28',
  // 8-speed
  '12-13-14-15-17-19-21-23',
  '12-13-15-17-19-21-23-25',
  '13-14-15-17-19-21-23-26',
  '11-13-15-17-19-21-24-28',
  '11-13-15-17-20-23-26-30',
  '11-13-15-17-19-21-23-26',
  '11-13-15-17-19-21-24-26',
  '11-13-15-17-19-21-23-28',
  '11-13-15-17-19-21-24-30',
  '12-13-14-15-17-19-21-25',
  '11-13-15-17-20-23-26-28',
  '12-13-14-15-17-19-21-26',
  '11-13-15-17-19-21-23-32',
  '11-13-15-17-19-21-24-32',
  '12-14-16-18-21-24-28-32',
  // 9-speed
  '11-12-13-14-15-17-19-21-23',
  '11-13-15-18-21-24-28-32',
  '11-13-15-18-21-24-28-34',
  '12-14-16-18-21-24-28-32',
  '11-13-15-18-22-27-33-40',
  '11-13-15-18-22-27-35-45',
  '11-13-15-17-19-21-23-25-28',
  '11-13-15-17-19-21-24-28-34',
  '11-13-15-17-19-21-24-30-36',
  '11-13-15-17-20-23-26-30-34',
  '11-13-15-18-21-24-28-32-36',
  '11-13-15-17-19-21-24-28-36',
  '11-13-15-18-21-24-28-32-34',
  '11-13-15-17-20-23-26-32-36',
  // 10-speed
  '11-12-13-14-15-17-19-21-23-25',
  '11-13-15-17-19-21-24-28-32-36',
  '11-13-15-17-19-21-23-25-28-32',
  '11-13-15-17-20-23-26-30-34-36',
  '11-13-15-17-20-23-26-32-36-40',
  '11-13-15-17-19-21-24-28-34-40',
  '11-13-15-17-20-23-26-30-34-40',
  '11-13-15-17-19-21-24-28-32-42',
  '11-13-15-17-19-21-24-28-32-34',
  '11-13-15-17-19-21-24-28-32-36-40',
  '11-13-15-17-19-21-24-28-32-34-36',
  '11-13-15-17-20-23-26-30-34-42',
  '11-13-15-17-19-21-24-28-34-36-42',
  '11-13-15-17-19-21-24-28-32-34-42',
  '11-13-15-17-19-21-24-28-32-36-42',
  // 11-speed
  '11-12-13-14-15-16-17-19-21-23-25',
  '11-13-15-17-19-21-24-28-32-36',
  '11-12-13-14-15-17-19-21-23-25-28',
  '12-13-14-15-17-19-21-23-25-28-32',
  '11-12-14-16-18-20-22-25-28-32-36',
  '11-13-15-17-19-21-23-26-30-34-36',
  '11-13-15-17-20-23-26-30-34-39-42',
  '11-13-15-17-19-21-24-28-32-36-40',
  '11-13-15-17-19-21-24-28-32-34-42',
  '11-13-15-18-21-24-28-32-37-42',
  '11-13-15-17-20-23-26-30-36-42-50',
  '11-13-15-18-21-24-28-32-36-42-46',
  '11-13-15-17-20-23-26-30-34-39-45',
  '11-13-15-17-19-21-24-28-32-37-46',
  '11-13-15-17-20-23-26-30-36-43-50',
  '11-13-15-17-20-23-28-34-41-48-52',
  '11-13-15-18-21-24-28-33-39-45-51',
  '11-13-15-17-19-21-24-27-31-35-40-46',
  '11-13-15-17-19-21-24-28-32-37-42-46',
  '11-13-15-17-20-23-26-30-34-39-42-46',
  // 12-speed
  '11-12-13-14-15-16-17-19-21-24-27-30',
  '11-12-13-14-15-17-19-21-24-27-30-34',
  '11-12-13-14-15-17-19-21-24-28-32-36',
  '11-13-15-17-19-21-23-25-27-30-34-36',
  '11-13-15-17-19-21-24-27-31-35-40-46',
  '11-13-15-17-19-21-24-28-32-37-42-46',
  '11-13-15-17-20-23-26-30-34-39-42-46',
  '10-12-13-14-16-18-21-24-28-32-36-42',
  '10-12-14-16-18-21-24-28-32-36-42-48',
  '10-12-14-16-18-21-24-28-32-36-42-52',
  '10-12-13-14-16-18-21-24-28-33-39-45-51',
  '10-12-14-16-18-21-24-28-33-39-45-51',
  '10-12-13-14-16-18-21-24-28-32-36-40-46',
  '10-12-14-16-18-21-24-28-32-36-40-45',
  '10-12-14-16-18-21-24-28-33-39-45-48',
  '10-12-14-16-18-21-24-28-32-36-40-42',
  '10-12-14-16-18-21-24-28-32-36-42-46',
  '10-12-14-16-18-21-24-28-32-36-42-50',
  '10-12-14-16-18-21-24-28-32-36-42-52',
  // 13-speed
  '11-12-13-14-15-16-17-19-21-24-27-30-34',
  '11-12-13-14-15-16-17-19-21-24-28-32-36',
  '11-12-13-14-15-17-19-21-24-27-30-34-36',
  '11-12-13-14-15-16-17-19-21-24-27-30-36',
  '11-12-13-14-15-17-19-21-24-28-32-36-42',
  '11-12-13-14-15-17-19-21-24-27-30-34-40',
  // 14-speed
  '10-12-14-16-18-21-24-28-32-36-40-45-51',
  '10-12-14-16-18-21-24-28-33-39-45-51-56',
  '10-12-14-16-18-21-24-28-32-36-42-48-52',
  '10-12-14-16-18-21-24-28-32-36-42-46-50-52',
];

const cassetteBrands = {
  // 5-speed
  '14-16-18-21-24': 'Shimano Tourney TZ',
  '13-14-16-18-21': 'Shimano MF-TZ21',
  '13-14-16-18-24': 'Shimano Tourney TZ',
  '14-16-18-21-28': 'Shimano Tourney TZ',
  '13-14-16-18-28': 'Shimano MF-HG20',
  '13-15-18-21-28': 'SunRace MFR',
  '14-17-20-24-28': 'SunRace MFR',
  '14-16-18-24-32': 'SunRace MFR',
  '13-14-16-21-28': 'Shimano Tourney TZ',
  '14-16-18-21-32': 'SunRace MFR',
  // 6-speed
  '13-14-16-18-21-24': 'Shimano Tourney TY',
  '14-16-18-21-24-28': 'Shimano Tourney TY',
  '13-14-16-18-21-26': 'Shimano MF-HG20',
  '13-15-17-20-23-26': 'SunRace MFR',
  '13-14-16-18-21-28': 'Shimano MF-HG20',
  '14-16-18-21-26-28': 'Shimano Tourney TY',
  '13-15-17-20-23-28': 'SunRace MFR',
  '14-16-18-21-26-32': 'SunRace MFR',
  '13-15-17-20-24-28': 'SunRace MFR',
  '14-16-18-21-24-32': 'SunRace MFR',
  // 7-speed
  '11-13-15-18-21-24-28': 'Shimano HG200-7',
  '12-14-16-18-21-24-28': 'Shimano HG200-7',
  '12-14-16-18-21-26-32': 'Shimano HG200-7',
  '12-14-16-18-21-24-32': 'SunRace CSMS2',
  '13-15-17-19-21-23-26': 'Shimano HG200-7',
  '12-14-16-18-21-28-34': 'SunRace CSMS2',
  '13-15-17-20-23-26-30': 'SunRace CSMS2',
  '12-14-17-20-23-26-30': 'SunRace CSMS2',
  '12-14-16-18-21-26-34': 'SunRace CSMS2',
  '13-15-17-19-21-24-28': 'Shimano HG200-7',
  '12-14-16-18-21-24-34': 'SunRace CSMS2',
  '11-13-15-17-20-24-28': 'Shimano HG200-7',
  // 8-speed
  '12-13-14-15-17-19-21-23': 'Shimano HG400-8',
  '12-13-15-17-19-21-23-25': 'Shimano HG400-8',
  '13-14-15-17-19-21-23-26': 'Shimano HG400-8',
  '11-13-15-17-19-21-24-28': 'Shimano HG51-8 / HG400-8',
  '11-13-15-17-20-23-26-30': 'Shimano HG51-8 / HG400-8',
  '11-13-15-17-19-21-23-26': 'Shimano HG400-8',
  '11-13-15-17-19-21-24-26': 'Shimano HG400-8',
  '11-13-15-17-19-21-23-28': 'Shimano HG400-8',
  '11-13-15-17-19-21-24-30': 'Shimano HG400-8',
  '12-13-14-15-17-19-21-25': 'Shimano HG400-8',
  '11-13-15-17-20-23-26-28': 'SunRace CS8',
  '12-13-14-15-17-19-21-26': 'Shimano HG400-8',
  '11-13-15-17-19-21-23-32': 'SunRace CS8',
  '11-13-15-17-19-21-24-32': 'SunRace CS8',
  '12-14-16-18-21-24-28-32': 'SunRace CS8',
  // 9-speed
  '11-12-13-14-15-17-19-21-23': 'Shimano HG300-9 / Sora',
  '11-13-15-18-21-24-28-32': 'Shimano HG200-9 / Alivio',
  '11-13-15-18-21-24-28-34': 'Shimano HG200-9 / Alivio',
  '12-14-16-18-21-24-28-32': 'Shimano HG200-9 / Alivio',
  '11-13-15-18-22-27-33-40': 'Shimano HG201-9 / Alivio',
  '11-13-15-18-22-27-35-45': 'Shimano CS-HG201-9 / Alivio',
  '11-13-15-17-19-21-23-25-28': 'Shimano HG300-9',
  '11-13-15-17-19-21-24-28-34': 'Shimano HG400-9 / Deore',
  '11-13-15-17-19-21-24-30-36': 'Shimano HG400-9 / Deore',
  '11-13-15-17-20-23-26-30-34': 'SunRace CS9',
  '11-13-15-18-21-24-28-32-36': 'SunRace CS9',
  '11-13-15-17-19-21-24-28-36': 'SunRace CS9',
  '11-13-15-18-21-24-28-32-34': 'Shimano HG400-9',
  '11-13-15-17-20-23-26-32-36': 'SunRace CS9',
  // 10-speed
  '11-12-13-14-15-17-19-21-23-25': 'Shimano 105 / Ultegra',
  '11-13-15-17-19-21-24-28-32-36': 'Shimano 105 CS-5700',
  '11-13-15-17-19-21-23-25-28-32': 'Shimano 105 CS-5700',
  '11-13-15-17-20-23-26-30-34-36': 'SunRace CS10',
  '11-13-15-17-20-23-26-32-36-40': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-34-40': 'SunRace CS10',
  '11-13-15-17-20-23-26-30-34-40': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-32-42': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-32-34': 'Shimano 105 / Ultegra',
  '11-13-15-17-19-21-24-28-32-36-40': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-32-34-36': 'SunRace CS10',
  '11-13-15-17-20-23-26-30-34-42': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-34-36-42': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-32-34-42': 'SunRace CS10',
  '11-13-15-17-19-21-24-28-32-36-42': 'SunRace CS10',
  // 11-speed Road
  '11-12-13-14-15-16-17-19-21-23-25': 'Shimano Dura-Ace / Ultegra',
  '11-13-15-17-19-21-24-28-32-36': 'Shimano 105 CS-R7000',
  '11-12-13-14-15-17-19-21-23-25-28': 'Campagnolo Record 11s',
  '12-13-14-15-17-19-21-23-25-28-32': 'Campagnolo Chorus 11s',
  '11-12-14-16-18-20-22-25-28-32-36': 'Campagnolo Potenza 11s',
  '11-13-15-17-19-21-23-26-30-34-36': 'SunRace CS11',
  // 11-speed MTB
  '11-13-15-17-20-23-26-30-34-39-42': 'Shimano SLX CS-M7000',
  '11-13-15-17-19-21-24-28-32-36-40': 'Shimano XT CS-M8000',
  '11-13-15-17-19-21-24-28-32-34-42': 'SunRace CS11',
  '11-13-15-18-21-24-28-32-37-42': 'Shimano XT CS-M8000',
  '11-13-15-17-20-23-26-30-36-42-50': 'SunRace CS11',
  '11-13-15-18-21-24-28-32-36-42-46': 'SunRace CS11',
  '11-13-15-17-20-23-26-30-34-39-45': 'Shimano SLX CS-M7000',
  '11-13-15-17-19-21-24-28-32-37-46': 'SunRace CS11',
  '11-13-15-17-20-23-26-30-36-43-50': 'SunRace CS11',
  '11-13-15-17-20-23-28-34-41-48-52': 'SunRace CS11',
  '11-13-15-18-21-24-28-33-39-45-51': 'SRAM PG-1130',
  '11-13-15-17-19-21-24-27-31-35-40-46': 'SunRace CS11',
  '11-13-15-17-19-21-24-28-32-37-42-46': 'SunRace CS11',
  '11-13-15-17-20-23-26-30-34-39-42-46': 'SunRace CS11',
  // 12-speed MTB Shimano
  '11-12-13-14-15-16-17-19-21-24-27-30': 'Shimano Deore CS-M6100',
  '11-12-13-14-15-17-19-21-24-27-30-34': 'Shimano Deore CS-M6100',
  '11-12-13-14-15-17-19-21-24-28-32-36': 'Shimano SLX CS-M7100',
  '10-12-13-14-16-18-21-24-28-32-36-42': 'Shimano Deore CS-M6100',
  '10-12-14-16-18-21-24-28-32-36-42-48': 'Shimano SLX CS-M7100',
  '10-12-14-16-18-21-24-28-32-36-42-52': 'Shimano XT CS-M8100 / XTR CS-M9100',
  '10-12-13-14-16-18-21-24-28-33-39-45-51': 'Shimano SLX CS-M7100',
  '10-12-14-16-18-21-24-28-33-39-45-51': 'Shimano XT CS-M8100 / XTR CS-M9100',
  '10-12-13-14-16-18-21-24-28-32-36-40-46': 'Shimano Deore CS-M6100',
  '10-12-14-16-18-21-24-28-32-36-40-45': 'SunRace CS12',
  '10-12-14-16-18-21-24-28-33-39-45-48': 'SunRace CS12',
  '10-12-14-16-18-21-24-28-32-36-40-42': 'SunRace CS12',
  '10-12-14-16-18-21-24-28-32-36-42-46': 'SunRace CS12',
  '10-12-14-16-18-21-24-28-32-36-42-50': 'SunRace CS12',
  '10-12-14-16-18-21-24-28-32-36-42-52': 'SunRace CS12',
  // 12-speed Road Shimano
  '11-13-15-17-19-21-23-25-27-30-34-36': 'Shimano 105 CS-R7100',
  '11-13-15-17-19-21-24-27-31-35-40-46': 'SunRace CS12',
  '11-13-15-17-19-21-24-28-32-37-42-46': 'SunRace CS12',
  '11-13-15-17-20-23-26-30-34-39-42-46': 'SunRace CS12',
  // 12-speed SRAM Eagle
  '10-12-14-16-18-21-24-28-32-36-42-52': 'SRAM GX Eagle XG-1275 / XX1 XG-1299',
  // 12-speed Campagnolo
  '11-12-13-14-15-16-17-19-21-23-26-29': 'Campagnolo Super Record 12s',
  '11-12-13-14-15-16-17-19-22-25-28-32': 'Campagnolo Super Record 12s',
  '11-12-13-14-15-16-17-19-22-25-29-34': 'Campagnolo Record 12s',
  // 13-speed
  '11-12-13-14-15-16-17-19-21-24-27-30-34': 'Campagnolo Super Record 13s',
  '11-12-13-14-15-16-17-19-21-24-28-32-36': 'Campagnolo Super Record 13s',
  '11-12-13-14-15-17-19-21-24-27-30-34-36': 'Campagnolo Super Record 13s',
  '11-12-13-14-15-16-17-19-21-24-27-30-36': 'Campagnolo Super Record 13s',
  '11-12-13-14-15-17-19-21-24-28-32-36-42': 'Campagnolo Super Record 13s',
  '11-12-13-14-15-17-19-21-24-27-30-34-40': 'Campagnolo Super Record 13s',
  // 14-speed
  '10-12-14-16-18-21-24-28-32-36-40-45-51': 'SRAM Eagle XX1 14s Concept',
  '10-12-14-16-18-21-24-28-33-39-45-51-56': 'SunRace 14s',
  '10-12-14-16-18-21-24-28-32-36-42-48-52': 'SunRace 14s',
  '10-12-14-16-18-21-24-28-32-36-42-46-50-52': 'SunRace 14s',
};

const chainringList = [
  '53-39',
  '52-36',
  '50-34',
  '46-36',
  '48-35',
  '43-30',
  '38-24',
  '36-26',
  '36-22',
  '34',
  '32',
  '30',
  '28',
  '50-39-30',
  '48-36-26',
  '44-32-22',
  '22-36',
  '24-38',
  '40',
  '42',
  '44'
];

const chainringSuggestions = Object.fromEntries(chainringList.map(c => [c, null]));

const cassetteSuggestions = Object.fromEntries(
  cassetteList.map(c => [cassetteBrands[c] ? `${c} (${cassetteBrands[c]})` : c, null])
);

const CHART_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
  '#393b79', '#637939', '#8c6d31', '#843c39',
];

function createInputTemplate(className, placeholder) {
  const el = document.createElement('li');
  el.className = 'input-field';
  const input = document.createElement('input');
  input.className = className;
  input.placeholder = placeholder;
  input.type = 'text';
  el.appendChild(input);
  return el;
}

const chainringInputTemplate = createInputTemplate('input-chainring chainring-autocomplete', 'Chainring teeth. ex.: 22-36 or 42');
const cassetteInputTemplate = createInputTemplate('input-cassette cassette-autocomplete', 'Type tooth count or select brand (e.g. 11-13-15...)');

function initAutocompleteForInputs() {
  document.querySelectorAll('.cassette-autocomplete').forEach(input => {
    if (!input.dataset.autocompleteInit) {
      M.Autocomplete.init(input, {
        data: cassetteSuggestions,
        minLength: 1
      });
      input.dataset.autocompleteInit = 'true';
    }
  });

  const chainringInputs = document.querySelectorAll('.chainring-autocomplete');
  chainringInputs.forEach(input => {
    M.Autocomplete.init(input, {
      data: chainringSuggestions,
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

function addHTMLToUL(ulId, templateNode) {
  const ulElement = getULElement(ulId);
  if (!ulElement) return;
  const clone = templateNode.cloneNode(true);
  ulElement.appendChild(clone);
}

function removeLastLI(ulId) {
  const ulElement = getULElement(ulId);
  if (!ulElement) return;
  const lastLI = ulElement.querySelector('li:last-child');
  lastLI ? ulElement.removeChild(lastLI) : console.warn(`No list items to remove in UL with ID "${ulId}".`);
}

function addChainring() {
  addHTMLToUL("chainring-inputs", chainringInputTemplate);
  initAutocompleteForInputs();
}

function removeChainring() {
  removeLastLI("chainring-inputs");
}

function addCassette() {
  addHTMLToUL("cassettes-inputs", cassetteInputTemplate);
  initAutocompleteForInputs();
}

function removeCassette() {
  removeLastLI("cassettes-inputs");
}

function splitAndTrim(input) {
  return input.split('-')
    .map(value => Number(value.trim()))
    .filter(num => !isNaN(num) && num > 0);
}

function getValuesFromInputsByClassName(className) {
  return Array.from(document.querySelectorAll(`.${className}`))
    .map(input => splitAndTrim(input.value))
    .filter(values => values.length > 0);
}

function buildDataset(chainrings, cassettes) {
  const data = [];
  let id = 1;

  chainrings.forEach(chainset => {
    cassettes.forEach(cassette => {
      const ratioWithLabels = chainset.flatMap(chainring =>
        cassette.map(cog => {
          const ratio = chainring / cog;
          return { ratio, label: `${chainring}/${cog}: ${ratio.toFixed(2)}` };
        })
      );

      data.push({ id: id++, chainset, cassette, ratioWithLabels });
    });
  });

  return data;
}

function sortDataset(dataset, sortOrder) {
  if (sortOrder !== "ascending") return dataset;
  return dataset.map(item => ({
    ...item,
    ratioWithLabels: [...item.ratioWithLabels].sort((a, b) => a.ratio - b.ratio),
  }));
}

function generateLabels(dataset) {
  const maxSize = Math.max(...dataset.map(d => d.ratioWithLabels.length), 0);
  return Array.from({ length: maxSize }, (_, i) => i + 1);
}

function updateChart(dataset, chart) {
  chart.data.labels = generateLabels(dataset);
  chart.data.datasets = dataset.map((item, i) => {
    const color = CHART_COLORS[i % CHART_COLORS.length];
    return {
      label: `Crank ${item.chainset} with Cassette ${item.cassette}`,
      data: item.ratioWithLabels.map(d => d.ratio),
      fill: false,
      borderColor: color,
      backgroundColor: color,
      tension: 0.3,
      labels: item.ratioWithLabels.map(d => d.label),
    };
  });
  chart.update();
}

function updateGearRatioTable(chainrings, cassettes) {
  const tableBody = document.getElementById("gear-ratio-table").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  const allChainringValues = [...new Set(chainrings.flat())].sort((a, b) => a - b);
  const allCassetteValues = [...new Set(cassettes.flat())].sort((a, b) => a - b);

  const headerRow = tableBody.insertRow();
  headerRow.insertCell().innerText = "Cog / Chainring";
  allChainringValues.forEach(chainring => {
    headerRow.insertCell().innerText = chainring;
  });

  allCassetteValues.forEach(cog => {
    const row = tableBody.insertRow();
    row.insertCell().innerText = cog;
    allChainringValues.forEach(chainring => {
      row.insertCell().innerText = (chainring / cog).toFixed(2);
    });
  });
}

function calculate() {
  const chainrings = getValuesFromInputsByClassName("input-chainring");
  const cassettes = getValuesFromInputsByClassName("input-cassette");

  if (chainrings.length === 0 || cassettes.length === 0) {
    alert("Please enter valid chainring and cassette values.");
    return;
  }

  let dataset = buildDataset(chainrings, cassettes);
  dataset = sortDataset(dataset, document.getElementById("sort").value);

  if (!window.myChart) {
    const ctx = document.getElementById('acquisitions').getContext('2d');
    window.myChart = new Chart(ctx, {
      type: 'line',
      data: { labels: [], datasets: [] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          title: { display: true, text: 'Gear Ratios for Chainring and Cassette Combinations' },
          legend: { display: true, position: "bottom" },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return window.myChart.data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.dataIndex];
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Gear Step' } },
          y: { title: { display: true, text: 'Gear Ratio' } }
        }
      }
    });
  }

  updateChart(dataset, window.myChart);
  updateGearRatioTable(chainrings, cassettes);
}

document.addEventListener('DOMContentLoaded', function () {
  initAutocompleteForInputs();

  const elems = document.querySelectorAll('.tooltipped');
  const select = document.querySelectorAll('select');
  M.Tooltip.init(elems);
  M.FormSelect.init(select);
});
