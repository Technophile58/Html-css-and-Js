// loops:loops are used to iterate a piece of code

// for(initialisation;CSSConditionRule;updation){
//     loop body
// }
for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i); not work because i  defined in inside loop block

//odd number qs
console.log("odd numbers are 1 to 15 ")
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i)
    }

}

//even number qs
console.log("even numbers are 2 to 10 ")
//forward printing
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }

}

//backward printing
console.log("backward printing")
for(let i=10;i>1;i--){
    if(i%2==0){
        console.log(i);
    }
}

//print 5 multiplication
// console.log("table of 5");

// for(let i=5;i<=50;i=i+5){
//     console.log(i);
// }

let n=Number(prompt("Enter the number "));
console.log(`table of ${n} is`);
for(let j=n;j<=n*10;j=j+n){
    console.log(j);
}