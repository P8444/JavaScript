function maleMarriageEligibility(gender, age, boyName){
var gender ;
var age;
var boyName;
var result= gender=="Male" && age>=21? `${boyName} is eligible for marriage`: `${boyName} is not eligible for marriage`;
console.log(`${result}`);
}
maleMarriageEligibility("Male", 25, "Bilgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

function femaleMarriageEligibility(gender, age, boyName){
    var gender ;
    var age;
    var girlName;
    var result= gender=="Female" && age>=18? `${girlName} is eligible for marriage`: `${girlName} is not eligible for marriage`;
    console.log(`${result}`);
    }
    maleMarriageEligibility("Female", 16, "Jenifer");
    maleMarriageEligibility("Female", 27, "Malinda Gates");
    