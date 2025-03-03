let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ใช้ได้
}

showGlobal();
console.log(globalVar); // ใช้ได้

function showLocal() {
    let localVar = "I am local";
    console.log(localVar); // ใช้ได้
  }
  
showLocal();
console.log(localVar); // ❌ Error! ใช้ข้างนอกไม่ได้
  
function outer() {
    let outerVar = "Outer";
  
    function inner() {
      console.log(outerVar); // ใช้ได้
    }
  
    inner();
  }
  
  outer();

function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // 10 (ไม่ควรเห็นแต่ยังเห็น)
  }
  
  testVar();

function testLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); // ❌ Error! (ใช้ข้างนอกไม่ได้)
  }
  
  testLet();
  