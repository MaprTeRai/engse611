const user = 'Brad';
console.log(user);

(() => {
    console.log("Arrow Function IIFE");
  })();
  
(() => {
    let secret = "This is hidden";
    console.log(secret);
})();
  
// console.log(secret); // ❌ Error! ใช้ข้างนอกไม่ได้