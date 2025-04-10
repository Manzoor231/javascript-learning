const fruits = ["apple", "banana"];
const moreFruits = ["mango", "orange"];

// Q: Combine both arrays using spread operator.
// Answer
let totalFruit = [...fruits, ...moreFruits] // using spread ...
console.log(totalFruit) // output: [ 'apple', 'banana', 'mango', 'orange' ]