//STRING TRANCATING
console.log("//..STRING TRANCATING..")
function truncateString(str, num) {
  if(str.length <= num){
    console.log(str, + "...");
  }
  else{
console.log(str.substring(0, num) + "...");
}
}
let s= truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(s);