// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    let resultStr = '';
       let index = 0;
       for(let i = (a.length - 1); i > -1 ; i--) {
           index++;
           resultStr = a[i] + resultStr;
           if(index % 3 === 0) {
               resultStr = b + resultStr;
           }
       }
       return resultStr;
}

//Authors Solution
// function myFunction(a, b) {
//     let result = [];
//     let rest = a;
//     while (rest.length) {
//         result.push(rest.slice(-3));
//         rest = rest.slice(0, -3);
//     }
//     return result.reverse().join(b);
//  }