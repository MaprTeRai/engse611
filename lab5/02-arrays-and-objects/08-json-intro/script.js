let jsonStr = '{"name":"Alice","age":25}';
let obj = JSON.parse(jsonStr);
console.log(obj.name); // "Alice"

let person = { name: "Bob", age: 30 };
let json = JSON.stringify(person);
console.log(json); // '{"name":"Bob","age":30}'
