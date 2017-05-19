commonCharacters = function(string1, string2){
  var result = '';

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j] && string2[j] !== ' ' && result.indexOf(string2[j]) === -1) {
        result += string2[j];
      }
    }
  }

  return result;
};