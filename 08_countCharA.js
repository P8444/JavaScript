
function countCharA(word){
    let count = 0;
  for(index = 0; index<word.length; index++){
  let char = word.charAt(index);   
  if(char=="a" || char=="A" ){
  count++;
  }
  
  }
  return count;
  }

console.log("I AM Learning JavaScript, The Language of internet");
let str1 = countCharA(`I AM Learning JavaScript, The Language of internet`);
console.log(`Total count of letter "A/a" in above string : ${str1}`);
console.log("");
console.log(`My favourite movie is LAggAn`);
let str2 = countCharA(`"My favourite movie is LAggAn"`);
console.log(`Total count of letter "A/a" in above string : ${str2}`);
