function printOutput(message) {
    let outputDiv = document.getElementById("output");
    let p = document.createElement("p");
    p.textContent = message;
    outputDiv.appendChild(p);
}

console.log("Hello world");
console.log(2 + 9);
console.log("answer = " + (23.96 + 7));

const cat = "อีเต";
let dog;

dog = "อีหื่น";

printOutput("Hello world");
printOutput(2 + 9);
printOutput("answer = " + (23.96 + 7));
printOutput("แมว: " + cat);
printOutput("หมา: " + dog);