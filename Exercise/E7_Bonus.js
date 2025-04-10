// Create a function that accepts any number of numbers
// using rest operator and returns their average.

function getAverange(...num){
    let sum = [];
    for(let i = 0; i < num.length; i++){
        sum.push(num[i]);
    }
    console.log(sum)
}

console.log(getAverange(1))

