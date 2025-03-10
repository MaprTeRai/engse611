let username = "";
username ||= "Guest"; // username เป็น "" (Falsy) → อัปเดตเป็น "Guest"
console.log(username); // "Guest"

let age = 25;
age ||= 18; // age เป็น 25 (Truthy) → ไม่เปลี่ยนค่า
console.log(age); // 25

let isLoggedIn = true;
isLoggedIn &&= "User is active"; // isLoggedIn เป็น true → อัปเดตค่าใหม่
console.log(isLoggedIn); // "User is active"

let score = 0;
score &&= 100; // score เป็น 0 (Falsy) → ไม่เปลี่ยนค่า
console.log(score); // 0

let nickname = null;
nickname ??= "Anonymous"; // nickname เป็น null → อัปเดตเป็น "Anonymous"
console.log(nickname); // "Anonymous"

let points = 0;
points ??= 50; // points เป็น 0 (แต่ 0 ไม่ใช่ null/undefined) → ไม่เปลี่ยนค่า
console.log(points); // 0

let config = {};
config.theme ||= "light"; // ถ้า config.theme ไม่มีค่า ให้ใช้ "light"
console.log(config.theme); // "light"

let settings = { volume: 0 };
settings.volume ??= 50; // จะไม่เปลี่ยน เพราะ 0 ไม่ใช่ null/undefined
console.log(settings.volume); // 0

let user = { isActive: false, name: "John" };
user.isActive &&= user.name; // ไม่อัปเดตเพราะ isActive เป็น false
console.log(user.isActive); // false
