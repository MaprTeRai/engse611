//for (initialization; condition; update) {
    // คำสั่งที่ต้องการให้ทำซ้ำ
//  }

for (let i = 1; i <= 5; i++) {
    console.log("รอบที่: " + i);
  }
  /* Output:
  รอบที่: 1
  รอบที่: 2
  รอบที่: 3
  รอบที่: 4
  รอบที่: 5
  */

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum); // 55

let fruits = ["🍎", "🍌", "🍇"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
/* Output:
🍎
🍌
🍇
*/

let numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total); // 100

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // ออกจาก loop เมื่อ i = 3
    }
console.log(i);
  }
  /* Output:
  1
  2
  */
  
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // ข้ามรอบที่ i = 3
    }
console.log(i);
  }
  /* Output:
  1
  2
  4
  5
  */

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`i = ${i}, j = ${j}`);
    }
}
  /* Output:
  i = 1, j = 1
  i = 1, j = 2
  i = 1, j = 3
  i = 2, j = 1
  ...
  i = 3, j = 3
  */