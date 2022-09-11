// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //create empty result
  const res = [];
  //will be n subarries in the result array
  for (let i = 0; i < n; i++) {
    res.push([[]]);
  }

  //create counter variable and columns,rows
  let count = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  //while loop iterate
  while (startColumn <= endColumn && startRow <= endRow) {
    //Top row(iterate column)
    for (let i = startColumn; i <= endColumn; i++) {
      res[startRow][i] = count;
      count++;
    }
    startRow++;

    //end column(iterate row)
    for (let i = startRow; i <= endRow; i++) {
      res[i][endColumn] = count;
      count++;
    }
    endColumn--;

    //bottom row(iterate column backward)
    for (let i = endColumn; i >= startColumn; i--) {
      res[endRow][i] = count;
      count++;
    }
    endRow--;

    //start column(iterate row backward)
    for (let i = endRow; i >= startRow; i--) {
      res[i][startColumn] = count;
      count++;
    }
    startColumn++;
  }
  //return function
  return res;
}

module.exports = matrix;
