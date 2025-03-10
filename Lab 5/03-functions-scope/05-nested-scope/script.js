function outer() {
    let outerVar = "I'm from outer";
  
    function inner() {
      let innerVar = "I'm from inner";
      console.log(outerVar); // ✅ ใช้ได้
      console.log(innerVar); // ✅ ใช้ได้
    }
  
    inner();
    // console.log(innerVar); // ❌ Error! (ใช้ตัวแปรของ inner ไม่ได้)
  }
  
  outer();

function testScope() {
    let a = "Outer";
  
    if (true) {
      let b = "Inner";
      console.log(a); // ✅ ใช้ได้
      console.log(b); // ✅ ใช้ได้
    }
  
// console.log(b); // ❌ Error! (ใช้ข้างนอก if ไม่ได้)
  }
  
testScope();

function outer() {
    let secret = "I am hidden";
  
    return function inner() {
      console.log(secret); // ✅ ยังใช้ได้
    };
  }
  
let getSecret = outer();
getSecret(); // "I am hidden"