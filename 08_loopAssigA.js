
console.log("Que 1.");
var word="I am VERY good IT Developer"
var count=0;
for (var index=0; index<=word.length; index++){
    var char=word.charAt(index);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'||
    char=='A' || char=='E' || char=='I' || char=='O' || char=='U')
    //console.log(char);
    count++;
}
console.log(`Count total vowels: ${count}`);

console.log("Que 2.");
function cubeSum() {
   var sum=0;
    for (let index = 1; index <= 5; index++) {
         sum  =sum + (index*index*index);
         console.log(`cube of ${index}=${sum}`);
        //console.log(`${sum}`);
    }
    console.log(`Sum of cube=${sum}`);
   
}cubeSum()
console.log("Que. 3");

   
function oddPositionedChars(gstring){

    let output='';
   for(index=0;index<gstring.length;index++){
  if(index%2!==0 && gstring[index]!==' ')
  {
     output+=gstring[index];
      
  }
  
   }
   console.log(`Odd positioned character of given string:-> ${output}`);
}
var str1="Hard work always pays back"
var str2="Soon i will be Angular IT champ"
console.log(`First String Is:-> "${str1}"`);
oddPositionedChars("Hard work always pays back");
console.log(`Second String Is:-> "${str2}"`);
oddPositionedChars("Soon i will be Angular IT champ")