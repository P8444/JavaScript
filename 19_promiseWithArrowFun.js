
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
promise.then(success=>{
console.log(success);
})
.catch (reject=>{
console.log(reject);
}).finally(()=>{
    console.log("I should have notes..");
})
