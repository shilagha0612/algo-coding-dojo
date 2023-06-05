var arr=[1,2,3,4,5]
revArr=[]
 var temp=0
for(var i=arr.length-1;i>=0;i--){
    temp=arr[i]
    revArr.push(temp)
}
console.log(revArr)