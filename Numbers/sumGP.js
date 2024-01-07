let  a=3 , r=5 , n=2;

function gpResult(a,r,n){
let i =1, sum= 0;
    while(i<=n){
        sum += a
        a = a*r
        i++
    }
    return sum
}

console.log(gpResult(a,r,n))