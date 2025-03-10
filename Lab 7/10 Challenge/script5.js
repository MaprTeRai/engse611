// Selecting the button element
let button = document.getElementById('removeItemButton');

// Adding an event listener to the button
button.addEventListener('click', function() {
    // Selecting the paragraph element
    let paragraph = document.querySelector('#container p');
    
    // Fade out before removal
    paragraph.style.transition = 'opacity 1s';
    paragraph.style.opacity = 0;
    
    setTimeout(() => {
        paragraph.remove(); // Removing the paragraph after fade-out effect
    }, 1000);
});
