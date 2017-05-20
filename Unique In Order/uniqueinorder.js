var uniqueInOrder=function(iterable){
  let array, temp;
  let result = [];
  if (typeof iterable === 'string') {
    array = iterable.split('');
  } else {
    array = iterable;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== temp) {
      result.push(array[i]);
      temp = array[i];
    }
  }

  return result;
};