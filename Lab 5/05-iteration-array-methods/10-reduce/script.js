/*const result = array.reduce((accumulator, item, index, array) => {
    return newAccumulator;
  }, initialValue);
*/
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100

const numbers1 = [5, 12, 8, 20, 3];

const max = numbers1.reduce((acc, num) => Math.max(acc, num), numbers[0]);
console.log(max); // Output: 20

const fruits = ["🍎", "🍌", "🍎", "🍉", "🍌", "🍎"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
/* Output:
{
  "🍎": 3,
  "🍌": 2,
  "🍉": 1
}
*/

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  console.log(totalAge); // Output: 90
  
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" }
  ];
  
const grouped = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});
  
console.log(grouped);
  /* Output:
  {
    Electronics: [{ name: "Laptop", category: "Electronics" }, { name: "Phone", category: "Electronics" }],
    Clothing: [{ name: "Shirt", category: "Clothing" }]
  }
  */
  