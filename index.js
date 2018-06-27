
function buildHistogram(letters) {
  magazineHistogram = {};
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in magazineHistogram) {
      magazineHistogram[letters[i]] += 1;
    } else {
      magazineHistogram[letters[i]] = 1;
    }
  }
}

function binaryMatch() {

}

function canBuildNote() {

}
