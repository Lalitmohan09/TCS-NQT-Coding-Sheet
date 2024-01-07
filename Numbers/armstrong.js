let num = 153;

function arm(num) {
  let temp = num;
  let rem,
    res = 0;
  while (num > 0) {
    rem = parseInt(num % 10);
    res += rem * rem * rem;
    num = parseInt(num / 10);
  }
  if (temp === res) {
    console.log("It is an armstrong number");
  } else console.log("It is not an armstrong number");
}

arm(num);
