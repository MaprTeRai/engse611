function greet(name) {
    return `Hello, ${name}!`;
  }
  
console.log(greet("Alice")); // "Hello, Alice!"
  
const add = function (a, b) {
    return a + b;
  };
  
    console.log(add(3, 5)); // 8
  
const multiply = (a, b) => a * b;

    console.log(multiply(4, 2)); // 8

function sayHi(name = "Guest") {
    return `Hi, ${name}!`;
  }
  
    console.log(sayHi()); // "Hi, Guest!"

function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // 10
  