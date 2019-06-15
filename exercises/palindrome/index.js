// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//not the best bc checks every letter twice

function palindrome(str) {
  let result;
  let array = str.split("");
  array.forEach((letter, i) => {
    if (letter !== array[array.length - i - 1]) {
      result = false;
    } else {
      result = true;
    }
  });
  return result;
}

//best solution below because not checking every letter twice
// function palindrome(str) {
//   let reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   return reversed === str;
// }

//not the best bc checks every letter twice
// function palindrome(str) {
//   let reversed = str.split("").reverse(); //gives string reversed in array
//   for (let i = 0; i < reversed.length; i++) {
//     //goes through reversed array
//     if (reversed[i] !== str.charAt(i)) {
//       return false;
//     }
//   }
//   return true;
// }

module.exports = palindrome;
