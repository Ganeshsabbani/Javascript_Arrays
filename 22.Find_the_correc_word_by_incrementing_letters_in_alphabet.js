// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    let word = '';
        for(let i =0; i < str.length ; i++) {
            word += nextChar(str[i]);
            
        }
     return word;
 }

//Authors Solution
//  function myFunction(str) {
//     const arr = [...str];
//     const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//     return correctedArray.join('');
//   }