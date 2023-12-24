let num = 123321;
let rem;
let sum = 0;

function result(num, rem, rev) {
    let temp =num;
  while (num > 0) {
    // extracting last digit
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
 if(temp == rev){
    return `${temp} is a palindrome number and reversed number is ${rev}`
 }else{
    return `${temp} is not a palindrome number and reversed number is ${rev}`
 }
}
console.log(result(num, rem, sum));
