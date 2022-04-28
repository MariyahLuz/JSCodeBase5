//FACTORIAL of a number
console.log("FACTORIAL OF A NUMBER")
function factorialize(num) {
  let product=1;
  
  for (let i = 2; i <= num; i++) {
    product *= i;   
  console.log(product)
  }
  return product;
}

factorialize(25);