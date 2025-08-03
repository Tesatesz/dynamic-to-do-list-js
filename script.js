document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> and set text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        // ✅ Add class using classList.add
        removeBtn.classList.add('remove-btn');

        // Set remove button behavior
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add elements to DOM
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }

    // Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
