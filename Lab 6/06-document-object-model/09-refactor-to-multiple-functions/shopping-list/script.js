// Create new item
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  button.addEventListener('click', () => {
    li.remove(); // Remove the item when clicked
  });

  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}

// Create button with icon
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

// Create icon for the button
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Add new items
createNewItem('Cheese');
createNewItem('Sauce');

// Handle form submission to add items dynamically
const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const itemText = itemInput.value.trim();
  if (itemText !== '') {
    createNewItem(itemText); // Add new item to the list
    itemInput.value = ''; // Clear input field
  }
});

// Handle the 'Clear All' button to remove all items
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  document.querySelector('.items').innerHTML = ''; // Clear all items from the list
});
