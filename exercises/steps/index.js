// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let logs = 0; //keeps track of console.log
  while (logs < n) {
    let array = new Array(n);
    for (let i = 0; i < n; i++) {
      if (i > logs) {
        array[i] = " ";
      } else {
        array[i] = "#";
      }
    }
    console.log(array.join(""));
    logs++;
  }
}

module.exports = steps;
