let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

let age1 = 16;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let age2 = 20;
let message = age2 >= 18 ? "Adult" : "Minor";

console.log(message); // "Adult"

let age3 = 18;
let hasID = true;

if (age3 >= 18) {
  if (hasID) {
    console.log("You can enter.");
  } else {
    console.log("You need an ID.");
  }
} else {
  console.log("You are too young.");
}
