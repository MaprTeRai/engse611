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

let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter.");
  } else {
    console.log("You need an ID.");
  }
} else {
  console.log("You are too young.");
}

let userType = "admin";
let isLoggedIn = true;

if (isLoggedIn) {
  if (userType === "admin") {
    console.log("Welcome, Admin!");
  } else if (userType === "member") {
    console.log("Welcome, Member!");
  } else {
    console.log("Welcome, Guest!");
  }
} else {
  console.log("Please log in.");
}
