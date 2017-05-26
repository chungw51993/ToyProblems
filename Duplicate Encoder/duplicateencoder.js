function duplicateEncode(word){
  word = word.toLowerCase();
  var string = '';

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      string += ')';
    } else {
      string += '(';
    }
  }

  return string;
}
