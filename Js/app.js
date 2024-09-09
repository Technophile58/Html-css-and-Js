let pencilPrice=50;
let bookPrice=120;
 
// let output="The  total price is : "+(pencilPrice+bookPrice) +" Rupees ";

// emplate literal
let output=`The  total price is :  ${pencilPrice+bookPrice}  Rupees `;

console.log(output);

// Arithematic operator

a=10;
b=5;

c=a+b;

console.log(c);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// assigment operator assign the value to the left
b=a;
console.log(b);

// increment decrement operator
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);

// comparison operator
// till now value of b=8,a=10
console.log(a>b); //true
console.log(a<b); //false
console.log(a>=b); //true
console.log(a<=b); //false
console.log(a==b); //false
console.log(a!=b); //true



// == compare value not type
n=5;
str='5';
console.log( `5=='5' is ${n==str}`); //will  be true in js because ==  only check character and ignore typeof datatype

console.log(123=='123')// true
console.log(1=='1')// true
console.log(0==' ')// true
console.log(0==false)// true
console.log(1==true)// true
console.log(null==undefined)// true


// === compare value and type to used for strict comparison

console.log(123==="123") //false
console.log(1==="1") //false
console.log(0===" ") //false
console.log(0===false) //false
console.log(null===undefined) //false
console.log(0===0) //


//unicode in js

console.log('p'<'P'); //false due to (0050<0070)

//small letter hexvalue always greater than capital letters


//non charater also comparable and it is valid comparison
console.log('*'<'&'); //false