/*for (const item of iterable) {
    // คำสั่งที่ต้องการให้ทำซ้ำ
  }
*/
const fruits = ["🍎", "🍌", "🍉"];
for (const fruit of fruits) {
  console.log(fruit);
}
/* Output:
🍎
🍌
🍉
*/

const name = "JavaScript";
for (const char of name) {
  console.log(char);
}
/* Output:
J
a
v
a
S
c
r
i
p
t
*/

const numbers = new Set([1, 2, 3, 3, 4]);
for (const num of numbers) {
  console.log(num);
}
/* Output:
1
2
3
4
*/

const user = new Map([
    ["name", "John"],
    ["age", 25],
    ["city", "Bangkok"]
  ]);
  
  for (const [key, value] of user) {
    console.log(`${key}: ${value}`);
  }
  /* Output:
  name: John
  age: 25
  city: Bangkok
  */
  
/*const listItems = document.querySelectorAll("li");
  for (const item of listItems) {
    item.style.color = "red"; // เปลี่ยนสีตัวหนังสือ
  }
*/

