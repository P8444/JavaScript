class Vehicle{
    constructor(regNo, ownerName, model, engine, color)
    {
     this.regNo=regNo;
     this.ownerName=ownerName;
     this.model=model;
     this.engine=engine;   
     this.color=color;
    }
    showDetails(){
        console.log(`Vehicle Details are: Reg No. : ${this.regNo}, Owner Name : ${this.ownerName}, Model : ${this.model}, Engine No.${this.engine}, Color : ${this.color}`);
    }
}

const splender=new Vehicle("MH11PQ1111", "Elizabeth", "HeroHonda SplenderPlus", "1234", "Black");
const pulser=new Vehicle("MH11PQ1112", "Mahi", "Pulser", "1224", "Blue");
const activa=new Vehicle("MH11PQ1113", "Virat", "Activa", "5578", "Brown");
const access=new Vehicle("MH11PQ1114", "Anushka", "Access", "1989", "Red");
const ebike=new Vehicle("MH11PQ1115", "Angel", "Electronic bike", "1264", "White");


// splender.showDetails();
// pulser.showDetails();
// activa.showDetails();
// access.showDetails();
// ebike.showDetails();
const arrayVehicles=[splender, pulser, activa, access, ebike ];
for (const element of arrayVehicles) {
      element.showDetails();
}

console.log("");
class College{
    constructor(collegeName, dept, location, phoneNo){
        this.collegeName=collegeName;
        this.dept=dept;
        this.location=location;
        this.phoneNo=phoneNo;
    }
 
}
const College1=new College("SIOM", "MCA", "Pune", 9874561230);
const College2=new College("SIOM", "MBA", "Pune", 9874561230);
const College3=new College("SIIT", "BCA", "Solapur", 9274561230);
const College4=new College("SSIIT", "BBA BCA MCA", "Satara", 9874561230);
traverse(College1);
console.log("");
traverse(College2);
console.log("");
traverse(College3);
console.log("");
traverse(College4);



function traverse(collegeObject) {
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key} : ${element}`);
        }
    }
}