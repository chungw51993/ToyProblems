function createPhoneNumber(numbers){
  let phoneNum = '(';

  for (let i = 0; i < numbers.length; i++){
    if (i === 3) {
      phoneNum += ') ' + numbers[i];
    } else if (i === 6) {
      phoneNum += '-' + numbers[i];
    } else {
      phoneNum += numbers[i];
    }
  }

  return phoneNum;
}