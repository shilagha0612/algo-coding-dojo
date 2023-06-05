// * 
//   String: Is Palindrome
//   Create a function that returns a boolean whether the string is a strict palindrome. 
//     - palindrome = string that is same forwards and backwards
  
//   Do not ignore spaces, punctuation and capitalization
//  */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

// /**
//  * Determines if the given str is a palindrome (same forwards and backwards).
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {boolean} Whether the given str is a palindrome or not.
//  */
function isPalindrome(str) {
    for(var left=0;left<str.length/2;left++){
        var right=str.length-1-left
        if(str[left]!=str[right]){
            return false

        }
       
    
    

    }
    return true
}
console.log(isPalindrome(str1))


/*****************************************************************************/

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/


const str1_1 = "what up, daddy-o?";
const expected1_1 = "dad";

const str2_1 = "uh, not much";
const expected2_1 = "u";

const str3_1 = "Yikes! my favorite racecar erupted!";
const expected3_1 = "e racecar e";

const str4_1 = "a1001x20002y5677765z";
const expected4_1 = "5677765";

const str5_1 = "a1001x20002y567765z";
const expected5_1 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    let longestPalindrome = "";
  
    for (let i = 0; i < str.length; i++) {
        
      for (let j = i; j < str.length; j++) {
        let isPalindrome = true;
        for (let k = 0; k < Math.floor((j - i + 1) / 2); k++) {
            
          if (str[i + k] !== str[j - k]) {
            
            isPalindrome = false;
            break;
          }
        }
        if (isPalindrome && j - i + 1 > longestPalindrome.length) {
          longestPalindrome = str.slice(i, j + 1);
        }
      }
    }
  
    return longestPalindrome;
  }
console.log(longestPalindromicSubstring(str2_1))  