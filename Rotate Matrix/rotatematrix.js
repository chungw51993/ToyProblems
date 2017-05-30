function rotateMatrix (matrix) {
  var last = matrix.length - 1;
  let newMatrix = matrix[0].map((col, i) => {
    return matrix.map((row) => {
      return row[i];
    });
  });

  return newMatrix.map((row) => {
    return row.reverse();
  });
}