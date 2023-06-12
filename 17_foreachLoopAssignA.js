
const arrayNums=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("1. Array elements using foreach loop");
arrayNums.forEach(element => {
    console.log(element);
});
console.log("");
console.log("2. Positive array elements are:");
arrayNums.forEach(element => {
    if(element>=0)
    console.log(element);
});

console.log("");
console.log("3. Negative array elements are:");
const negativeArray=[];
arrayNums.forEach(element => {
    if(element<0)
    negativeArray.push(element);
});
negativeArray.forEach(element=>console.log(element));

console.log("");
console.log("4. Even numbers are:");
arrayNums.forEach(element => {
    if(element%2==0)
    console.log(element);
});

console.log("");
console.log("5. Sum of all array elements:");
let sum=0
arrayNums.forEach(element => {
    sum=sum+element;

});
console.log(sum);
console.log("");
console.log("6. Even indexed array value:");
arrayNums.forEach((element , index)=> {
    if(index%2==0)
    console.log(element);
});