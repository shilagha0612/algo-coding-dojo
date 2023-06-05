function removeNegatives(arr){
    //     for(var i=0; i<=arr.length; i++){
    //         if(arr[i]<=0){
    //             arr[j] = arr.pop();
    //             i--;
    //         }
    //     }
    //     return array;
    // }
    
     function negative(){
       let arr=[3, 7, -23, 0, 2.5, -4]
       for(var i=0; i<arr.length; i++){
           if(arr[i]<0){
               arr.splice(i,0)
    
           }
        
       }
       console.log(arr)
        
     
    }
    negative();
    