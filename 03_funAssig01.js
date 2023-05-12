function show() {
    console.log("Show function1");
}
show();
function fullName() {
    console.log("Show function2");
}
fullName();


var firstName ;
var lastName ;
var collegeName;
function personalDetails(firstName, lastName, collegeName){
    console.log("My personal detials are");
    console.log("My name is", firstName, lastName);
    console.log("My college name is", collegeName);
}
personalDetails("Poonam","Waghmare", "SIOM");

var argOne;
var argTwo;
var temp;
function swapValuesDude(argOne, argTwo){

    console.log("Before swap:",argOne, argTwo);
    temp=argOne;
    argOne=argTwo;
    argTwo=temp;
    console.log("After swap:",argOne, argTwo);
    
}
swapValuesDude("Virat" ,"Anushka");

swapValuesDude(1000, 2000);

var a;
var b;
var c;
function addThreeValues(a,b,c)
{
    var result =a + b + c;
    console.log("Addition is:",result);
}
addThreeValues();
addThreeValues(10.23, 600, 40);
addThreeValues("Hello " , "Good " , "Morning");



