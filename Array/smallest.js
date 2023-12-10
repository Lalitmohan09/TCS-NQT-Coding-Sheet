const arr = [52, 64, 13, 11, 53];

function largest(arr) {
    // let sortedArray = arr.sort(function(a,b){return a-b})
    // return sortedArray[0]
  let max = arr[0];
  for (let i = 0; i<arr.length; i++) {
    if (max > arr[i]) {
      max = arr[i];
    
    }
  }
  return max;
}
console.log(largest(arr));
