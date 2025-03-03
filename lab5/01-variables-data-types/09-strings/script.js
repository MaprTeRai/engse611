// การประกาศ String
let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

// การเชื่อม String
let message = str1 + " " + str2; 
let template = `${str1}, ${str2}!`;

// การเข้าถึงตัวอักษร
console.log(str1[0]); 
console.log(str2.charAt(1)); 

// ความยาวของ String
console.log(str3.length); 

// การเปลี่ยนเป็นตัวใหญ่-เล็ก
console.log(str3.toUpperCase()); 
console.log(str3.toLowerCase()); 

// การตัดช่องว่าง
let str4 = "  trim me  ";
console.log(str4.trim()); 

// การแทนที่ข้อความ
console.log(str3.replace("Java", "Type")); 

// การแยก String
console.log("apple,banana,grape".split(",")); 

// ตรวจสอบข้อความใน String
console.log(str3.includes("Java")); 
console.log(str3.startsWith("Java")); 
console.log(str3.endsWith("Script")); 