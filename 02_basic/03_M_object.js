// two way to create object first one we did and second is like ths

let A = new Object({});
A.id = 1;
A.name = "manzoor";
console.log(A);

let Tinder = {
  fullname: {
    username: {
      firstName: "Manzoor",
      lastName: "Strange",
    },
  },
};

// console.log(Tinder.fullname.username)

// add multiple object using spread
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };
let obj3 = { 5: "g", 6: "g" };

let c = { ...obj1, ...obj2 };
console.log(c);

// another method

let anMethod = Object.assign({}, obj1, obj2, obj3);.

console.log(anMethod);

// most of the time when fetching from database it give objects in array like this

let fetch = [{ name: "manzoor", age: 18 }, { title: "game of throne" }];
console.log(fetch)

// we can use multple method to get the data
//get the 0index
let user = fetch[0]
// get keys of object ex 'name', 'age'
console.log(Object.keys(user))
// get the values of object ex: 'manzoor',18
console.log(Object.values(user))