console.log("1. Square numbers");
var square=function (num) {
var result=num*num;
return `${result}`;
}

var result = square(5);
console.log(`square of 5 is:`, result);

var result = square(6);
console.log(`square of 6 is:`, result);

var result = square(25);
console.log(`square of 25 is:`, result);

var result = square(100);
console.log(`square of 100 is:`, result);

console.log("2. Check and Log Type of Function");
var varName=function() {  }
var typeOfVarName=typeof varName;
console.log(`2. Type of function is : ${typeOfVarName}`);

var area=function (length,width) {
    var areaOfRect=length*width;
   return `3. Area of rectangular plot = ${areaOfRect}`;
}
var areaOfRect=area(499, 917);
console.log(areaOfRect);

console.log(`4. Function Expression with two args and should swap the passed values and log on console before swap and after swap values inside function  itself `);
var name1 = "Virat";
var name2 = "Anushka";
var num1 = 1000;
var num2 = 2000;
var swapFun=function name(arg1, arg2) {
console.log("Before swapping values are:", arg1, arg2);

var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log(`After swapping values are: ${arg1}, ${arg2}`)
    
}
swapFun(name1, name2);
swapFun(num1, num2);

console.log(`5. Write a FE which can perform the below steps for string "Js the most popular language of internet" `);

var givenString = "Js the most popular language of internet";
var string1  = function(){
var stringLength=givenString.length;
console.log(`a. Total characters in the given string :${stringLength}`);

var charIndexAt6= givenString.charAt(6);
console.log(`b. Character at index 6 : ${charIndexAt6}`);

var charIndexAt11= givenString.charAt(11);
console.log(`c. Character at index 11 : ${charIndexAt11}`);

var charAtLastIndex =givenString.charAt(stringLength-1);
console.log(`d. Last character of given String is: ${charAtLastIndex}`);

var charAtFirst = givenString.charAt(0);
console.log(`e. First character of given String is: ${charAtFirst}`);

var spiltRes=givenString.split(" ");
console.log(spiltRes);
var spiltResLength= spiltRes.length;
console.log(`F. a. Total words in given String are : ${spiltResLength}`);

var sqresult = spiltResLength*spiltResLength;
console.log(`F b. Square of the total number of words in given string is: ${sqresult}`);

}
string1();