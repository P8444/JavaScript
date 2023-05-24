console.log(`==== Traversing array =====`);

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for (let index = 0; index < arrayNames.length; index++) {
    const element = arrayNames[index];
    console.log(element);
}

console.log(`------------ for in loop -----------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
}

console.log(`------------ for of loop -----------------`);
for (const element of arrayNames) {
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}

console.log(`---------- join() ------------`);
let names = arrayNames.join(", ");
console.log(names);

const arrayBoys = ["Anil", "Ram" ,"Sunil"];
let arrayGirls = ["Siya", "Jenny"]

let combineArray =  arrayBoys + arrayGirls;
console.log(combineArray);

let concatArray =  arrayBoys.concat(arrayGirls);
console.log(concatArray);

console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);


let setRollNums = new Set();
setRollNums.add(10);
setRollNums.add(20);
setRollNums.add(21);
setRollNums.add(45);
setRollNums.add(20);
console.log(setRollNums);

console.log(setRollNums.size);

setRollNums.delete(21);
console.log(setRollNums);

const isAvailable = setRollNums.has(20);
console.log(isAvailable);

setRollNums.add(55);
setRollNums.add(80);

console.log(typeof setRollNums);

for (const element of setRollNums) {
    console.log(element);
}