var sweety = "Sweety";
var cutie = "Cutie";
console.log("Before Swap..", "Sweety: ", sweety, " Cutie: ", cutie);
var temp = sweety;
sweety = cutie;
cutie = temp;
console.log("After Swap:","Sweety:", sweety, " Cutie:", cutie);

var num1 = 100;
var num2 = 200;
var num3 = 300;
// Output --> num1 = 200,  num2 =100

console.log("Before Swap..", "num1: ", num1, " num2: ", num2 , " num3: ", num3);
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("num1:", num1, " num2:", num2 , " num3: ", num3);