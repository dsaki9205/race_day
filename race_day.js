let raceNumber = Math.floor(Math.random() * 1000);

let early_registred = true;
//creating runner's age
let age = 27;
//creating control flow to see if the runner is adult or not and add 1000 ti raceNumber in if else
if(age > 18 && early_registred === false){
  raceNumber += 1000;
};
if(age > 18 && early_registred){
  console.log( `The race will start at 9:30 A.M. and your race number is ${raceNumber}`);
} else if(age > 18 && !early_registered){
  console.log(`The race will start at 11:00 A.M. and your race number is ${raceNumber}`);
} else if (age < 18 ){
  console.log(`The race will start at 12:30 P.M. and your race number is ${raceNumber}`)
}
else{
  console.log("See the registration desk")
}