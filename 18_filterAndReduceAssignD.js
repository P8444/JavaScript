

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Wipro company's employee");
const arrayTcsEmpNames=array_employees.filter((employee)=>{
return employee.emp_company=="Wipro"
}).map((employee)=>{
    return employee.emp_name;
});
console.log(arrayTcsEmpNames);

console.log("");
console.log("The employee from IT or HR dept");
const arrayItHrDept=array_employees.filter((employee)=>{
    return employee.emp_dept=="IT" ||"HR"
    }).map((employee)=>{
        return employee.emp_name;
    });
    console.log(arrayItHrDept);

console.log("");
console.log("The employee whose ID is greate than 50");
const arrayEmpIdGreaterThan50=array_employees.filter((employee)=>{
    return employee.emp_id>50
    }).map((employee)=>{
        return employee.emp_name;
    });
    console.log(arrayEmpIdGreaterThan50);

console.log("");
console.log("The employee whose name start with A, V, M");
const arrayNameWithAVM=array_employees.filter((employee)=>{
    return employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")
    }).map((employee)=>{
        return employee.emp_name;
    });
    console.log(arrayNameWithAVM);

   
console.log("");
console.log("Average salary"); 
const empSalaries=array_employees.map((employee)=>{
    return employee.emp_salary;
});
const sumSalary=empSalaries.reduce((runningTotal, value)=>{
return runningTotal+value
});
console.log("Sum of salary:",sumSalary);
const avgSal=sumSalary/empSalaries.length;
console.log("Average salary:",avgSal);

console.log("");

const employeeOfItDept = array_employees.filter((element) => {
    return (element.emp_dept=="IT") ;
    });

    const empSalariesOfItDept = employeeOfItDept.map( (employee) => {
        return employee.emp_salary;
    });

const arrayOfAverageSalaryOfIt =empSalariesOfItDept.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(` IT department's employee's total salary is: ${arrayOfAverageSalaryOfIt}`);
const averageSalaryOfIt = arrayOfAverageSalaryOfIt/employeeOfItDept.length;
console.log(` Average salary of the IT department employee is: ${averageSalaryOfIt}`);