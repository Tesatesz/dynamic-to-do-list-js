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

    // Clear input field
    taskInput.value = "";
}

// Connect addTask function to button click
addButton.addEventListener('click', addTask);

// Load tasks from Local Storage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    document.getElementById('taskForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText, true);
            taskInput.value = '';
        }
    });
});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

function addTask(taskText, save = true) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
        taskList.removeChild(li);
        removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}