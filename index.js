const inputChainring = '<li class="input-field"><input placeholder="Chainring teeth. ex.: 22, 36 or 42" type="text" /></li>';
const inputCassete = '<li class="input-field"><input placeholder="Cassete teeth. ex.: 11,12,13,14,15,18,21,24,28 or 15" type="text" /></li>';
 
function addChainring() {
    $('#chainring-inputs').append(inputChainring);
}

function removeChainring() {
    $("#chainring-inputs li:last-child").remove();
}

function addCassetes() {
    $('#cassetes-inputs').append(inputCassete);
}

function removeCassete() {
    $("#cassetes-inputs li:last-child").remove();
}

$(document).ready(function(){
    $('.tooltipped').tooltip();    
});