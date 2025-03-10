// เลือกลิงก์ทั้งหมดใน <nav>
const navLinks = document.querySelectorAll("nav a");

// เพิ่ม event listener ให้กับแต่ละลิงก์
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        alert("clicked!");
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้า
    });
});

// ยกเว้นลิงก์ที่นำไปสู่ Google ไม่ให้มี alert
const googleLink = document.querySelector('a[href="http://google.com"]');
if (googleLink) {
    googleLink.addEventListener("click", function(event) {
        event.stopPropagation(); // ป้องกัน event จาก navigation
    });
}
