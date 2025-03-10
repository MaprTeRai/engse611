{
    let a = 10;
    const b = 20;
    var c = 30; // ❌ ไม่ถูกจำกัดใน Block
  }
  
  console.log(c); // ✅ ใช้ได้ (var ไม่มี Block Scope)
  // console.log(a, b); // ❌ Error! (a และ b ใช้ข้างนอกไม่ได้)
  
if (true) {
    let x = 100;
    console.log(x); // ✅ ใช้ได้
}
  
// console.log(x); // ❌ Error! x อยู่นอก Block ไม่ได้

for (let i = 0; i < 3; i++) {
    console.log(i); // ✅ ใช้ได้ใน Block
  }
  
  // console.log(i); // ❌ Error! i ใช้ข้างนอกไม่ได้

if (true) {
    var z = 999;
  }
  
console.log(z); // ✅ ใช้ได้ (แต่ไม่ปลอดภัย!)
  