let num = 34284;

function result(num) {
  let max = -Infinity,
    min = Infinity,
    rem = 0;
  while (num > 0) {
    rem = parseInt(num % 10);
    max = Math.max(max, rem);
    min = Math.min(min, rem);
    num = parseInt(num / 10);
  }
  return [max, min];
}

console.log(result(num));
