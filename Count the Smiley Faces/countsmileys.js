function countSmileys(arr) {
  let count = 0;

  arr.forEach((face) => {
    if (face.length === 3) {
      if ((face[0] === ':' || face[0] === ';') &&
          (face[1] === '-' || face[1] === '~') &&
          (face[2] === ')' || face[2] === 'D')) {
        count++;
      }
    } else {
      if ((face[0] === ':' || face[0] === ';') &&
          (face[1] === ')' || face[1] === 'D')) {
        count++;
      }
    }
  })

  return count;
}