function longestPalindrome (string) {
  let longest = '';
  let temp = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        temp = string.slice(i, j + 1);
        if (temp === temp.split('').reverse().join('')) {
          if (temp.length > longest.length) {
            longest = temp;
          }
        }
      }
    }
  }

  return longest;
}