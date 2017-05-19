function powerSet (string) {
  var sorted = string.split('').sort().filter(function(value, index, arr) {
    return arr[index + 1] !== value;
  }).join('');

  var result = [''];

  function searchSet(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      searchSet(prefix + chars[i], chars.slice(i + 1));
    }
  }

  searchSet('', sorted);

  return result;
}