let num = 120;

function factor(num) {
  let temp = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      temp.push(i);
    }
  }
  return temp;
}
console.log(factor(num));
