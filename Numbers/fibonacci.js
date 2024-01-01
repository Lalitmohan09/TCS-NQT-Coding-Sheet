let num = 10;
let n1 = 0,
  n2 = 1,
  n3;

function print(num) {
  let arr = [];
  arr.push(n1);
  arr.push(n2);
  for (let i = 2; i < num; i++) {
    n3 = n2 + n1;
    n1 = n2;
    n2 = n3;
    arr.push(n3);
  }
  return arr;
}
console.log(print(num))

