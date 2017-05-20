function duplicateCount(text){
  const lowerText = text.toLowerCase();
  let letters = {};
  let count = 0;

  for (let i = 0; i < lowerText.length; i++) {
    if (letters[lowerText[i]] === undefined) {
      letters[lowerText[i]] = 1;
    } else {
      letters[lowerText[i]]++;
    }
  }

  for (let i in letters) {
    if (letters[i] > 1) {
      count++
    }
  }

  return count;
}
