function anagram(first, second){
    let a = first;
    let b = second;
    a = first.split("").sort().join("")
    b = second.split("").sort().join("")
    return a===b
}


console.log(anagram("title", "litte"))

