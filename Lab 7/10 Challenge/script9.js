// Selecting the data container element
let dataContainer = document.getElementById("dataContainer");

// Fetching data and updating the DOM
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            // Creating a new div element for each post
            let postElement = document.createElement("div");
            postElement.classList.add("post");
            
            // Creating title and body elements
            let title = document.createElement("h3");
            title.textContent = post.title;
            let body = document.createElement("p");
            body.textContent = post.body;
            
            // Appending title and body to the post element
            postElement.appendChild(title);
            postElement.appendChild(body);
            
            // Appending the post element to the data container
            dataContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
