// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //implement bublesort
  //make sure to travese the whole arr
  for (let i = 0; i < arr.length; i++) {
    //make sure to compare and swap
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  //return the sorted arr
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  //add all reminds into this new arr
  return [...res, ...left, ...right];
}

function mergeSort(arr) {
  //if there's only one element:
  if (arr.length === 1) {
    return arr;
  }
  //divides the arr to two halves
  const center = Math.floor(arr.length / 2);
  //slice is from to(but not includes)
  const left = arr.slice(0, center);
  //slice from to the end
  const right = arr.slice(center);
  /* //keep split by calling function till it became one element subarray
  mergeSort(left);
  mergeSort(right); */
  //then merge them to the new array
  return merge(mergeSort(left),mergeSort(right))
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
