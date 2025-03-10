// Get elements
const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const filterInput = document.getElementById('filter');

// Add new item to the list
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get item text
  const itemText = itemInput.value.trim();
  if (itemText === '') return; // Avoid adding empty items

  // Create new list item
  const li = document.createElement('li');
  li.textContent = itemText;

  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-item btn-link text-red';
  removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // Append the button to the list item
  li.appendChild(removeButton);

  // Append the list item to the item list
  itemList.appendChild(li);

  // Clear input field after adding the item
  itemInput.value = '';
});

// Remove item from the list
itemList.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-item')) {
    e.target.parentElement.remove();
  }
});

// Filter items based on user input
filterInput.addEventListener('input', function (e) {
  const filterText = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('li');
  
  items.forEach(function (item) {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(filterText)) {
      item.style.display = 'flex'; // Show item
    } else {
      item.style.display = 'none'; // Hide item
    }
  });
});

// Clear all items
clearButton.addEventListener('click', function () {
  itemList.innerHTML = ''; // Clear the entire list
});
