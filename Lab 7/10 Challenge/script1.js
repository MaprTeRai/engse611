let button = document.getElementById("updateTextButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    paragraph.textContent = "Updated Text Content";
    alert("Text has been changed!");
});
