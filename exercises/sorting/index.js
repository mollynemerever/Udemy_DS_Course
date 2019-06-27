// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let placeholder = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = placeholder;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let lowest = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lowest;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }
    if (right[0] < left[0]) {
      results.push(right.shift());
    }
  }
  if (left.length) {
    results = [...results, ...left];
  }
  if (right.length) {
    results = [...results, ...right];
  }

  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
