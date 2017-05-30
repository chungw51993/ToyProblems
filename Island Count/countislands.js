function countIslands (mapStr) {
  const lines = mapStr.split('\n');
  const separateArr = lines.map((line) => {
    return line.split('');
  });
  let count = 0;

  if (separateArr[0][0] === '0' && separateArr.length === 1) {
    count++;
  }

  for (let i = 0; i < separateArr.length; i++) {
    for (let j = 0; j < separateArr[i].length; j++) {
      if (separateArr[i][j] === '0') {
        if (i === 0 && j === 0) {
          if (separateArr[i][j + 1] === '.' && separateArr[i + 1][j] ==='.') {
            count++;
          }
        } else if ((i === 0 || separateArr[i - 1][j] === '.') && (j === 0 || separateArr[i][j - 1] === '.')) {
          count++;
        }
      }
    }
  }

  return count;
}