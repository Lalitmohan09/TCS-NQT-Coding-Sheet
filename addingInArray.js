// let n = "5";
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// console.log("before Inserting "+arr)
// function insertBeginning(a){
//     arr.unshift(a)
// }
// function insertEnding(b){
//     arr.push(b)
// }
// function insertAtPos(a,b){
//     arr.splice(b-1,0,a)
// }
// function adding(arr){
//     insertBeginning(6);
//     insertEnding(7)
//     insertAtPos(8,4)
// }
// adding(arr)
// console.log("after inserting "+arr);

let arr = [2, 3, 1, 4, 5, 7, 6];
let firstValue = 9;
let endValue = 11;
let pos = 4;
let value = 13;

console.log("Original array \n", arr)

//Adding at first
function insertBeginning(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = value;
  return arr;
}
console.log("After inserting at Beginning \n",insertBeginning(arr, firstValue));

//Adding at end
function insertEnding(arr, value) {
 arr[arr.length]= value
 return arr
}

console.log("After Inserting at End \n", insertEnding(arr, endValue));

function insertAtPos(value, pos ){
    for(let i = arr.length; i >=pos; i--){
        arr[i]= arr[i-1]
    }
    arr[pos-1]=value
    return arr;
    
}
console.log("After Inserting at specific positions \n",insertAtPos(value, pos)) 