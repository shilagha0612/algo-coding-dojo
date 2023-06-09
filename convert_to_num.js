// # * 
// #     String Encode
// #     You are given a string that may contain sequences of consecutive characters.
// #     Create a function to shorten a string by including the character,
// #     then the number of times it appears. 

// #     If final result is not shorter (such as "bb" => "b2" ),
// #     return the original string.
// #   */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc"; // b2c2
const expected4 = "bbcc";

// # /**
// #  * Encodes the given string such that duplicate characters appear once followed
// #  * by a number representing how many times the char occurs. Only encode strings
// #  * when the result yields a shorter length.
// #  * - Time: O(?).
// #  * - Space: O(?).
// // #  * @param {string} str The string to encode.
// // #  * @returns {string} The given string encoded.
// #  */
function encodeStr(str) {
    let encode=" "
    let curStr=str[0]

    let count=1
    for(var i=0;i<str.length;i++){
        // console.log(str[i])
        if(str[i]==curStr){
            console.log(i)


            count++
        }else{
            
            encode+=curStr+count;
            curStr=str[i]
            count=1
        }
        
    }
    encode+=curStr+count
    if (encode.length<str.length){
        return encode
    }
    else{
        return str
    }
 }
 console.log(encodeStr(str1))


/*****************************************************************************/
