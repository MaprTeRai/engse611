let person = {
    name: "John",
    age: 25,
    city: "Bangkok"
  };
  console.log(person.name); // "John"
  
  person.age = 30; // แก้ไขค่า
person.country = "Thailand"; // เพิ่มค่าใหม่
console.log(person);

delete person.city;
console.log(person);

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  let user = {
    name: "Alice",
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  user.greet(); // "Hello, Alice!"
  