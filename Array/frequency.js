// const arr = [12, 52, 13, 12, 52, 31, 31, 13, 12, 10];
// // 12 is 3 times
// // 52 is 2 times
// // 13 is 2 times
// // 31 is 2 times
// // 10 is 1 times

// function countFreq(arr) {
//   let count = 1;
//   let temp = [];
//   let setObj = new Set(arr)
//   console.log(setObj)
//   for (let i = 0; i < arr.length; i++) {
//     if (temp[i]) {
//       continue;
//     }
//     count = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         temp.push(arr[i]);
//         count++;
//       }
//     }
//     // console.log(temp)
//     if (setObj.has(arr[i])){
//       console.log(arr[i] + " " + count);
//     }
//   }
// }
// console.log(countFreq(arr));

// USING OBJECTS
let count = {};
let arr = [1, 2, 3, 1, 4, 2, 3, 5, 1, 8];

function countFreq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] = count[arr[i]] + 1;
    } else {
      count[arr[i]] = 1;
    }
  }
  return count;
}

console.log(countFreq(arr));
