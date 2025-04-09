// array

let myarr = [1,2,3,4,5,6];

console.log(myarr) //output the array

// lets remove the first element from array
myarr.shift() // remove 1 from myarr array
console.log('remove 1 from 0-index ',myarr)


// lets add one element in 0-index
myarr.unshift(10); // 10 in 0-index of myarr array
console.log(`Added 10 in 0-index of an array`,myarr)

// let add 1 elemnt using push method
myarr.push(9);
console.log('Added 9 ', myarr);

// let remove 1 elemnt from last index or remove the last element
myarr.pop()
console.log('removed last index from array: ',myarr)


// addding two array using concat method
let aArr = [1,2,3]
let bArr= [4,5,6];
console.log('Adding two arry: ',aArr.concat(bArr))
console.log("")

//all is spread
let someArr = [12,23,[12,55]]
console.log(someArr.flat(Infinity))