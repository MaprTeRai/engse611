function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // "Hello, Guest!"
  console.log(greet("Alice")); // "Hello, Alice!"

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // 10
  console.log(sum(5, 10, 15)); // 30

function multiply(a, b, c) {
    return a * b * c;
  }
  
let nums = [2, 3, 4];
  console.log(multiply(...nums)); // 24

function showUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  let user = { name: "Bob", age: 30, city: "Bangkok" };
  showUser(user); // "Name: Bob, Age: 30"
  