// สร้างตัวแปร x และ y ที่เป็นเลขสุ่ม
const x = Math.floor(Math.random() * 100) + 1;
const y = Math.floor(Math.random() * 50) + 1;

// คำนวณผลลัพธ์ของการดำเนินการทางคณิตศาสตร์
const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;

// สร้างสตริงผลลัพธ์
const sumOutput = `${x} + ${y} = ${sum}`;
const differenceOutput = `${x} - ${y} = ${difference}`;
const productOutput = `${x} * ${y} = ${product}`;
const quotientOutput = `${x} / ${y} = ${quotient}`;
const rmOutput = `${x} % ${y} = ${remainder}`;

// แสดงผลลัพธ์
console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
