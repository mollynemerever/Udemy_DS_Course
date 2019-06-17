// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //multiple of 3 AND 5
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      //multiple of 3 NOT 5
      console.log("fizz");
    } else if (i % 5 === 0) {
      //multiple of 5 NOT 3
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

//linear run time O(n) bc takes more time as input gets larger

module.exports = fizzBuzz;
