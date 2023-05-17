var greaterNumber=function (num1,num2) {
    var result=num1>=num2? `${num1} is greater` :  `${num2} is greater`;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

var isEvenOrOddNum = function(num){
    var result = num%2 == 0 ? true : false;
     return result;
 }

var result = isEvenOrOddNum(29);
var res = (result == true) ? `29 is even number` : `29 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(44);
var res = (result == true) ? `44 is even number` : `44 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = (result == true) ? `0 is even number` : `0 is odd number`;
console.log(`${res}`);

var result = isEvenOrOddNum(101);
var res = (result == true) ? `101 is even number` : `101 is odd number`;
console.log(`${res}`);

var wordLength = function(word){
    var len = word.length;
    var result = len%2 == 0 ? `EVEN`: `ODD`;
    return result;
    }

returnValue = wordLength("JavaScript")
console.log(`JavaScript is: ${returnValue}`);


returnValue = wordLength("Developer")
console.log(`JavaScript is: ${returnValue}`);


returnValue = wordLength("Google")
console.log(`JavaScript is: ${returnValue}`);