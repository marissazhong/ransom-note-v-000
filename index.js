
function buildHistogram(letters) {
  magazineHistogram = {};
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in magazineHistogram) {
      magazineHistogram[letters[i]] += 1;
    } else {
      magazineHistogram[letters[i]] = 1;
    }
  }
  return magazineHistogram;
}

//console.log(buildHistogram(magazine));

function binaryMatch() {

}

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]

function canBuildNote() {

}
