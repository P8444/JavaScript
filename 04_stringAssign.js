function stringHandsOn(givenString) {
    var givenString="    Hey you are doing good,  Keep it up     ";
console.log("Given String is",givenString);
var lengthOfGivenString=givenString.length;
console.log("Length of given string is ",lengthOfGivenString);
var trimmedGivenString= givenString.trim();
var totalLength=trimmedGivenString.length;
console.log("After Trimming length of string is ",totalLength);
console.log("Total no. of spaces in the given string are", lengthOfGivenString-totalLength);
var charAtZero=trimmedGivenString.charAt(0);
console.log("First character of string",charAtZero);
var charAtEnd=trimmedGivenString.charAt(34);
console.log("Last character of string",charAtEnd);


}
stringHandsOn();
