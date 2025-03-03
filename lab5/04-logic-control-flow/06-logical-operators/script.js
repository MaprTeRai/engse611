console.log(true && true);  // true
console.log(true && false); // false
console.log(0 && "Hello");  // 0 (เพราะ 0 เป็น Falsy)
console.log(1 && "Hello");  // "Hello" (เพราะ 1 เป็น Truthy)

console.log(true || false); // true
console.log(false || false); // false
console.log("" || "Hello");  // "Hello" (เพราะ "" เป็น Falsy)
console.log(0 || 100);       // 100 (เพราะ 0 เป็น Falsy)

console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true (เพราะ 0 เป็น Falsy)
console.log(!1);     // false (เพราะ 1 เป็น Truthy)
console.log(!"");    // true (string ว่างเป็น Falsy)
console.log(!"Hi");  // false (string ไม่ว่างเป็น Truthy)

console.log(false && "Hello");  // false (หยุดที่ false)
console.log(true && "Hello");   // "Hello" (เพราะ true && อะไรก็เป็นค่าอันนั้น)

console.log(true || "Bye");     // true (หยุดที่ true)
console.log(false || "Bye");    // "Bye" (เพราะ false ต้องไปต่อ)

let user = "";
let username = user || "Guest"; // ถ้า user เป็น Falsy ใช้ "Guest"
console.log(username); // "Guest"

let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // "Welcome!" (รันเฉพาะถ้าเป็น true)
