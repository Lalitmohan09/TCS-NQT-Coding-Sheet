let n = 4,
  a = 0,
  d = 5;

function result(n, a, d) {
  let sum = a,
    i = 0;

  while (i < n) {
    sum += d;
    // a = d;
    console.log(a, sum);
    i++;
  }
  return sum;
}
console.log(result(n, a, d));
