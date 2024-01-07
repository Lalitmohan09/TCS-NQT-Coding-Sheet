let num = 0;
function oddEven(num) {
  if (num === 0) {
    console.log("0 is neither odd nor even");
  }
  else if (num % 2 === 0) {
    console.log("It is an even number");
  }else console.log("It is an odd number")
}
oddEven(num)