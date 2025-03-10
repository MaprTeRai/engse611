/*for (const key in object) {
    // คำสั่งที่ต้องการให้ทำซ้ำ
  }
*/
const user = {
    name: "John",
    age: 25,
    city: "Bangkok"
  };
  
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  /* Output:
  name: John
  age: 25
  city: Bangkok
  */
  
const colors = ["red", "green", "blue"];
  for (const index in colors) {
    console.log(index, colors[index]); // ดึง index + value
  }
  /* Output:
  0 red
  1 green
  2 blue
  */

const person = { name: "Alice", age: 30 };
  Object.prototype.country = "Thailand";
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  /* Output:
  name: Alice
  age: 30
  country: Thailand (Prototype ก็ถูกดึงมา)
  */

for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
  /* Output:
  name: Alice
  age: 30
  */
  