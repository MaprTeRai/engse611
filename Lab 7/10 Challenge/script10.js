let button = document.getElementById("startAnimation");
let square = document.getElementById("square");

button.addEventListener("click", function() {
    square.classList.toggle("animate");
});
