let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };

console.log(obj2); // { a: 1, b: 2 }

let obj3 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj3 };

console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

let updated = { ...obj1, b: 99 };
console.log(updated); // { a: 1, b: 99 }

let person = { name: "John", age: 25 };

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["John", 25]
console.log(Object.entries(person)); // [["name", "John"], ["age", 25]]

let entries = Object.entries(person);
let objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // { name: "John", age: 25 }
