console.log(new Date()); 
console.log(new Date(2025, 2, 3)); 
console.log(new Date("2025-03-03T12:00:00Z")); 
console.log(new Date(0)); 

let now = new Date();
console.log(now.getFullYear()); 
console.log(now.getMonth()); 
console.log(now.getDate()); 
console.log(now.getDay()); 
console.log(now.getHours(), now.getMinutes(), now.getSeconds()); 
console.log(now.getMilliseconds()); 
console.log(now.getTime()); 

let d = new Date();
d.setFullYear(2030);
d.setMonth(11); 
d.setDate(25);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(15);
console.log(d);

let d1 = new Date("2025-03-03");
let d2 = new Date("2024-12-31");

console.log(d1 > d2);
console.log(d1 - d2); 

console.log(now.toDateString()); 
console.log(now.toTimeString()); 
console.log(now.toISOString()); 
console.log(now.toUTCString()); 
console.log(now.toLocaleString()); 
