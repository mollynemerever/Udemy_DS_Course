// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) { //solution using iteration
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str.charAt(i).toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  //solution using regex
  if (str.length === 0) {
    return 0;
  }
  let vowels = str.match(/[aeiou]/gi);
  if (vowels === null) {
    return 0;
  }
  let num = vowels.length;
  return num;
}

module.exports = vowels;
