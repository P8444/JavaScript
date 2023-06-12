const arrayNums=[10, 5, 70, 90, 100, 30, 47];
const array=["Bill", "Stew Jobs", "Elon Musk", "Mark", "Sundar"];
//length of the word and square it and sum it all
let result=0;
array.forEach((element)=>{
    const wordLength=element.length;
    result=result+wordLength*wordLength;
});
console.log(result);