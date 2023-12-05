// let arr = [1,1,2,2,2,3,3]

// function unique(arr){
//     let unique = new Set(arr)
//     let uniqueArray = Array.from(unique)
//     for(let i = 0; i<uniqueArray.length; i++){
//         arr.shift()
//     }
//     return uniqueArray.concat(...arr)
// }
// console.log(unique(arr))

// Optimal approach

let arr = [1,1,2,2,2,3,3]

function removeDuplicates(arr){
    let i = 0
    for(let j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
    return i+1

}
let duplicates = removeDuplicates(arr)

console.log("total unique elemets "+duplicates+ " and these are: ")
for(let i = 0; i<duplicates; i++){
    console.log(arr[i])
}
