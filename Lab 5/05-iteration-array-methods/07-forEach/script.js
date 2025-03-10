/*array.forEach((item, index, array) => {
    // คำสั่งที่ต้องการให้ทำซ้ำ
  });
*/  
const fruits = ["🍎", "🍌", "🍉"];

fruits.forEach(fruit => {
  console.log(fruit);
});
/* Output:
🍎
🍌
🍉
*/

const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});
/* Output:
0: red
1: green
2: blue
*/

const numbers = [10, 20, 30];
let sum = 0;

numbers.forEach(num => sum += num);

console.log(sum); // Output: 60

const user = { name: "John", age: 25, city: "Bangkok" };

Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
/* Output:
name: John
age: 25
city: Bangkok
*/
