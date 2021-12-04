//Problem 3: Reverse a INt

let output = backwardInt(123456);
console.log(output);

function backwardInt(int){
    intArr = int.toString().split('').reverse().join('')

    return parseInt(intArr)


}