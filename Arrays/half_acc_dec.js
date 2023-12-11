const rawArr = [8,2,5,1,7,3,6,4,0]
let arr = rawArr.sort((a,b)=>a-b)
console.log(rawArr);
function getElement(arr){
    let firstHalf =[]
    arr.forEach((element, index) => {
        if(index < (arr.length/2)-1){
            firstHalf.push(element)
        }
    });
    console.log("First half " +firstHalf)
    let secondHalf = []
    arr.forEach((element, index) => {
        if(index > (arr.length/2)-1){
            secondHalf.push(element)
        }
    });
    console.log("Second half " + secondHalf)
    firstHalf = firstHalf.sort((a,b)=>a-b)
    secondHalf = secondHalf.sort((a,b)=>b-a)
    let finalArray = [...firstHalf, ...secondHalf]
    // let finalArray = firstHalf.concat(secondHalf)
    return finalArray
}
console.log(getElement(arr))