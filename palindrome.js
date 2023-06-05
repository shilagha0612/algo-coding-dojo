function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

// another way to solve palindrome

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
    temp="";
    for(i=str.length-1;i>=0;i--){
        temp+=str[i];
    }
    if (str==temp){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}
isPalindrome(str1);
isPalindrome(str2);
isPalindrome(str3);
isPalindrome(str4);
