function arrayception(array){
  var result = 0;
  var count = 0;
  for (var i=0; i < array.length; i++){
    if (array[i].length === 0){
      count = 0;
    }
    else if (Array.isArray(array[i])){
      count = arrayception(array[i]);
      if (count>0) {
        count+=1;
      }

    }
    else{
      count = 1;
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
}