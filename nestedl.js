

// Use https://pythontutor.com/javascript.html#mode=edit if you would like to visualize the nested for loops!

// function isPresent2d(arr2d, value) {

//     for(var i=0; i<arr2d.length; i++){
//         for(var x=0; x<arr2d.length; x++){
//             if(arr2d[i][x]==value){
//                 console.log(arr2d[i][x])
//             }
//         }
//     }
// }
// isPresent2d(arr2d, 2);
// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(var i=0; i<arr2d.length; i++){
        for(var x=0; x<arr2d.length; x++){
            flat.push(arr2d[i][x])
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]