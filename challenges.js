function avgMaxMin(arr){
    let sum=0
    let max=[0]
    let min=[0]
    let avg=[0]
    for(var i=1; i<arr.length; i++){
        if(arr[i]<max){
            arr[i]=max
        }
        if(arr[i]>min){
            arr[i]=min
        }
        sum=sum+arr[i]
    }
    avg=sum/arr.length
    console.log(sum)
    console.log(min)
    console.log(max)
    console.log(avg)
}
avgMaxMin()