function insertionSort(array){
  var temp;

  for(var i = 1; i < array.length; ++i) {
    temp = array[i];

    for(var j = i-1; j >= 0; j--) {
      if (array[j].value > temp.value){
        array[j+1] = array[j];
      } else {
        break;
      }
    }
    array[j+1] = temp;
  }

  return array;
}

