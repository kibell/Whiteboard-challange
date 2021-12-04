//Problem 3: Validate a palindrome
let output = backwardString("carrac");
console.log(output);

function backwardString (str){


   revString = str.split('').reverse().join('')

    return revString ===  str


}
