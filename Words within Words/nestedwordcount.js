function nestedWordCount (wordList) {
  let greatestWord = '';
  let max = 0;
  let count = 0;
  let index = 0;
  let word = wordList[index];

  function checkWord (string) {
    for (let i = 0; i < wordList.length; i++) {
      if (string.includes(wordList[i])) {
        count++;
      }
    }

    if (count > max) {
      max = count;
      greatestWord = string;
      count = 0;
    } else {
      count = 0;
    }

    if (index !== wordList.length - 1) {
      index++;
      nextWord = wordList[index];
      checkWord(nextWord);
    }
  }

  checkWord(word);

  return greatestWord;
}
