// const arr = []
// let sortedArray = arr.sort(function(a,b){return a-b})

// function secondSmall(arr){
//     return sortedArray[1]
// }
// function secondLargest(arr){
//     return sortedArray[arr.length-2]
// }
// console.log("second smallest is "+ secondSmall(arr)+ " second largest is " + secondLargest(arr));

//BETTER APPROACH

function getElement(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + "" + -1); //It means does not exists
    return;
  }

  let small = Infinity;
  let secondSmall = Infinity;
  let large = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > small && secondSmall > arr[i]) {
      secondSmall = arr[i];
    }
    if(arr[i] < large && secondLarge < arr[i]){
        secondLarge = arr[i]
    }
  }
    console.log(secondSmall)
    console.log(secondLarge)
}

const arr = [24, 14, 67, 23, 98, 56, 35];
// const arr = [2];
getElement(arr);
