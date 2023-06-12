const arrayNumbers=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19 ];
const arrayGreaterThan50=arrayNumbers.filter((element)=>{
return element>50
});
console.log(arrayGreaterThan50);

console.log("");
console.log("Even numbers:");
const arrayEven=arrayNumbers.filter((element)=>{
    return element%2==0
    });
    console.log(arrayEven);


console.log("");
console.log("Odd numbers:");
const arrayOdd=arrayNumbers.filter((element)=>{
    return element%2!==0
    });
    console.log(arrayOdd);



console.log("");
console.log("Multiple of 5:");
const arrayMultipleOf5=arrayNumbers.filter((element)=>{
    return element%5==0;
    });
    console.log(arrayMultipleOf5);

console.log("");
console.log("Numbers between 20 & 50:");
const arrayBet20n50=arrayNumbers.filter((element)=>{
    if(element>20 && element<50)
    return element;
    });
    console.log(arrayBet20n50);