let arr = [
  2, 3, 1, 9, 3, 1, 3, 4, 9, 5, 2, 8, 8, 2, 9, 1, 8, 4, 2, 0, 2, 0, 2, 4, 0,
];

function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (newArr[i] === arr[j]) {
        continue;
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

console.log(unique(arr));
