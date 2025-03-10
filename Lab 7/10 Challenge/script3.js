let button = document.getElementById("toggleClassButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    
    // Toggle the class and change the font size
    paragraph.classList.toggle("new-class");
    paragraph.style.fontSize = "20px";
    console.log("Class toggled!");
});
