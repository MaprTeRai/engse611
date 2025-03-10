document.getElementById('addItemButton').addEventListener('click', function() {
    let newDiv = document.createElement('div');  // Create a new div element
    newDiv.textContent = 'This is a dynamically added div!';  // Set its text
    newDiv.style.backgroundColor = 'lightblue';  // Add some styling
    newDiv.style.padding = '10px';  // Add padding

    let container = document.getElementById('container');  // Select the parent container
    container.appendChild(newDiv);  // Append the new div to the container
});
