/*while (condition) {
  // คำสั่งที่ต้องการให้ทำซ้ำ
}
*/

let i = 1;
while (i <= 5) {
  console.log(i);
  i++; // เพิ่มค่า i
}
/* Output:
1
2
3
4
5
*/

let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
/* Output:
2
4
6
8
10
*/

/*do {
    // คำสั่งที่ต้องการให้ทำซ้ำ
  } while (condition);
*/

let e = 1;
do {
  console.log(e);
  e++;
} while (e <= 5);
/* Output:
1
2
3
4
5
*/

let x = 10;

while (x < 5) {
  console.log("This will not run"); // ❌ ไม่ทำงาน เพราะเงื่อนไขเป็น false ตั้งแต่แรก
}

do {
  console.log("This runs at least once!"); // ✅ ทำงานรอบแรกก่อนเช็คเงื่อนไข
} while (x < 5);
/* Output:
This runs at least once!
*/

let a = 1;
while (a <= 10) {
  if (a === 5) {
    break; // หยุดลูปเมื่อ i = 5
  }
  console.log(i);
  a++;
}
/* Output:
1
2
3
4
*/

/*let t = 0;
while (t < 5) {
  t++;
  if (t === 3) {
    continue; // ข้ามรอบที่ i = 3
  }
  console.log(t);
}
 Output:
1
2
4
5
*/