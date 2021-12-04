//Capitalize all first letters in each word

// let output = CapLetters('i love javascript');
// console.log(output);


// function CapLetters(str){
// const strArr = str.toLowerCase().split(' ')

// for ( let i = 0; i < strArr.length; i++){
//     strArr [i] = strArr[i].substring(0, 1).toUpperCase()
//     + strArr[i].substring(1)
// }
// return strArr.join(' ')


////////////

// return str.split(" ").map( word => word[0].toUpperCase() + word.substring(1)).join(" ")



// return str.split(' ').map( char => char[0].toUpperCase() + char.substr(1)).join(' ')
// }
// }



//Return the longest word of a string

const Output =  longWord('hello, there my name is kitrick')
console.log(Output)

function longWord(sen){
//match is a method used to grab regular expressions

const strArr = sen.toLowerCase().match(/[a-z0-9]+/g);

//Create filtered array
const sorted = strArr.sort(function(a,b){

    return b.length - a.length

})

return sorted

}

