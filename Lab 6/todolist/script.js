const form = document.querySelector("#add-task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    if (taskText.length > 50) {
        alert("Task cannot be more than 50 characters.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    };

    tasks.push(newTask);
    taskInput.value = ""; // Clear input field
    renderTasks();
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter((task) => task.id !== id);
        renderTasks();
    }
}

function toggleTaskCompletion(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = ""; // Clear current list

    tasks.forEach((task) => {
        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        const taskDeleteButton = document.createElement("button");
        const taskCheckbox = document.createElement("input");

        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener("click", () => toggleTaskCompletion(task.id));

        taskText.textContent = task.text;
        if (task.completed) {
            taskText.style.textDecoration = "line-through";
            taskItem.classList.add("completed");
        }

        taskDeleteButton.textContent = "Delete";
        taskDeleteButton.addEventListener("click", () => deleteTask(task.id));

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(taskDeleteButton);

        taskList.appendChild(taskItem);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
});

renderTasks();
