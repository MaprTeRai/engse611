// เลือกองค์ประกอบหลักจาก HTML
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const filter = document.getElementById("filter");

// ฟังก์ชันเพิ่มไอเท็มใหม่
function addItem(e) {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    if (itemInput.value.trim() === "") {
        alert("Please enter an item");
        return;
    }

    // สร้าง <li> ใหม่
    const li = document.createElement("li");
    li.textContent = itemInput.value;

    // ปุ่มลบ
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-item", "btn-link", "text-red");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    li.appendChild(removeBtn);
    itemList.appendChild(li);

    // ล้างค่า input
    itemInput.value = "";
}

// ฟังก์ชันลบไอเท็ม
function removeItem(e) {
    if (e.target.parentElement.classList.contains("remove-item")) {
        e.target.parentElement.parentElement.remove();
    }
}

// ฟังก์ชันล้างรายการทั้งหมด
function clearItems() {
    itemList.innerHTML = ""; // ล้างรายการทั้งหมด
}

// ฟังก์ชันกรองไอเท็ม
function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll("li");

    items.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.includes(text)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filter.addEventListener("keyup", filterItems);
