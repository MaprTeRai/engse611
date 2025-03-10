console.log(greet("Alice")); // ✅ ใช้ได้ แม้อยู่ก่อนประกาศ

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Bob")); // "Hello, Bob!"

// console.log(sayHi("Alice")); // ❌ Error! (ยังใช้ไม่ได้นะ)

const sayHi = function (name) {
    return `Hi, ${name}!`;
  };
  
  console.log(sayHi("Bob")); // "Hi, Bob!"

const add = (a, b) => a + b;
console.log(add(3, 5)); // 8
  