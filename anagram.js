let firstLette = "title";
let secondLetter = "litte";
function anagram(first, second){
    let a = first.toLowerCase();
    let b = second.toLowerCase;
    a = a.split("").sort().join("")
    b = b.split("").sort().join("")
    return a===b
}


console.log(anagram(firstLetter,secondLetter))

