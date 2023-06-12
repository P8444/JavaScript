class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }

}
const emp_anil=new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha=new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi=new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali=new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika=new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak=new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh=new Employee(99, "Mahesh","HR", 85000, "Infy");



const arrayEmployees=[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
console.table(arrayEmployees);

console.log("Find out TCS employee details");
arrayEmployees.forEach( (employee)=> {
    if (employee.emp_company=="TCS") {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);

    }
}); 

console.log("");
console.log("Employee details Whose Salary is greater than or equal to 50000 ");
arrayEmployees.forEach( (employee)=> {
    if (employee.emp_salary>=50000) {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);

    }
}); 

console.log("");
console.log("Sum of salary: ");
let sum=0;
arrayEmployees.forEach( (employee)=> {
    sum=sum+employee.emp_salary;
}); 
console.log(sum);

console.log("");
console.log("Average salary: ");
let sumSal=0;
arrayEmployees.forEach( (employee)=> {
sumSal=sumSal+employee.emp_salary;
}); 
let avgSal=sumSal/arrayEmployees.length;
console.log(`Average Salary: ${avgSal}`);

console.log("");
console.log("Find IT or HR dept whose Salary is greater than or equal to 75000 ");
arrayEmployees.forEach( (employee)=> {
    if (employee.emp_salary>=75000 && employee.emp_dept=="IT" ||employee.emp_dept=="HR" ) {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);

    }
}); 
