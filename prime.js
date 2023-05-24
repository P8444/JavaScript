

var primeNum=function prime(num) {

var num;
for (let index = 2; index < 100; index++) {
    if(num%2==0)
    console.log(`${num} is not prime`);
    else
    if (index==num) {
        console.log(`${num} is prime`);
    }
}
}
primeNum(8);
primeNum(19);
primeNum(53)
