const professor = {
    name: "Pooja",
    age: 32,
    height: "6feet",
    city: "Satara",
    state: "Maharashtra",
    country: "India",

    degrees:{
        engineering: 'CSC',
        PHD:'Adv Computing',
    
    },

    certificates:['Hacker Rank Participation', ' Certificate in IFE course', ' Certificate in Adv Programming'],

    details: function(){
        console.log(`Professor Degrees: Engineering Degree: Engineering: ${degrees.engineering}, PHD: ${degrees.PHD}`);
    },

    getDetails: function(){
        let details = ` Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}`;
        return details;
    },
    totalExperience: "14 years",
        
};
console.log(' Properties of Professor object are: ', professor);

console.log("");

console.log( ` properties of Degree object: `, professor.degrees);
console.log("");
console.log(' Array elements are: ', professor.certificates);

console.log("");
const details = professor.getDetails();
console.log(`Professor degrees are: ${details}`);

console.log("");
let totalExp = professor.totalExperience;
console.log(`Total Experience : ${totalExp}`);

console.log("");
console.log(`Existing object : `, professor);
professor.city = "Pune";

console.log("");
console.log(`Cerificates are: [${professor.certificates}]`);
console.log("");

let addCertificate = professor.certificates.push(" Oracle Certified");

console.log(`New one added: [${professor.certificates}] `);

console.log("");
let arrLength = professor.certificates.length;
let lastArrElement =professor.certificates[arrLength-1];
console.log(`Last element of an array certificates is: ${lastArrElement}`);
