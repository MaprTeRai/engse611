const greet = (name) => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("Alice")); // "Hello, Alice!"

const add = (a, b) => a + b;
console.log(add(3, 5)); // 8  

const sayHi = name => `Hi, ${name}!`;
console.log(sayHi("Bob")); // "Hi, Bob!"

const getMessage = () => "Hello, World!";
console.log(getMessage()); // "Hello, World!"

const person = {
    name: "Alice",
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}`); // ✅ ใช้ this จาก object
      }, 1000);
    }
  };
  
  person.greet(); // "Hello, Alice"

const person2 = {
    name: "Bob",
    greet: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}`); // ❌ this ไม่อ้างถึง object
      }, 1000);
    }
  };
  
person2.greet(); // "Hello, undefined"
  
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]