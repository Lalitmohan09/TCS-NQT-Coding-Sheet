let num1 = 2,
  num2 = 15,
  arr;
function prime(num1, num2) {
  arr = [];
  for (let i = num1; i <= num2; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        break;
      } else if (arr.includes(i)) {
        break;
      } else {
        arr.push(i);
      }
    }
  }
}
prime(num1, num2);
console.log(arr);
