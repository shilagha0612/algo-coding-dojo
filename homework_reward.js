function MVP(homework,hour,day){
    var reward=""
var homework=true
if(homework==true && hour<10 ){
    reward=" latte"
    console.log(reward)
    }
    else if(homework==true && hour<10 && hour<=16){
        reward="hot choclate"
        console.log(reward)
    }
        
        else if(homework==true && hour<16 && hour<=22 && day=="wednesday" ){
            reward="vanilla icecream"
            console.log(reward)
            if(day!="wednsday"){
                reward="shrawberry ice cream"
            console.log(reward)
                
            }
            
        else if(homework==true && hour>22){
            console.log("i want to sleep")
        }
}
    
}
MVP(true,15,"wednesday")
