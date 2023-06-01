const arrayNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);


const element= arrayNumbers.length;
console.log("Length of an array number: ", element);

const firstElement=arrayNumbers[0];
console.log("First element of an array : ", firstElement);

const lastElement=arrayNumbers[element-1]
console.log("Last element of an array : ",lastElement);

const thirdElement = arrayNumbers[element-9];
console.log("Third element of an array : ", thirdElement);

console.log("");
console.log("Even numbers from the array are:");
for (const element in arrayNumbers) {
    if(element%2==0){
    console.log(`${arrayNumbers[element]}`);

    }
}
console.log("");

console.log("Odd numbers from the array are:");
for (const element in arrayNumbers) {
    if(element%2!==0){
  console.log(`${arrayNumbers[element]}`);
    }
    
}

console.log("");
console.log("Even positioned numbers are:");
let sumEven=0;
for (const index in arrayNumbers) {
    if (index%2==0) {
     console.log(`${arrayNumbers[index]}`);   
     sumEven= sumEven + arrayNumbers[index];
    }
 }
 console.log("Sum is :", sumEven);

 console.log("");
 console.log("Odd positioned numbers are:");
 let sumOdd=0;
 for (const index in arrayNumbers) {
     if (index%2!==0) {
      console.log(`${arrayNumbers[index]}`);
      sumOdd = sumOdd+arrayNumbers[index];
     }
  }
  console.log("Sum is :" ,sumOdd);
 

  console.log("");
  let sum=0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    sum+=arrayNumbers[index];
  }
  console.log("Sum of all element is:", sum);
 
  console.log("");
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%5==0)
    console.log("Multiple of 5 is :",element);
}
 
console.log("");

for (let index = 0; index < arrayNumbers.length; index++) {
   
    const element = arrayNumbers.includes(115);
    console.log("Is 115 present :",  element);
    
}
for (let index = 0; index < arrayNumbers.length; index++) {
   
    const element1 = arrayNumbers.includes(23);
    console.log("Is 23 present :",  element1);
    
}

console.log("");
console.log("55, 66 inserted before index 3...");
let addElement = arrayNumbers.splice(2, 0, 55, 66)
console.log(arrayNumbers);

console.log("");
console.log("Deleted 3 elements from index 4");
let splicedEle=arrayNumbers.splice(4,3);
console.log(arrayNumbers);

