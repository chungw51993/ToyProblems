function removeSmallest(numbers) {
  let result = numbers.slice();
  let min = result[0];
  let index = 0;

  for (let i = 1; i < result.length; i++) {
    if (result[i] < min) {
      min = result[i];
      index = i;
    }
  }

  result.splice(index, 1);

  return result;
}