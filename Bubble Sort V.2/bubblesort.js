function bubbleSort (input) {
  var temp;
  var sorted = false;

  while(!sorted) {
    sorted = true;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i+1]) {
        temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        sorted = false;
      }
    }
  }

  return input;
}