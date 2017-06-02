function score( dice ) {
  let allRoll = {};
  let points = 0;

  for (let i = 0; i < dice.length; i++){
    if (allRoll[dice[i]] === undefined) {
      allRoll[dice[i]] = 1;
    } else {
      allRoll[dice[i]]++;
    }
  }

  for (let val in allRoll) {
    if (val === '1') {
      if (allRoll[val] >= 3) {
        points += 1000;
        allRoll[val] = allRoll[val] - 3;
      }
      for (let i = 0; i < allRoll[val]; i++) {
        points += 100;
      }
    } else if (val === '6' && allRoll[val] >= 3) {
      points += 600;
    } else if (val === '5') {
      if (allRoll[val] >= 3) {
        points += 500;
        allRoll[val] = allRoll[val] - 3;
      }
      for (let i = 0; i < allRoll[val]; i++) {
        points += 50;
      }
    } else if (val === '4' && allRoll[val] >= 3) {
      points += 400;
    } else if (val === '3' && allRoll[val] >= 3) {
      points += 300;
    } else if (val === '2' && allRoll[val] >= 3) {
      points += 200;
    }
  }

  return points;
}