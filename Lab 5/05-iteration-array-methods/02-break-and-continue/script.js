let i = 1;
while (i <= 5) {
  if (i === 4) {
    break; // หยุดลูปเมื่อ i = 4
  }
  console.log(i);
  i++;
}
/* Output:
1
2
3
*/
/*let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue; // ข้ามรอบที่ i = 3
  }
  console.log(i);
}
 Output:
1
2
4
5
*/
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (j === 2) {
        break; // หยุดลูป j เมื่อ j = 2
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
  /* Output:
  i = 1, j = 1
  i = 2, j = 1
  i = 3, j = 1
  */

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j % 2 === 0) {
      continue; // ข้ามค่าที่ j เป็นเลขคู่
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
Output:
i = 1, j = 1
i = 1, j = 3
i = 2, j = 1
i = 2, j = 3
i = 3, j = 1
i = 3, j = 3