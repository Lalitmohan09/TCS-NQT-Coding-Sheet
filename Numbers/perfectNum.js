let num = 6;
function perfect(num) {
  let temp = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  if (temp === num) {
    console.log(num + " is a perfect number");
  } else console.log(num + " is not a perfect number");
}
perfect(num);
