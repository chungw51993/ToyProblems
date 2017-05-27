function onlyUnique (str) {
  var unique = str.split('').filter(function(value, index, arr) {
    return arr.indexOf(value) === arr.lastIndexOf(value);
  }).join('');

  return unique;
}