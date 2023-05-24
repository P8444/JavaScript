//Fibonacci series of first 10 numbers
function fibonacci(){

    var num1=0, num2=1, nextTerm=1;
    var index=0;
    console.log(`Fibonacci series is:`);
    
    for ( index = 0; index <=10; index++) {
    
       nextTerm=num1+num2;
       num1=num2;
       num2=nextTerm;
       console.log(num2);
    }
    
    }
    fibonacci();

    