// Exercise 2
const a = { x: 1, y: 2 };
const b = { y: 10, z: 3 };

// Q: Merge both objects into one using spread operator.

// Answer:
let c = {...a,...b};
console.log(c); // output { x: 1, y: 10, z: 3 }