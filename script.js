// Select DOM elements
const addButton = document.getElementById('add-task-btn'); // "Add Task" button
const taskInput = document.getElementById('task-input');   // Input field
const taskList = document.getElementById('task-list');     // Task list

// Define the addTask function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn'); // Add CSS class for styling

    // Remove task on click
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Attach event listener to button
addButton.addEventListener('click', addTask);