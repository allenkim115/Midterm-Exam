// Array to store tasks
let tasks = [];

// Function to create a new task
function addTask(name, description) {
    const task = {
        id: tasks.length + 1, // Simple ID generation
        name: name,
        description: description
    };
    tasks.push(task);
    console.log(`Task added: ${task.name}`);
}

// Function to read all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

// Function to update an existing task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated: ${task.name}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${deletedTask[0].name}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example usage:
addTask("Task 1", "This is the first task");
addTask("Task 2", "This is the second task");
viewTasks();

updateTask(1, "Updated Task 1", "Updated description for task 1");
viewTasks();

deleteTask(2);
viewTasks();
