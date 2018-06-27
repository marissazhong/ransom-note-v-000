
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
  let letterCounts = buildHistogram(magazine);
  // if letter is found, return true and delete letter from histogram
  if (letter in letterCounts) {
    return true;
  }
  return false;
}

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]

function isLetter(str) {

}

function canBuildNote(magazine, note) {
  note = note.replace(/[^a-zA-z]/g,"");
  note_letters = note.split("");
}
