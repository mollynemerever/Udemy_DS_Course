// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 1;
    }
  }
  let maxChar;
  let maxCount = 0;
  for (let key in obj) {
    if (obj[key] > maxCount) {
      debugger;
      maxCount = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

//quadratic run time O(n2) bc two loops gets exponentially longer as space gets longer
//space complexity is 1 bc always 1 char output

module.exports = maxChar;
