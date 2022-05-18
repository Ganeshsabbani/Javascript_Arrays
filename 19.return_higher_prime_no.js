// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {
    let counter = 0;
        do {
          counter = 0;
          for (let i = 2; i <= a; i++) {
            if (a % i === 0) counter++;
          }
          a++;
        } while (counter > 1);
        return a - 1;
}


// Author's Solution
// function myFunction( a ) {
//     function isPrime(num) {
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//       }
//       return num > 1;
//     }
//    let n = a;
//    while (!isPrime(n)) n++;
//   return n
//   }