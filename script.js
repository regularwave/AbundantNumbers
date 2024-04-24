var sequenceOutput = document.getElementById('sequence');
function calcsequence() {
    var startSeed = document.getElementById('startseed').value;
    sequenceOutput.innerHTML = "Abundant numbers up to " + startSeed + ":";
    for (let j = 1; j <= startSeed; j++) {
        var uturn = Math.sqrt(j);
        propFacArr = [];
        for (let i = 1; i <= uturn; i++) {
            if (j % i == 0) {
                propFacArr.push(i);
                if (i > 1) {
                    propFacArr.push(j / i);
                }
            }
        }
        if (uturn % 1 == 0) {
            propFacArr.pop();
        }
        propFacArr.sort((a, b) => a - b);
        propFacSum = propFacArr.reduce((a, c) => a + c, 0)
        if (propFacSum > j) {
            sequenceOutput.innerHTML += "<br>" + j + " (" + propFacSum + " [" + propFacArr + "])"
        }
    }
}