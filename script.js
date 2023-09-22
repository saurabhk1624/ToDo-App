
// Get references to the input field and task list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from local storage if available
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];



// Function to display tasks
function displayTasks() {
    taskList.innerHTML = "";
    savedTasks.forEach(function (task, index) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button> 
        <button onclick="editTask(${index})">Update</button> `;
        taskList.appendChild(listItem);
    });
}


// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        savedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        taskInput.value = "";
        displayTasks();
    }
}


// Function to delete a task
function deleteTask(index) {
    savedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    displayTasks();
}


//Function to edit task
function editTask(index) {
    const updatedTask = prompt("Edit task:", savedTasks[index]);
    if (updatedTask !== null) {
        savedTasks[index] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        displayTasks();
    }
}


// Initial task display
displayTasks();
