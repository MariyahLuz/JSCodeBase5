//REVERSING A STRING
console.log("..//REVERSING A STRING..")
function reverseString(str) {
  let str1="";
  for(let i=str.length -1; i>=0; i--){
    
    str1+=str[i];
  }
  return str1;
}