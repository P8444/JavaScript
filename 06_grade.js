function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
       console.log(`Valid marks : ${marks}`); 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } 
       else{
        if (marks<35) {
            console.log(`${marks} Failed`);
        }
        else{
            if(marks>=75 && marks<90)
            {
                console.log(`Excellent marks : ${marks}, Your grade is A`);
            }
            else{
                if (marks>=50 && marks<75) 
                {
                    console.log(`Good marks : ${marks}, Your grade is B`);
                }
                else{
                    if (marks>=35 && marks<50) 
                    {
                        console.log(`Needs improvement: ${marks}, Your grade is C`);
                    }
                }
            }
        }
       }
       
      
       }
    }


// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);
gradeCalculation("Eighty");
gradeCalculation("Tom");
gradeCalculation(49);
gradeCalculation(120);
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
// Valid input
gradeCalculation("20");
