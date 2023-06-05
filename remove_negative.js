 
 function negative(arr){
   let arr=[3, 7, -23, 0, 2.5, -4]
   for(var i=0; i<arr.length; i++){
       if(arr[i]<0){
           arr.splice(i,1)

       }
    
   }
   console.log(arr)
    
 
}
negative(arr);

// another way to remove negatuve



 function removeNegatives(arr) {
    let newarr=[]
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
             arr.slice(i,1);
        }else{
            newarr.push(arr[i])
        }    
    }        
        
    
    return newarr
}
console.log(removeNegatives([-20,12,-3,-4,5,7,9,10]))
 