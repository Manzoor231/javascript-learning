// Exercise 1 - Destructing

const user = {
    name: "Manzoor",
    age: 25,
    skills: {
      coding: "expert",
      hacking: "pro"
    }
  };

// Q: Destructure `name` and `skills.hacking` into variables.

let {name} = user;
let {hacking} = user.skills;
console.log(`my name is ${name} and my hacking is ${hacking}`);