/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference  between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    
        var n = sqrMatrix.length; 
        var d1 = 0;
        var d2 = 0;
      for(var i=0; i<n; i++){
         for(var j=0; j<n; j++){
           // finding the sum of primary diagonal
             if(i === j) {
               d1 += sqrMatrix[i][j];
             }
           // finding the sum of secondary diagonal
             if(i + j === n - 1){
                d2 += sqrMatrix[i][j];
             }
          }
      }
      return Math.abs(d1 - d2);

    

}
Math.abs()
console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))

// Reminder for getting an absolute value, we could use the Math library in JS after we get the difference of the sums!)
// Note: Since we are only getting one particular value in each row, we may be able to avoid nested for loops. 