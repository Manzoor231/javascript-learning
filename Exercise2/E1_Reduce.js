// Q1: Use reduce to find the sum of all numbers in the array.
const numbers = [10, 20, 30, 40];

// console.log(numbers.reduce((accul, currVuln) => accul + currVuln ));


// Q2: Create a function `getAverage` that returns the average of an array of numbers.
const scores = [70, 80, 90, 100];

function getAverage(score){
    let inital = 0;
    let total =  score.reduce((prev,currn) => prev + currn,inital,)
    return total / score.length;
}
console.log(getAverage(scores))