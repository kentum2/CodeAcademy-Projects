const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 9;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 5;
  } else if (day === 'sunday') {
    return 12;
  }
}
//const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
const getActualSleepHours = () => {
 return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
};
//const getIdealSleepHours = idealHours => idealHours * 7; Alternative way
const getIdealSleepHours = () => {
  let idealHours = 8;
    return idealHours * 7;
  }

const calculateSleepDept = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return 'You have got the perfect amount of sleep';
    
  } else if (actualSleepHours > idealSleepHours) {
    	console.log('You got '+ (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed');
  } else if (actualSleepHours < idealSleepHours) {
    	console.log('You got' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed. You should get some rest');
  }
}

calculateSleepDept();