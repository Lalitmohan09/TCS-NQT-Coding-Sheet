let num = 2;
function prime(num) {
  if (num < 2) {
    return console.log("It is not a prime number");
  } else if (num === 2) {
    return console.log("It is a prime number");
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return console.log("it is not a prime number");
    }
  }
  return console.log("it is a prime number");
}
prime(num);
