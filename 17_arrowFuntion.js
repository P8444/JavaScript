
console.log(`Arrow fun with no arg and no return value`);
let display=()=>{
    console.log(`Display function`);
}
display();

console.log(`Arrow fun with arg and no return value`);
let  show=function() {
    console.log(`Inner show function`);
}
show();

let show1=()=>{
console.log(`Inside show fun...`);
}
show1();

let show2=(id, name2)=>{
    console.log(`Id:${id}, NAme:${name2}`);
    console.log(`Inside show fun...2`);
}
show2(1, "Poonam");

let add=(num1, num2)=>{
    console.log(`Num1: ${num1},Num2:${num2} `);
    let res=num1+num2;
    return res;
}
let res=add(100,200);
console.log(`Result is: ${res}`);

//arrow fun for above

console.log(`Arrow fun with arg and return value`);
let add1 =(num1,num2)=>{
    let result1=num1+num2;
    return result1;
}
let result1=add1(100, 300);

console.log(`Result is: ${result1}`);