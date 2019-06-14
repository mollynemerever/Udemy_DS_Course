// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let array = str.split("");
//   let outputArray = [];
//   for (let i = 0; i < array.length; i++) {
//     outputArray.unshift(array[i]);
//     //unshift adds elemen tto beginning of the array
//   }
//   return outputArray.join("");
// }

//On linear runtime bc number of steps depends directly on the input

function reverse(str) {
  let array = str.split("");
  return array.reverse().join("");
}

module.exports = reverse;
