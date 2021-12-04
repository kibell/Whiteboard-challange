//Problem 1: Reverse a string
let output = backwardString("hello");
console.log(output);

//Solution one: Thinking aloud solution, Solves the question but code could be refined

// function backwardString(str){

//     strArr = str.split('')

//     strArr.reverse('')

//     return(
// strArr.join('')

//     )

// }

//Solution 2

// function backwardString(str){

// return str
//     .split('')
//     .reverse()
//     .join('')

// }

//Solution 3: No reverse method

// function solutionRev(str){

let strRev = ''

for ( let i = str.length -1; i >= 0; i--){

    strRev = strRev + str[i]

}
return strRev

}

//Solution 4:new school loop

function backwardString(str) {
  // let oppString = ''
  // for( let char of str) {
  //     oppString = char + oppString
  // }
  // return oppString
  /////////////////solution 5: For each
  //   let revString = "";
  //   // str.split('').forEach(function(char) {
  //   //     revString = char + revString
  //   // })
  //   // return revString
  //   // }


 // Solution 6: ES6 arrow  function
  //  str.split('').forEach(char => revString = char + revString); return revString
}

function backwardString(str) {
 
    //foreach with arrow
 
   let revString = ''
//    str.split('').forEach(char => revString = char + revString); return revString




    //////// first method array

    // strArr = str.split('')

    // strArr.reverse()

    // return (
    // strArr.join('')
    // )
    
   

    ///////for loop oldschool

    // for ( let i = str.length -1; i >= 0 ; i--){

    //     revString =  revString + str[i]
    // }
    // return(
    //     revString
    // )
    ///////////for of loop

    // for ( let char of str) {
    //     revString = char + str
    // }

    // return (
    //     revString
    // )
    
    
    
    /////////foreach no arrow

    str.split('').forEach(function (char){

        revString = char + str
    })

    return (revString)


}

 

