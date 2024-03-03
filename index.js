// EXAMPLE 1 - Initialize a Set with Values in JavaScript

const set1 = new Set(['one', 'one', 'two', 'three']);
console.log(set1); // 👉️ {'one', 'two', 'three'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Initialize a Set with values from an array of objects

// const employees = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bobby'},
//   {id: 3, name: 'Carl'},
// ];

// const set1 = new Set(employees.map(obj => obj.name));

// // 👇️ Set(3) { 'Alice', 'Bobby', 'Carl' }
// console.log(set1);

// console.log(set1.has('Bobby')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Initializing a Set with Values using a String

// const set2 = new Set('hello');
// console.log(set2); // 👉️ {'h', 'e', 'l', 'o'}

// ------------------------------------------------------------------

// // EXAMPLE 4 - Initializing a Set with values using another Set

// const set1 = new Set(['one', 'two', 'three']);

// const set2 = new Set([...set1, 'four']);
// console.log(set2); // 👉️ {'one', 'two', 'three', 'four'}

// ------------------------------------------------------------------

// // EXAMPLE 5 - Manually adding values to a `Set` object

// const set = new Set();

// set.add('bobby');
// set.add('hadz');
// set.add('com');

// console.log(set); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }
