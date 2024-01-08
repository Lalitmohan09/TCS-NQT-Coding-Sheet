let num = 2345;

function reverse(num) {
  let res = 0,
    rem = 0;
  while (num > 0) {
    rem = parseInt(num % 10);
    res = res * 10 + rem;
    num = parseInt(num / 10);
    // console.log(res, rem, num);
  }
  return res;
}

console.log(reverse(num));
