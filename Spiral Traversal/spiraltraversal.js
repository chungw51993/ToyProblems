function spiralTraversal (matrix) {
  let result = [];

  function traverse(array) {
    if (array.length === 0) {
      return;
    }

    result = result.concat(array.shift());

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i][array[i].length - 1] !== undefined) {
        result.push(array[i].pop());
      }
    }

    if (array.length !== 0) {
      result = result.concat(array.pop().reverse());
    }

    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i][0] !== undefined) {
        result.push(array[i].shift());
      }
    }

    traverse(array);
  }

  traverse(matrix);

  return result;
}