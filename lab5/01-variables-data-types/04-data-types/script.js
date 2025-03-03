// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);

// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;

let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false

let name;
console.log(name);  // undefined

console.log(name);  // undefined

// two symbols with the same description
let value3 = Symbol("programiz");
let value4 = Symbol("programiz");

console.log(value1 === value2);  // false

let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
console.log(student);