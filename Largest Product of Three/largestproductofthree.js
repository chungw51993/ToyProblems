function largestProductOfThree (array) {
  let sorted = array.sort((a, b) => {
    return a - b;
  });

  let first = array[array.length - 1] * array[1] * array[0];

  let second = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];


  return Math.max(first, second);
}