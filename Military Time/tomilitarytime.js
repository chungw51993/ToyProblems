function toMilitary (time) {
  const meridiem = time.slice(time.length - 2);
  let hour = time.split(':')[0];
  let min = time.split(':')[1].slice(0, 2);

  if (meridiem === 'pm' && hour !== '12') {
    hour = parseInt(hour) + 12;
  } else if (meridiem === 'pm' && hour === '12' ) {
    hour = '12';
  } else if (meridiem === 'am' && hour === '12') {
    hour = '00';
  } else if (meridiem !== 'pm' && meridiem !== 'am') {
    return time;
  } else {
    hour = '0' + hour;
  }

  return hour.toString() + ':' + min;
}