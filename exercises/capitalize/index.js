// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let array = str.split("");
  let output = array[0].toUpperCase();
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] === " ") {
      output += array[i].toUpperCase();
    } else {
      output += array[i];
    }
  }
  return output;
}

module.exports = capitalize;
