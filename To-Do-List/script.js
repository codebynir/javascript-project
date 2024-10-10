
// html references of elements 
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let taskContainer = document.getElementById("task-show");

// Load tasks on page loads
loadTasks();

// ADD TASK Function
btn.addEventListener("click", function addTask() {
    if (inp.value === "") {
        inp.classList.add("error");
    } else {
      //remove error class
        inp.classList.remove("error");

        // Create a new task div
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-show");

        // Create the task input element
        let createTask = document.createElement("input");
        createTask.classList.add("task-inp");
        createTask.value = inp.value;//user input in task input
        createTask.setAttribute("readonly", true);//first i`ll readable

        // Create delete button
        let delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        delBtn.innerHTML = `<img src="delete.png" alt="delete" height="26px" width="26px">`;

        // Create edit button
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.innerHTML = `<img src="edit.png" alt="edit" height="27px" width="27px"></img>`;

        // Append the input and buttons to the task div
        taskDiv.append(createTask, delBtn, editBtn);
        taskContainer.append(taskDiv);

        // Clear the input field
        inp.value = "";

        // Save tasks to localStorage
        saveTasks();

        // Toggle edit mode on click
        editBtn.addEventListener("click", function() {
            if (createTask.hasAttribute("readonly")) {
                createTask.removeAttribute("readonly"); //now input editable
                editBtn.innerHTML = `<img src="save.png" alt="save" height="27px" width="27px"></img>`; 
            } else {
                createTask.setAttribute("readonly", true); // Make input read-only again
                editBtn.innerHTML = `<img src="edit.png" alt="edit" height="27px" width="27px"></img>`; // Change button icon back to "Edit"
                saveTasks(); // Save tasks after edit task
            }
        });

        // Delete task
        delBtn.addEventListener("click", function() {
            taskContainer.removeChild(taskDiv);
            saveTasks(); // Save tasks after deletetion of any task
        });
    }
});

// Function to save tasks to localStorage
function saveTasks() {
    const taskDivs = taskContainer.children;//access all children 
    const tasks = [];//empty array i`ll store at last 

    for (let i = 0; i < taskDivs.length; i++) {
        const taskInput = taskDivs[i].querySelector('.task-inp');
        tasks.push(taskInput.value);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage becoz local storage only stores data not UI elemnts so we need to recreate all with upcoming data 
function loadTasks() {
  //first take data in a variable
    const tasksString = localStorage.getItem('tasks');
  //if any data exists
    if (tasksString) {
        const tasks = JSON.parse(tasksString);//convert it into JSON data & store

        tasks.forEach(task => {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-show");

            let createTask = document.createElement("input");
            createTask.classList.add("task-inp");
            createTask.value = task;//comes from localstorage
            createTask.setAttribute("readonly", true);

            let delBtn = document.createElement("button");
            delBtn.classList.add("delete-btn");
            delBtn.innerHTML = `<img src="delete.png" alt="delete" height="26px" width="26px">`;

            let editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.innerHTML = `<img src="edit.png" alt="edit" height="27px" width="27px"></img>`;

            taskDiv.append(createTask, delBtn, editBtn);
            taskContainer.append(taskDiv);

            // Toggle edit mode on click
            editBtn.addEventListener("click", function() {
                if (createTask.hasAttribute("readonly")) {
                    createTask.removeAttribute("readonly");
                    editBtn.innerHTML = `<img src="save.png" alt="save" height="27px" width="27px"></img>`;
                } else {
                    createTask.setAttribute("readonly", true);
                    editBtn.innerHTML = `<img src="edit.png" alt="edit" height="27px" width="27px"></img>`;
                    saveTasks();
                }
            });

            // Delete task
            delBtn.addEventListener("click", function() {
                taskContainer.removeChild(taskDiv);
                saveTasks();
            });
        });
    }
}
