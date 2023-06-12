




function display(){
    console.log("display");
}
//1second=1000ms
setTimeout(display, 3000);

setTimeout(function(){
    console.log(100+100);
}, 5000)

setTimeout(()=>{
    console.log("Inside arrow function...");
} ,1000)