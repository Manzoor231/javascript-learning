// regular function

function sayMyName(){
    console.log("hello World");
}
// calling function
sayMyName();

// return function with parameter

function addTwo(x,y){
    return x + y;
}

let sum  = addTwo(5,6);
console.log(sum)

// using object in function 
let object = {
    name : "manzoor",
    age : 23,
    isActive : true
}
function myName(player){
    console.log(`my name is ${player.name} and my age is ${player.age}`)
}
myName(object);
myName({name: "ali", age: 18})

// using spread and rest operator

//if you want to add multiple paremter without defining every paramter we use rest which pack the elelmts
// rest operator ...
function showNames(...names){
    return names;
}

let yourName = showNames('ali','umer','ali') // output the array
console.log(yourName)

// spread operator to join multple elemetns in one array
let arr = ['age','uem','asdf'];
// using spread operator ...
let combineArr = [...yourName,...arr]
console.log(combineArr)

// destruction
let desObj = {
    title: "avenger",
    des : "MCU best movie ever made"
}
let {title, des} = desObj
console.log(title, des)