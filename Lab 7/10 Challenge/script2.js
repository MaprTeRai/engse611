let button = document.getElementById("applyStyleButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    
    // Change background color and font size
    paragraph.style.backgroundColor = "lightgreen";
    paragraph.style.fontSize = "25px";
    alert("Style has been updated!");
});
