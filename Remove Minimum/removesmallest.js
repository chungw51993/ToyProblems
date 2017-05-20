function removeSmallest(numbers) {
  let result = numbers.slice();
  let min = Infinity;
  let index;

  for (let i = 0; i < result.length; i++) {
    if (result[i] < min) {
      min = result[i];
      index = i;
    }
  }

  result.splice(index, 1);

  return result;
}