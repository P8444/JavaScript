function squareOfWordLength(str){
var len= str.length;
console.log(`Length: ${len}`);

var square=len*len;
console.log("Square:", square);

}
squareOfWordLength("abc");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

function abc() {
    var str="I am Angular Developer";
    var lengthStr=str.length;
    console.log("Length of given string:",lengthStr);
    var result=str.split(" ");
    var totalWords=result.length;
    console.log("Total words: ", totalWords);
    console.log("String length divide by total number of length:",lengthStr/totalWords);
    console.log("String length and multiple by the total words available in the string: ", lengthStr*totalWords);
}
abc();