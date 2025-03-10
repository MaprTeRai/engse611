// Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

  // Add remove functionality
  li.querySelector('.remove-item').addEventListener('click', () => {
    li.remove();
  });

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  // Add remove functionality
  button.addEventListener('click', () => {
    li.remove();
  });

  document.querySelector('.items').appendChild(li);
}

// Adding new items
createListItem('Eggs');
createNewItem('Cheese');

// Handling form submission to add items dynamically
const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const itemText = itemInput.value.trim();
  if (itemText !== '') {
    createNewItem(itemText);
    itemInput.value = ''; // Clear input field
  }
});

// Handle clear all items
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  document.querySelector('.items').innerHTML = ''; // Clear all items from the list
});
