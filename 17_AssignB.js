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
console.log("Find employees working in TCS and log only employee names");
for (const employee of arrayEmployees) {
    if (employee.emp_company=="TCS") {
        console.log(employee.emp_name);
    }
//console.log(employee);
}
console.log("");
console.log("Find the Finance dept employees, log only dept & emp name on console");
for (const employee of arrayEmployees) {
    if (employee.emp_dept=="Finance") {
        console.log(`Employee Dept.:${employee.emp_dept}, Employee name: ${employee.emp_name}`);
    }
   // console.log(employee);
}
console.log("");
console.log("Find the name whose name starts with R, complete employee details on console");
for (const employee of arrayEmployees) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);
    }
   // console.log(employee);
}

console.log("");
console.log("Find the salary whose salary is greater than 75000 & log on console emp name, company, salary");
for (const employee of arrayEmployees) {
    if (employee.emp_salary>75000) {
        console.log(`Name:${employee.emp_name}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);
    }
   // console.log(employee);
}


console.log("");
console.log("Find the salary whose salary is greater than 50000 & from IT dept log on complete details");
for (const employee of arrayEmployees) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);
    }
   // console.log(employee);
}

console.log("");
console.log("Find out all the employee from infy and log on complete details ");
for (const employee of arrayEmployees) {
    if (employee.emp_company=="Infy") {
        console.log(`Details are:ID: ${employee.emp_id}, Name:${employee.emp_name}, Department:${employee.emp_dept}, Salary:${employee.emp_salary}, Company:${employee.emp_company}`);
    }
   // console.log(employee);
}
