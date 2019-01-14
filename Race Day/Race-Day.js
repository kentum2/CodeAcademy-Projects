let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let runnerAge = 18;
if (earlyRunner && runnerAge >18) {
  raceNumber += 1000;
}
if (earlyRunner && runnerAge >18) {
  console.log (`Race will start at 9:30, your race number is: ${raceNumber}.`);
}
else if (!earlyRunner && runnerAge >18) {
   console.log (`Race will start at 11:00am, your race number is: ${raceNumber}.`);
}
else if (runnerAge < 18) {
  console.log (`Race will start at 12:30, your race number is: ${raceNumber}.`);
}
else if (runnerAge === 18) {
  console.log (`Go visit the registration desk: ${raceNumber}.`);
}