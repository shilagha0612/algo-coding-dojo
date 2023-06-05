
function greet(name,time){
    if(name=="dooku"){
        console.log("I am coming for dooku")
    }
        else if(time<12){
            console.log("Good morning, " + name)
        }
        else if(time<18){
            console.log("Good afternoon, " + name)
        }
            
            else if(time<24){
                console.log("Good night, " + name)
            }
            else{
                console.log("Good Day, " + name)
            }
}
greet("dooku",9)
greet("paras",12)
greet("sahil",14)
