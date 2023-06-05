// 1 Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature.
//  Write a function that will return an array of Fibonacci numbers up to a given length n
//  . Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//  So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
   
    return nextTerm
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));


// console.log('Fibonacci Series:');

