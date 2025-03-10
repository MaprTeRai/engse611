// Selecting the required DOM elements
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const filter = document.getElementById("filter");

// Add item function
function addItem(e) {
  e.preventDefault();
  const itemText = itemInput.value.trim();

  if (itemText === "") {
    alert("Please enter an item.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemText;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-item", "btn-link", "text-red");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  li.appendChild(removeBtn);
  itemList.appendChild(li);

  // Clear input field after adding
  itemInput.value = "";
}

// Remove item function
function removeItem(e) {
  if (e.target.classList.contains("remove-item")) {
    e.target.parentElement.remove();
  }
}

// Clear all items
function clearItems() {
  itemList.innerHTML = "";
}

// Filter items
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

// Event listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filter.addEventListener("keyup", filterItems);
