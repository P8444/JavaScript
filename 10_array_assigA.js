const arrayFruits=["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);

const zerothIndexValue =arrayFruits[0];
console.log(`First element: ${zerothIndexValue}`);

let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`Last element: ${lastElement}`);

console.log("");
arrayFruits.unshift("Papaya");
console.log("After adding Papaya");
console.log(arrayFruits);
console.log("");

const x =arrayFruits.splice(4, 1);
console.log("Element to be removed",x);
console.log("After removing Mango array is...");
console.log(arrayFruits);

console.log("");

console.log("Added Pineapple..");
arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log("");

console.log("Dragon fruit added before watermelon...");
let addElementDragfruit = arrayFruits.splice(4, 0, "Dragan Fruit")
console.log(arrayFruits);

console.log("");
console.log("Replacing Orange with Kiwi...");
arrayFruits.splice(2,1, "Kiwi");
console.log(arrayFruits);

console.log("");
console.log("1 to 4 index are...");
arrayFruits.shift();
let arrSpliced = arrayFruits.splice(4, 3);
console.log(arrayFruits);


console.log("");
console.log("Last 3 elemens are...");
let arrSpliced1 = arrayFruits.splice(0, 1);
console.log(arrayFruits);



 