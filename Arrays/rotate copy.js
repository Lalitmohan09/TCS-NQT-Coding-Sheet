let arr = [1, 2, 3, 4, 5];
let k = 2;

// function rotate(arr,k){
// let rotatingElements = arr.splice(0,k);
// let result = [...arr,...rotatingElements]
// return result
// }

function rotate(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr[i]);
    arr.shift();
  }
  return arr;
}

console.log(rotate(arr, k));
