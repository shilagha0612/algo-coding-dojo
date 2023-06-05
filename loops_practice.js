// 1️⃣ while loops

// var i = 0;

// while (i < 5) {        
//   console.log(i);
//   i++;
// }


// output 0,1,2,3,4,

// 2️⃣ when we want to reverse our loop

// const items = ['apricot', 'banana', 'cherry'];

// for(let i = items.length - 1; i >= 0; i -= 1){
//   console.log(`${i}. ${items[i]}`);
// }

// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot


// when we want to find any specific word or number
var arr =["mago", "cat", "dog","lion"]
for(var i = 0;i<arr.length-1;i++){
    if(arr[2]=="dog"){
        console.log("found dog")
        break;
    }
}


// 4️⃣  do while loops when we want to add everytime increase amount like first add 1 than add 2 than add 3 
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);

// Prints: 0 1 3 6 10


//5️⃣ Looping Through Arrays
// An array’s length can be evaluated with the .length property. 
// This is extremely helpful for looping through arrays, as the .
// length of the array can be used as the stopping condition in the loop.

// let arr=[1,2,4,5]
// for (let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

// Output: , 1, 2, 4,5



//  6️⃣Break Keyword
// Within a loop, the break keyword may be used to exit the loop immediately, 
// continuing execution after the loop body.

// Here, the break keyword is used to exit the loop when i is greater than 5.


// for (let i = 0; i < 99; i += 1) {
//   if (i > 5) {
//      break;
//   }
//   console.log(i)
// }

// Output: 0 1 2 3 4 5

