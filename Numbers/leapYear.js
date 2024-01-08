let year = 1000;

function result(year) {
  if (year % 400 === 0) {
    return console.log("It is a leap year");
  }
  if(year%100===0){
    return console.log("It is not a leap year")
  }
  if(year%4 === 0){
    return console.log("It is a leap year")
  }
   return console.log("It is not a leap year");
}
result(year);
