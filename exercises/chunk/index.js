// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];

  for (let i = 0; i < array.length; i++) {
    if (
      !chunked[chunked.length - 1] ||
      chunked[chunked.length - 1].length === size
    ) {
      let subArray = [array[i]];
      chunked.push(subArray);
    } else {
      chunked[chunked.length - 1].push(array[i]);
    }
  }
  return chunked;
}

module.exports = chunk;
