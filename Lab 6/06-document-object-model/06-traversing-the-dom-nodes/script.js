let output;

// Get child nodes
const parent = document.querySelector('.parent');

output = parent.childNodes; // Get all child nodes (including text nodes)
output = parent.childNodes[0].textContent; // Get text content of the first child node (may include text nodes)
output = parent.childNodes[0].nodeName; // Get node name of the first child
output = parent.childNodes[3].textContent; // Get text content of the 4th node (might be a whitespace/text node)
output = parent.childNodes[3].outerHTML; // Get outer HTML of the 4th node (might be a whitespace/text node)

// Modify text content and style of specific child nodes
parent.childNodes[3].innerText = 'Child One'; // Set new text to the node
parent.childNodes[5].style.color = 'red'; // Set color for the 6th node

// Accessing first and last child nodes
output = parent.firstChild; // First child node (may include text nodes)
output = parent.lastChild; // Last child node (may include text nodes)

parent.lastChild.textContent = 'Hello'; // Modify last node's text content

// Get parent node
const child = document.querySelector('.child');

output = child.parentNode; // Get the parent node
output = child.parentElement; // Get the parent element

// Style the parent node
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling; // Next sibling (could be text node)
output = secondItem.previousSibling; // Previous sibling (could be text node)

console.log(output);
