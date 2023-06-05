// Given an array of integers
//     return the index where the smallest integer is located

//     return -1 if there is no smallest integer (array is empty) 
//     since -1 is not a valid index, this indicates it couldn't be found

//     If the smallest integer occurs more than once, return the index of the first one.
// */

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;

const nums3 = [];
const expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(arr) {
    let minIdx=0
    let min = arr[0]
    if (arr.length === 0) {
        return -1
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <min ) {
                min = arr[i]
                minIdx=i



            }
        }
        return minIdx
    }
}   
console.log(indexOfMinVal(nums1))  
console.log(indexOfMinVal(nums2))
console.log(indexOfMinVal(nums3))
            
        

        

    






/*******************************************************************************/

/*
    Given an array, reverse it's items in place
    return the array after reversing it

    Do it in place without using any built in methods
*/

// const arr1 = [1, 2, 3];
// const expected5 = [3, 2, 1];

// const arr2 = ["a", "b"];
// const expected6 = ["b", "a"];

// const arr3 = ["a"];
// const expected7 = ["a"];

// const arr4 = [];
// const expected4 = [];

// /**
//  * Reverses the given arr in place without built in methods
//  * BONUS: Do this in place without built ins
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<any>} items
//  * @returns {Array<any>} The given arr after being reversed.
//  */
function reverseArr(items) {
    var temp;
    var length=items.length
    for(var i=0;i<length/2;i++){
        temp=items[i]
        items[i]=items[length-1-i]
        items[length-1-i]=temp
    }
    return items
}