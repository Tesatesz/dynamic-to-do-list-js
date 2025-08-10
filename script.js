// 1️⃣ Select DOM elements
const addButton = document.getElementById('add-task-btn'); // The "Add Task" button
const taskInput = document.getElementById('task-input');   // The input field for tasks
const taskList = document.getElementById('task-list');     // The list to display tasks

// Define the addTask function
function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // If empty, alert the user
    if (taskText === "") {
        alert("Please enter a task.");
        return; // Stop here
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

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


    // Clear input field
    taskInput.value = "";
}

// Add event listeners
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

