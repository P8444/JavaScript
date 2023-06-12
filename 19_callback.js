    'use strict';
function hello(greetCallback, sayByeCallback){
    console.log("Hello");
    greetCallback(200);
    sayByeCallback("See you tomorrow");
}
let greet=function(num){
    console.log("Good morning", num);
}
let sayBye=function(message){
    console.log("Good bye",message);
}
hello(greet, sayBye)