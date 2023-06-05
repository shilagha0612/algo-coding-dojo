// 1 Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    revArr=[]
    var temp
    for(var i=arr.length-1;i>=0;i--){
        temp=arr[i]
        revArr.push(temp)

    }

    return revArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
