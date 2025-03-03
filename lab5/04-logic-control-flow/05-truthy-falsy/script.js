console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(""));         // false (string ว่าง)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));    // true (string ที่ไม่ว่าง)
console.log(Boolean([]));         // true (array ว่าง)
console.log(Boolean({}));         // true (object ว่าง)
console.log(Boolean(Infinity));   // true

let name = "";  // Falsy
if (name) {
  console.log("Hello, " + name);
} else {
  console.log("No name provided."); // ✅ รันอันนี้
}

let user = "";
let username = user || "Guest"; // ใช้ "Guest" ถ้า user เป็น Falsy
console.log(username); // "Guest"

let isLoggedIn = true;
let message = isLoggedIn && "Welcome!";
console.log(message); // "Welcome!"