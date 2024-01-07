let a = 11,
  b = 511,
  c = 333;

function result(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else return c;
  // let d  = Math.max(a,b,c)
  // return d;
}

console.log(result(a, b, c));
