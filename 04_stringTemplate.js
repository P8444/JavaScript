var greet="Good Morning mate, How are you";
var splitResult=greet.split(" ");
console.log(splitResult);
console.log("After split words are:",splitResult, "Total no of words:", splitResult.length);
console.log(`After split words are:${splitResult}Total no of words:${splitResult.length}`);
console.log(`Given string is${greet}`);

var myName="Elon Musk";
var result=myName.startsWith("E");
console.log(`Is ${myName} start with "Elon": ${result}`);

var myName="Elon Musk";
var result=myName.startsWith("elon");
console.log(`Is ${myName} start with "elon": ${result}`);

var myName="Elon Musk";
var result=myName.endsWith("k");
console.log(`Is ${myName} ends with "k": ${result}`);

var myName="Elon Musk";
var result=myName.endsWith("Musk");
console.log(`Is ${myName} ends with "Musk": ${result}`);

var myName="Elon Musk";
var result=myName.endsWith("b");
console.log(`Is ${myName} ends with "b": ${result}`);

