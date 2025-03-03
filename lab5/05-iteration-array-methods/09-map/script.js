/*const newArray = array.map((item, index, array) => {
    return newValue; // ค่าที่จะถูกใส่ใน newArray
  });
*/
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9, 16, 25]

const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // Output: [32, 50, 68, 86]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  
  const updatedUsers = users.map(user => ({
    ...user, 
    isActive: true
  }));
  
  console.log(updatedUsers);
  /* Output:
  [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: true }
  ]
  */

const numbers1 = [1, 2, 3];

const words = numbers1.map(num => `Number ${num}`);
console.log(words); // Output: ["Number 1", "Number 2", "Number 3"]
  