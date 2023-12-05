const arr = [23, 42, 56, 63, 20, 82];

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i])
    // newArray.push(arr.pop());
  }
  return newArray;
}
console.log(reverseArray(arr));
