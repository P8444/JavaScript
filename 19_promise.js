
let isNotePrepared=true;
let promise=new Promise(function(resolve, reject)
{
// I got time at 4.30
if(isNotePrepared){
resolve("Guys pls take notes")
}else{
    reject("Sorry I didn't get time");
}
});
promise.then(function resolve(success){
console.log(success);
})
.catch (function reject(){
console.log(reject);
}).finally(function(){
    console.log("I should have notes..");
})
