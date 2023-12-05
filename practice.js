// example = [
//   { apple: 7, mango: 13, guava: 3 },
//   { orange: 6, mango: 8, banana: 4 },
//   { guava: 4, banana: 9, apple: 7 },
// ];

// let countFruit = {}
// function unique(arr){
//     arr.forEach(element => {
//         // console.log(element)
//         for(key in element){
//             // console.log(key, element[key])

//             if(countFruit[key]){
//                 countFruit[key]= countFruit[key]+ element[key]
//             }else{
//                 // console.log(countFruit[key])
//                 countFruit[key] = element[key]
//             }
//         }
//     });
// }

// unique(example)
// console.log(countFruit)

// example = [
//   { apple: 7, mango: 13, guava: 3 },
//   { orange: 6, mango: 8, banana: 4 },
//   { guava: 4, banana: 9, apple: 7 },
// ];

// function count(arr) {
//   store = {};
//   arr.forEach((element) => {
//     for (let i in element) {
//         // console.log(element[i]);
//       if (store[i]) {
//         store[i] = store[i] + element[i];
//       } else {
//         store[i] = element[i];
//       }
//     }
// }
// );
// // console.log(store)
// return store;

// }

// console.log(count(example));


let arr = [3,1,2,10,1]
output = [3,4,6,16,17]


function sum(arr){
let result = []
let temp = 0
for(let i = 0; i<arr.length; i++){
  if(result.length ===0){
    temp = arr[i]
    result.push(temp);
  }else{
    temp = temp+arr[i]
    result.push(temp)
  }
};
return result;
// return arr.reduce((total, current) => total + current, 0);
}

console.log(sum(arr))