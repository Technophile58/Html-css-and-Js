let age=20;
if(age>18){
    //if block executed if condition is true
    console.log("you can are eligible for vote");
}
if(age<18){
    console.log("you can are not eligible for vote");
}

let Name="Tushar";
if(Name=="Tushar"){
    console.log("Welcome Tushar")
}

// let color="red";

// if(color==="red"){
//     console.log("stop");
// }
// if(color==="yellow"){
//     console.log("Slow down");
// }
// if(color==="green"){
//     console.log("Go");
// }

//else if

let Age=19;
if(Age<18){
    console.log("You cannot drive");
}
else if(age>18){
    //else if block executed if above block is false only
console.log("You can drive  ")
}
else if(age===18){
        //else if block executed if above block is false only
    console.log("You are also eligible")
}

let color="";

if(color==="red"){
    console.log("stop  light color is red");
}
else if(color==="yellow"){
    console.log("Slow down light color is yellow");
}
else if(color==="green"){
    console.log("Go light color is green");
}

else{
    //executed if none of above executed
    console.log("traffic light is broken")
}