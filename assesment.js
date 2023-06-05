function countLessThanX(){
	var array = [-13, -15, -8, -29, -3, 4, 9, 10, -3, 7];
	var x = 14;
	var count = 0;
	for(var i=0;i<array.length;i++){
	    if(array[i]<14){
	        count++
	    }
	    
	
 }
 return count; 
}
console.log(countLessThanX())




// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(arr){
    let min=arr[0];
    let max=0;
    let avg=0;
    let sum=0;
    arrNew=0;
    
    for(var i=0;i<arr.length;i++){
       
        sum=sum+arr[i]
        avg=sum/arr.length
        if(arr[i]>max){
            max=arr[i]
           
        }
        if(arr[i]<min){
            min=arr[i]
        }
   
        arrNew=[max,min,avg]
    
    }
    return arrNew
}
console.log(minMaxAvg([20,30,40,55,2]))


// Create a function that will return the index where the value of x first occurs in the array or return -1 if it's not present.

function findIndexOfX(){
	var array = [3,9,-3, -9, 11, -6, 5, 10, -9, 1];
	var x = 9;
    for(var i=0;i<array.length;i++){
        if(array[i]==x){
            return i
        }else{
           return-1
        }
    }
	 
}
console.log(findIndexOfX())