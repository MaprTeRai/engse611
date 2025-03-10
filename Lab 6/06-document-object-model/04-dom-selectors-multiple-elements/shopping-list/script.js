// Selecting all items using querySelectorAll
const listItems = document.querySelectorAll('.item');

// Loop through each item and perform some operations
listItems.forEach((item, index) => {
  item.style.color = 'blue'; // Change text color for each item
  item.querySelector('.remove-item').addEventListener('click', function() {
    item.remove(); // Remove item from the list when clicked
  });

  if (index === 2) {
    item.style.fontWeight = 'bold'; // Make the third item bold
  }
});

// Add event listener for the 'Clear List' button
document.getElementById('clear').addEventListener('click', function() {
  const allItems = document.querySelectorAll('.item');
  allItems.forEach(item => item.remove()); // Remove all items
});
