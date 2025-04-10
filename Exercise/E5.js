// String Exercise
const msg = "   JavaScript Master!   ";

// Q1: Trim the message.
// Q2: Convert to lowercase.
// Q3: Replace "master" with "ninja".

// Q1: 
console.log(msg.trim()) //JavaScript Master! removed extra spaces

// Q2:
console.log(msg.trim().toLowerCase()) // using chaining trim and toLowerCase

// Q3:
console.log(msg.trim().toLowerCase().replace('master','ninja')) //Output: javascript ninja!

// reverse word
const word = "exploration";

// Q: Reverse the word.
console.log(word.split("").reverse().join("")) // Output: noitarolpxe