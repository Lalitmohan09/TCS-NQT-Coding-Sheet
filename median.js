const arr = [4, 7, 1, 2, 5, 6,9,1];

function median(arr) {
 arr.sort((a, b) => a - b);
 
  if (arr.length % 2 === 0) {
    let first = arr[arr.length / 2 - 1];
    let second = arr[arr.length/2];
    return (first+second)/2
  } else {

    return (arr[Math.floor(arr.length / 2)]);
  }
}

console.log(median(arr));
