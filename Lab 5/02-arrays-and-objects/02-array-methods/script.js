let fruits = ["Apple", "Banana", "Cherry"];

// เพิ่มค่า
fruits.push("Mango"); 
fruits.unshift("Grape"); 

// ลบค่า
fruits.pop();    
fruits.shift();  

console.log(fruits.indexOf("Banana")); 
console.log(fruits.includes("Mango")); 
console.log(fruits.find(fruit => fruit.startsWith("B"))); 
console.log(fruits.findIndex(fruit => fruit.startsWith("B"))); 

let numbers = [10, 20, 30, 40, 50];

// ตัด Array
console.log(numbers.slice(1, 3)); 

// รวม Array
let moreNumbers = [60, 70];
console.log(numbers.concat(moreNumbers)); 

let colors = ["Red", "Green", "Blue"];

// ลบค่า
colors.splice(1, 1); 

// แทรกค่า
colors.splice(1, 0, "Yellow"); 

// แทนที่ค่า
colors.splice(2, 1, "Purple"); 

let nums = [40, 10, 50, 20, 30];

nums.sort((a, b) => a - b);  
nums.sort((a, b) => b - a);  
nums.reverse();  

let numbers2 = [1, 2, 3, 4, 5];

// map → แปลงค่าทั้งหมด
let squared = numbers2.map(num => num ** 2); 

// filter → คัดค่าที่ตรงเงื่อนไข
let evens = numbers2.filter(num => num % 2 === 0); 

// reduce → รวมค่าทั้งหมดเป็นค่าเดียว
let sum = numbers2.reduce((acc, num) => acc + num, 0); 