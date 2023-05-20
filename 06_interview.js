
function interviewEligibility(gradScore, hscScore, sscScore, candidateName){

   if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
    console.log(`Congrates! ${candidateName} You are eligible for TCS interview.`);
   }
   else
   console.log(`Unfortunately! ${candidateName} You are not eligible for TCS interview.`);
}
var result= interviewEligibility(80, 86, 90, "Poonam");

 var result= interviewEligibility(70, 65, 55, "Sonam");

 var result= interviewEligibility(60, 79, 88, "Pooja");

    