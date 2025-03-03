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

let d = new Date();
d.setFullYear(2030);
d.setMonth(11); 
d.setDate(25);
console.log(d);

let d1 = new Date("2025-03-03");
let d2 = new Date("2024-12-31");

console.log(d1 > d2); 
console.log(d1 - d2); 

console.log(now.toDateString()); 
console.log(now.toTimeString()); 
console.log(now.toISOString()); 
