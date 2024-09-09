let size="XL";
if(size==="XL"){
    console.log("The price for XL is 250")
}
else if(size==="L"){
    console.log("The price for L is 200")
}

else if(size==="M"){
    console.log("The price for M is 100")
}
else{
    console.log("The price for S is 50")
}

//nested if else

let mark=33;
if(mark>=33){
    console.log("pass");
    if(mark>99){
        console.log("grade:O");
    }
    else{
        console.log("grade:A")
    }
}
else{
    console.log("try next time");
}

let marks=82;
// && means value is true only if both expression is true
if(marks>70 && marks<90){
    console.log("Your grade is A");
}

// && means value is true only if both expression is true
if(marks>70 || marks>90){
    console.log("Your grade is A+");
}


// ! not  convert true to false and false to true
if(!(marks>90)){
    console.log("pass");
}