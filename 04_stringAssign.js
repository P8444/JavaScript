function stringHandsOn(givenString) {
    var givenString="    Hey you are doing good,  Keep it up     ";
console.log("1.Given String is",givenString);

var lengthOfGivenString=givenString.length;
console.log("2.Length of given string is ",lengthOfGivenString);

var trimmedGivenString= givenString.trim();
var totalLength=trimmedGivenString.length;
console.log("After Trimming length of string is ",totalLength);
console.log("3.Total no. of spaces in the given string are", lengthOfGivenString-totalLength);

var charAtZero=trimmedGivenString.charAt(0);
console.log("4.First character of string",charAtZero);

var charAtEnd=trimmedGivenString.charAt(34);
console.log("5.Last character of string",charAtEnd);

var givenString1="    Hey you are doing good,  Keep it up     ";
var trimmedString1= givenString1.trim();
var resultSplit= trimmedString1.split(" ");
console.log("6.Total no. of words available in the string: ", resultSplit.length);

var searchRes=trimmedString1.search("good");
console.log("7.Index of word good in the given string :",searchRes);

var subStringRes=trimmedString1.substring(22);
console.log("8. a. Substring starts from index 22 is :",subStringRes);

var sliceRes=trimmedString1.slice(22);
console.log("8. b. Substring slice starts from index 22 is  :",subStringRes);

var resultEndsWith=trimmedString1.endsWith("up");
console.log("9.Is Result ends with up :", resultEndsWith);

var resultStartsWith= trimmedString1.startsWith("Hey");
console.log("10.Is Result start with Hey :", resultStartsWith);

}
stringHandsOn();
