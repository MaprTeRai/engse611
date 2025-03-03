let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Even"

let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log(access); // "Allowed"

let username = null;
let displayName = username ? username : "Guest";
console.log(displayName); // "Guest"

let score = 85;
let grade = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "F";
console.log(grade); // "A"

function checkAge(age) {
    if (age >= 18) {
      return "Adult";
    } else {
      return "Minor";
    }
  }
  console.log(checkAge(20)); // "Adult"

let user = "";
let username1 = user || "Guest"; // แบบ || 
let usernameTernary = user ? user : "Guest"; // แบบ ternary
console.log(usernameTernary); // "Guest"

let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // ใช้ &&
isLoggedIn ? console.log("Welcome!") : null; // ใช้ ternary
