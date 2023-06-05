const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str1) { 
    let temp=""
    let sum=1
    for(var i=0;i<str1.length-1;i++){
        if(str1[i]==" "){
            sum=1
            
        }else if(str1[i]!=" " && sum==1){
            temp+=(str1[i])
            sum=0
        }
        

        
    }
    return temp.toUpperCase()
}
console.log(acronymize(str1))
console.log(acronymize(str2))
console.log(acronymize(str3))
console.log(acronymize(str4))


//======================
/* 
    Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1_1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2_1 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3_1 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4_1 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5_1 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) { }