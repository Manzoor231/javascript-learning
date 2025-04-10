// Q1: Create an arrow function `double` that doubles a number.

const simpleDouble = (double) =>{
    return double *= double;
}
// console.log(simpleDouble(2)) // output: 4



// Q2: Write a function `greet(name)` that returns "Hello, [name]!".

function greet(name){
    return `Hello, [${name}]!`
}
// console.log(greet("Manzoor")) //output: Hello, Manzoor! OR Hello, [Manzoor]!


// Q3:
function operate(a, b, callback) {
    // Q: Call the callback with a and b
    return  a,b,callback(a,b);
  }
  
  operate(3, 4, (x, y) => console.log(x + y));  // Should print 7
  