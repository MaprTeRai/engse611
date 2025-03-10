function first() {
    console.log("First");
    second();
  }
  
  function second() {
    console.log("Second");
    third();
  }
  
  function third() {
    console.log("Third");
  }
  
  first();
  console.log("Done!");

function recursive(n) {
    if (n === 0) return;
    console.log("Counting:", n);
    recursive(n - 1);
  }
  
recursive(5); // ✅ หยุดเมื่อ n === 0

/*function recursive() {
    console.log("Looping...");
    recursive(); // ❌ ไม่มีเงื่อนไขหยุด
  }
  
  recursive(); // ❌ Stack Overflow
*/