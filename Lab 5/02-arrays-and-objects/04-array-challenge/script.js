const arr = [1, 2, 3, 4, 5];

arr.unshift(0);  // เพิ่ม 0 ไปที่หน้าสุดของอาร์เรย์
arr.push(6);     // เพิ่ม 6 ไปที่ท้ายอาร์เรย์
arr.reverse();   // กลับลำดับของอาร์เรย์

console.log(arr); // [6, 5, 4, 3, 2, 1, 0]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// วิธีที่ 1: ใช้ slice() และ concat()
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// วิธีที่ 2: ใช้ spread operator และ splice()
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1); // ลบค่าที่ซ้ำกันที่ตำแหน่ง index 4
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// วิธีที่ 3: ใช้ Set() เพื่อลบค่าซ้ำแบบอัตโนมัติ
const arr5 = [...new Set([...arr1, ...arr2])];
console.log(arr5); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
