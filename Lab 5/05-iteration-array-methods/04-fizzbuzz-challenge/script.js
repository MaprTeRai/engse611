for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let i = 1;
while (i <= 100) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}

console.log(
  [...Array(100)].map((_, i) =>
    (++i % 15 === 0) ? "FizzBuzz" :
    (i % 3 === 0) ? "Fizz" :
    (i % 5 === 0) ? "Buzz" : i
  ).join("\n")
);
