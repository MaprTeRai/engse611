let user = { name: "Alice", age: 30, city: "Bangkok" };

let { name, age } = user;
console.log(name, age); // "Alice" 30

let { name: userName, age: userAge } = user;
console.log(userName, userAge); // "Alice" 30

let { country = "Thailand" } = user;
console.log(country); // "Thailand"

let colors = ["red", "green", "blue"];

let [first, second] = colors;
console.log(first, second); // "red" "green"

let [,, third] = colors;
console.log(third); // "blue"

let [one, two, three = "yellow"] = ["red", "green"];
console.log(three); // "yellow"
