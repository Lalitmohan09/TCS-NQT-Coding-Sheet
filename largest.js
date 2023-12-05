const arr = [52, 64, 13, 11, 53];

function largest(arr) {
  let max = arr[0];
  for (let i = 0; i<arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    
    }
  }
  return max;
  // let sortedArray = arr.sort(function(a,b){return a-b})
  // return sortedArray[arr.length-1]
}
console.log(largest(arr));
