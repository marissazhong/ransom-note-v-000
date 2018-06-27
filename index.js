
function buildHistogram(magazine) {
  magazineHistogram = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in magazineHistogram) {
      magazineHistogram[magazine[i]] += 1;
    } else {
      magazineHistogram[magazine[i]] = 1;
    }
  }
  return magazineHistogram;
}

//console.log(buildHistogram(magazine));

function binaryMatch(magazine, letter) {
  let letterCounts = buildHistogram(letters);
  // if 
}

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]

function canBuildNote() {

}
