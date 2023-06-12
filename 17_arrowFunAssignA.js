
console.log(`Arrow fun with no arg and no return value`);
let display=()=>{
    console.log(`Good morning. Today is Monday`);
}
display();

console.log("");
console.log(`Arrow fun with arg and return value`);
let multiply =(num1,num2,num3=1)=>{
    let result=num1*num2*num3;
    return result;
}

var result=multiply(5,5,2);
console.log(`Multiplication is: ${result}`);
var result=multiply(10,4);
console.log(`Multiplication is: ${result}`);


console.log("");

console.log(`Arrow fun with arg and return value`);
let add1 =(num1,num2,num3,num4,num5)=>{
    let result1=num1+num2+num3+num4+num5;
    return result1;
}
let result1=add1(100, 100, 200, 349,756);
console.log(`Addition is: ${result1}`);
let result2=add1("I am ","learning ", "ES6 ", "features ", "in depth");
console.log(`Addition is: ${result2}`);

