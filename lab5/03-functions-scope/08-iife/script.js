(function () {
    console.log("Hello from IIFE!");
  })(); 
  // "Hello from IIFE!"

((name) => {
    console.log(`Hello, ${name}!`);
})("Alice");
// "Hello, Alice!"
 
(async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json());
    console.log(data);
  })();
  