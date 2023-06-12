const arrayNumbers=[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("Add 10 into each element and log on new array");
const arrayTrans1=arrayNumbers.map((element)=>{
    return element+10;
    });
    console.log(arrayTrans1);

    console.log("");
console.log("Square the each array element and log on console");
// const arrayTransformed=[]
// arrayNumbers.forEach((element)=>{
// arrayTransformed.push( element*element)
// });

// console.log(arrayTransformed);
const arrayTrans=arrayNumbers.map((element)=>{
return element*element;
});
console.log(arrayTrans);
arrayNumbers.map((element)=>{

});
console.log("");
console.log("Add the index value into its corrsponding each each element and log on new array result");
const arrayTrans2=arrayNumbers.map((element, index)=>{
    return element+index;
    });
    console.log(arrayTrans2);