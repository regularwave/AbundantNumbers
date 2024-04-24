// TODO
// get the second half of the factors
// sum factors
// see if sum of factors is > startSeed

var sequenceOutput = document.getElementById('sequence');

function calcsequence() {
    var startSeed = document.getElementById('startseed').value;
    sequenceOutput.innerHTML = '';

    var uturn = Math.sqrt(startSeed)

    sequenceOutput.innerHTML += "startseed: " + startSeed + "<br>";

    for (let i = 1; i < uturn; i++) {
        sequenceOutput.innerHTML += "i: " + i + "<br>" ;
    }

    sequenceOutput.innerHTML += "<br>";
    sequenceOutput.innerHTML += "uturn point: " + uturn;
}