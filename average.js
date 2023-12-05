let arr = [1,2,3,4,5,6]

function average(arr){
    let sum = 0
    arr.forEach(element => {
         sum += element;
    });
    let average = Math.round(sum/arr.length)
    return average

}
 console.log(average(arr));