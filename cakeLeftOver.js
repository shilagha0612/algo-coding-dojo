function howMuchLeftOverCake( numberOfPieces,numberOfPeople){
    var numberOfPieces=12;
    var numberOfPeople=5
    var leftOverCake = numberOfPieces%numberOfPeople;
    console.log(leftOverCake)
    if(leftOverCake==0){
        console.log("No leftover for you")
    }
    else if(leftOverCake<=2){
        console.log("you have some leftover")
    }
    else if(leftOverCake>=3 && leftOverCake<=5){
        console.log("you have leftover to share")
    }
    else{
        console.log("hold another party")
    }
}
howMuchLeftOverCake();    
// function cake(numberOfPiece,numberOfPeople){
//     var numberOfPiece=12
//     var numberOfPeople=5
//     var left=numberOfPiece%numberOfPeople
//     console.log(left)
//     if(left==0){
//         console.log("no Left over")
//     }
//     else if(left<=2){
//         console.log("you have some leftover")
//     }
//     else if(left>=3 && left<=5){
//         console.log("you have leftover to share")
//     }else{
//         console.log("hold another party")
//     }
// }
// console.log(cake())