function change() {
    let elements = document.querySelectorAll("#main p"); // เลือก <p> ทั้งหมดใน <div id="main">
    elements.forEach(p => {
        p.style.color = "red"; // เปลี่ยนสีตัวอักษรเป็นสีแดง
        p.style.fontSize = "24px"; // ปรับขนาดตัวอักษรเป็น 24px
    });
}

// เรียกฟังก์ชันทันทีเมื่อหน้าเว็บโหลดเสร็จ
window.onload = change;
