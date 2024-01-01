let min = 10;
let max = 100;

function print(num) {
  let temp = num;
  let sum = 0,
    rem;
  while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  if (temp == sum) {
    console.log(temp);
  }
}
for (let i = min; i <= max; i++) {
  print(i);
}
