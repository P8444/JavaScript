const arrayNum=[11,3,4,11,4,7,3];
console.log(arrayNum);
console.log("Remove duplicate element of array");
const setOfNum=[...new Set(arrayNum)];
// for (const element of arrayNum) {
//     setOfNum.add(element);
// }
console.log(setOfNum);
new Set(arrayNum);

const str="How are you mate";
let newChar="";
const arrayWords=str.split(" ");
for (const element of arrayWords) {
    for (let index = 0; index < element.length; index++) {
        let char=" ";
        if(index==0 || index==element.length-1){
            char= element[index].toUpperCase();
        }else{
            char=element[index];
        }
        newChar=newChar+char;  
    }newChar=newChar+" ";

}
    console.log(newChar);
 
