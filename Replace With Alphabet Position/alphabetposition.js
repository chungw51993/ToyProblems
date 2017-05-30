function alphabetPosition(text) {
  text = text.toLowerCase();
  let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let nums = [];

  for (let i = 0; i < text.length; i++) {
    if (alphabets.indexOf(text[i]) !== -1) {
      nums.push(alphabets.indexOf(text[i]) + 1);
    }
  }

  return nums.join(' ');
}