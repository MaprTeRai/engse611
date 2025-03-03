let fruits = ["Apple", "Banana", "Cherry"]; 
let numbers = new Array(10, 20, 30); 
let emptyArray = []; 

console.log(fruits[0]); 
console.log(fruits.length); 
console.log(fruits[fruits.length - 1]); 

fruits.push("Mango"); 
fruits.unshift("Grape"); 

fruits.pop(); 
fruits.shift(); 

console.log(fruits.indexOf("Banana")); 
console.log(fruits.includes("Mango")); 

fruits.forEach(fruit => console.log(fruit)); 
for (let fruit of fruits) console.log(fruit); 

let newFruits = fruits.slice(1, 3); 
let combined = fruits.concat(["Mango", "Pineapple"]); 
