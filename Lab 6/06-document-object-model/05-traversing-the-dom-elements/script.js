let output;

// Get child elements from a parent
const parent = document.querySelector('.parent');

output = parent.children; // Accessing all child elements of the parent div

output = parent.children[1].innerText; // Get the innerText of the second child
output = parent.children[1].className; // Get the className of the second child
output = parent.children[1].nodeName; // Get the nodeName of the second child

// Modifying the second child's text and style
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

// Modifying the first and last child text
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement; // Accessing the parent element of the child
child.parentElement.style.border = '1px solid #ccc'; // Adding a border to the parent
child.parentElement.style.padding = '10px'; // Adding padding to the parent

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem; // Select the second child element
output = secondItem.nextElementSibling; // Get the next sibling element

secondItem.nextElementSibling.style.color = 'green'; // Change color of the next sibling
secondItem.previousElementSibling.style.color = 'orange'; // Change color of the previous sibling

console.log(output); // Output the final result
