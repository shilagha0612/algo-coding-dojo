let marks={
    harry:90,
    shubha:65,
    loshika:56,
    priya :5,
}
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of"+ Object.keys(marks)[i]+ "are" +marks[Object.keys(marks)[i]])
// }
// for(let key in marks){
//     console.log ("the marks of" + key + "is" + marks[key])
// }

// // problem no# 3 ask from user enter correct number 
// let cn =43
// let i
// while(i!=43){
//     i=prompt("enter a number")
//     console.log("try again")
// }
// console.log("you enter a correct number")

// problem no# 4 ask from user enter correct number 
// const mean=(a,b,c,d)=>{
//     return(a+b+c+d)/4
// }
// console.log(mean(4,5,6,7))

// odd number or even number

// let num = prompt("enter any number")
//     if(num%2==0){
//         console.log(`${num} is a Even number`)
//     }else{
//         console.log(`${num} is a odd number`)
//     }

// let num = prompt("enter any thing")
// if(isNaN(num)){
//     console.log(`${num} is not a number`)
// }
// else{
//   console.log(`${num} is a valid number`)
// }


// find largest number

// let num1 = prompt("enter any number")
// let num2 = prompt("enter any number")
// if(num1>num2){
//     console.log(`${num1}is the largest number`)
// }
// else if(num2>num1){
//     console.log(`${num2} is the largest number`)
// }else{
//     console.log(`${num1}` && `${num2} both are equal`)
// }


// find largest number between 3 

// let num1 = prompt("enter any number")
// let num2 = prompt("enter any number")
// let num3 = prompt("enter any number")
// if(num1>num2 && num1>num3){
//     console.log(`${num1} is the largest number`)
// }
// else if(num2>num3){
//     (`${num2} is the largest number`)
// }else{
//     console.log((`${num3}is the largest number`))
// }

// function findTriangleType(side1, side2, side3) {

//     if((side1 == side2) && (side1 == side3)){
//       console.log(`Equilateral triangle.`)
//     }
//     else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
//       console.log(`Isosceles triangle.`)
//     }
//     else{
//       console.log(`Scalene triangle.`)
//     }
//   }
  
//   findTriangleType(12,32,22) //"Equilateral triangle."
//   findTriangleType(20,20,31) //"Isosceles triangle."
//   findTriangleType(5,4,3) //"Scalene triangle."

// function triangle(side1,side2,side3){
//     if((side1==side2)&&(side2==side3)){
//         console.log('equilateral triangle')
//     }
//     else if((side1==side2) || (side2==side3) || (side3==side1)){
//         console.log("isosceles triangle")
//     }else(console.log("scalene triangle"))
   
// }
// triangle(12,12,12)

// range in between given number
// function rangeNumber(num,start,end){
//     if(num>=start&&num<=end){
//         console.log(`${num} is between ${start} and ${end}`)
//     }
//     else{
//         console.log(`${num} is not between ${start} and ${end}`)
//     }
// }
// rangeNumber(30,11,25)

// Perform arithmetic operations on two numbers
// function operations(num1,num2,op){
//     if(op=="add"){
//         console.log(`sum of ${num1} and ${num2} is ${num1 +num2}`)
//     }
//     else if(op=="subtract"){
//         console.log(`difference of ${num1} and ${num2} is ${num1- num2}`)
//     }
//     else if(op=="multiply"){
//         console.log(`multiply of ${num1} and ${num2} is ${num1 * num2}`)

//     }
//     else if(op=="divide"){
//         console.log(`division of ${num1} and ${num2} is ${num1 /num2}`)
//     }
//     else if(op=="modules"){
//         console.log(`modules of ${num1} and ${num2} is ${num1 % num2}`)
//     }
//     else{
//         console.log("invalid operation")
//     }

// }
// operations(20,10,"add");
// operations(20,10,"subtract")
// operations(20,10,"multiply")
// operations(20,10,"divide")
// operations(20,10,"modules")
// operations(20,10,"square") invalid operation


// leap year check

// // function leapYear(year){
// //     if(year%4==0 && year%100!=0 || year%400==0){
// //         console.log(`${year} is a leap year`)

// //     }
// //     else{
// //         console.log("not a leap year")
// //     }
// }
// leapYear(2016);


// grades according to marks

// function gradeMarks(name,marks){

//     if(marks >=90 && marks <=100){
//         console.log("you are brilliant")
//     }
//     else if(marks >= 80 && marks < 90){
//         console.log("your are a good student")
//     }
//     else if(marks >=70 && marks < 80){
//         console.log("you are a average student")
//     }
//     else if(marks >= 50 && marks < 60){
//         console.log("you are a medium student you have to work hard")
//     }
//     else{
//         console.log("your are fail")
//     }
// }
// gradeMarks("sahil",88);

// find number in the month

function leapYear(year){
    return (((year&4==0)&&year%100!=0)||(year%400==0))
}
function dayInMonth(month,year){
    if(month<1 && month>12){
        console.log("invalid month")
        return;
    }
    if(month==2){
        if(leapYear(year)){
            console.log("the month has 29 days")
        }
        else{
            console.log("month has 28 days")
        }
    }
    else if(month==4||month==6 || month==9 ||month==11){
        console.log("the month has 30 days")
    }
}