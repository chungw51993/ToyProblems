function SeriesSum(n) {
  if (n === 0) {
    return '0.00';
  }

  let sum = 1;
  let nth = 4;

  for (let i = 1; i < n; i++) {
    sum += 1/nth
    nth += 3
  }

  return sum.toFixed(2);
}