console.log(x); // ❌ undefined (Hoisting)
var x = 10;
console.log(x); // ✅ 10

function greet() {
    var name = "Alice";
    console.log("Hello, " + name);
  }
  
  greet();
  console.log(name); // ❌ Error! (name อยู่ใน Function Scope)

function first() {
    console.log("First");
    second();
  }
  
function second() {
    console.log("Second");
  }
  
  first();
console.log("Done!");