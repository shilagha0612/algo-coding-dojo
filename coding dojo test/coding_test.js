//1️⃣ Prediction Question 1 - Operators

var answer = 3 + 4 * 2;
console.log(answer); //output 11



// Prediction Question 2 - Operators
var answer = (3 + 4) * 2;
console.log(answer); //output 14


// Prediction Question 3 - Loops

for(var i=0; i<13; i++) {
    console.log(i);
    i += 2;   //output 0,3,6,9,12
}




// Prediction Question 4 - Loops

for(var i=19; i>13; i--) {
    console.log(i);
    i -= 1;           //output 19,17,15
}





// Prediction Question 5 - Conditionals

var i = 8;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);  //output "even"
}





// Prediction Question 6 - Loops and Conditionals

for(var i=3; i<8; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log(i);
    }
}       //output 3 "even" 5 "even"  7 







// Coding Challenge 1 - Loops and Arrays

// we have to count how many numbers are greater than 3 we have 4,7,6 which is greater than 3

var arr = [1, 4, 7, 6, 2, 1];
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] > 3) {
        count++;
    }    
}
console.log(count); //output is 3





// Coding Challenge 1 - Loops

function print68to9() {
    for(var i=68;i>8;i--){
        console.log(i)
   
    }

    // your code here
}
print68to9();






//Coding Challenge 2 - Loops and Arrays
function findLargest(arr) {
  let max=arr[0]
  for(var i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
  }
  return max
}
console.log(findLargest([12, 21, 3.6, 9, 12, 8]))

  






// Coding Challenge 3 - Loops and Arrays

function countGreaterThanY(arr, y) {
    var count = 0;
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++
        }
    }
    
    // your code here
    return count;
  }
  console.log(countGreaterThanY([12, 21, 3.6, 9, 12, 8], 8))
