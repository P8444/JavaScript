// 5! = 5 * 4 * 3 * 2 * 1
/*let factorial = 1; // 120
for (let index = 5; index >= 1; index--) { // index = 5  4  3  2  1  0
    factorial = factorial * index; // 120 * 1 
}
console.log(`Factorial ${factorial}`);*/

//console.log("");
console.log(`Factorial Function`);
function factorialOfNum(num)
{
if(num==0){
console.log('Factorial of zero is: 1');
return;
}
else if(num==undefined ||isNaN(num) || num==null)
{
    console.log(`Invalid data: ${num}`);
}
else if(num>1)
{
let factorial1 = 1;
for (let index = num; index >= 1; index--) { 
    factorial1 = factorial1 * index; 
}
console.log(`Factorial of given number ${num} : ${factorial1}`);
}
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);