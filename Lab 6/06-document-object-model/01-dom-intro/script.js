// เลือกองค์ประกอบจาก HTML
const introText = document.getElementById("intro");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const box = document.getElementById("box");

// เพิ่ม event เมื่อกดปุ่ม "Change Text"
changeTextBtn.addEventListener("click", function() {
    introText.textContent = "The DOM allows JavaScript to interact with HTML!";
});

// เพิ่ม event เมื่อกดปุ่ม "Change Color"
changeColorBtn.addEventListener("click", function() {
    box.style.backgroundColor = "tomato"; // เปลี่ยนสีพื้นหลังเป็นสีแดง
    box.style.color = "white"; // เปลี่ยนสีตัวอักษรเป็นขาว
    box.textContent = "Color Changed!";
});
