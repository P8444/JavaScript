
var leap= function CheckLeapYear(leapYear) {
 
    if (leapYear == undefined || isNaN(leapYear) ||leapYear <= 999) { // undefined, null
        console.log(`Invalid year: ${leapYear}`);
    }else
    if((leapYear%4==0) && (leapYear%100!=0) || (leapYear%4==0))
    console.log(`${leapYear} is leap year`);
    else
    console.log(leapYear,"Not a leap year");
    
}
leap(2020);
leap(1999);
leap(1600);
leap(2022);
leap(1945);
leap(null);
leap("Twenty twenty");
leap(undefined);
leap(NaN);
leap(1750);
leap(100);
leap(99);
leap(999);
//leap(1000);