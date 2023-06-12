const arrayNums=[20, 3, 4, 56, 90, 400, 49];
console.log(`Element of arraNums: ${arrayNums}`);
const clonedArray = arrayNums;
clonedArray.push(55, 66);
//clonedArray.push(66);
console.log(`Cloned Array:${clonedArray}`);

const arrayNums1 = [...arrayNums];
arrayNums1.push(10, 25);
console.log(`Original Array: ${arrayNums}`);
console.log(`Updated array: ${arrayNums1}`);

const arrayEven=[2, 30, 14, 8];
const concatArray=[...arrayNums, ...arrayEven];
console.log(`Concated array : ${concatArray}`);


const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"Om Vrundavan society",
            street: "Kanch Pokali, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800-456 32", "+91 9056 5678 77"]
}
console.log(employee_info.address.locality);
console.log(employee_info.mobiles);

const deepClonedEmp = JSON.parse(JSON.stringify(employee_info));

console.log("Previous salary of July month:",employee_info.salary.july_month);
const newSal=deepClonedEmp.salary.july_month="80,0000INR";
console.log("Updated salary of July month:",newSal);
const newCountry=employee_info.address.country="UK"
console.log("Updated country:",newCountry);
console.log("Original country:", deepClonedEmp.address.country);


