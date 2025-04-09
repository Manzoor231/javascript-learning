//objects

// lets create object
let myObject = {
    "name": "manzoor",
    "age": 20,
    isActive: true
    
}
//log object
console.log(myObject)
console.log(myObject.name)
console.log(myObject.age)
console.log(myObject.isActive)
// or
console.log(`Hello my name is ${myObject.name} and my age is ${myObject.age} and i am active ${myObject.isActive}`)

// we can can use symbol here to
const mySym = Symbol('key1');
let myObject2 = {
    "name": "manzoor",
    [mySym]: "symbolcalling",
    "age": 20,
    isActive: true,
}
//symbol
console.log(myObject2['mySym'])
console.log(typeof myObject2[mySym])


//overide value
myObject.name = "Micheal";
console.log(myObject.name)

//creating function object

myObject.greeting = function(){
    console.log(`Hello ${this.name} calling from creating function and using this.name`)
}
console.log(myObject.greeting())