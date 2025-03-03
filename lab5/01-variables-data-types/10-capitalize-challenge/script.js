const myString = 'developer';

// วิธีที่ 1: ใช้ charAt() และ substring()
const myNewString1 = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString1); // 'Developer'

// วิธีที่ 2: ใช้ index `[0]` แทน charAt()
const myNewString2 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString2); // 'Developer'

// วิธีที่ 3: ใช้ slice()
const myNewString3 = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString3); // 'Developer'

// วิธีที่ 4: ใช้ template literals
const myNewString4 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString4); // 'Developer'

// วิธีที่ 5: ใช้ replace() กับ regex (เปลี่ยนเฉพาะตัวแรกของ string)
const myNewString5 = myString.replace(/^./, (char) => char.toUpperCase());
console.log(myNewString5); // 'Developer'
