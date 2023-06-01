let bankSbi={
    bankName:"SBI",
    accountDetails:"1234569878965",
    ifsc:"SBI000001",
    branch:"Pune",
}
console.table(bankSbi);
let bankLocation={
    street:"MG Road",
    city:"Mumbai",
    pin:"415523",
}
console.table(bankLocation);
console.log("Cloning the table into Bank SBI ");

// console.table(bankLocation);

let rateOfInterest={
    homeLoanInterest:"12.5%",
    personalLoanInterest:"10%",
    duelInterest:"9%",
}
Object.assign(bankSbi, bankLocation);
console.table(bankSbi);
console.table(rateOfInterest);

console.log("After merging step 1, 2, 4 ");

// Object.assign(bankSbi, bankLocation, rateOfInterest);
// console.table(bankSbi);

const sbiDetails= Object.assign(bankSbi, bankLocation, rateOfInterest);
console.table(`${sbiDetails}`);

console.log("--------- Traversing an Object -----------");
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}