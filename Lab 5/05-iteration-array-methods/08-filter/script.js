/*const newArray = array.filter((item, index, array) => {
    return condition; // เงื่อนไขต้องเป็น true เพื่อเก็บค่าไว้ใน newArray
  });
*/
const numbers1 = [5, 10, 15, 20, 25];

const result = numbers1.filter(num => num > 10);
console.log(result); // Output: [15, 20, 25]

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

const students = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 45 },
    { name: "Charlie", score: 60 }
  ];
  
  const passed = students.filter(student => student.score >= 50);
  console.log(passed);
  /* Output:
  [
    { name: "Alice", score: 80 },
    { name: "Charlie", score: 60 }
  ]
  */
  
const names = ["Anna", "Ben", "Alice", "Tom","AiETE"];

const filteredNames = names.filter(name => name.toLowerCase().includes("a"));
console.log(filteredNames); // Output: ["Anna", "Alice"]
  