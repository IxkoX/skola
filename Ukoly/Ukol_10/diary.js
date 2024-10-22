document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const taskList = document.getElementById("taskList");

    let tasks = [];

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = {
            text: taskInput.value,
            deadline: deadlineInput.value,
            completed: false,
        };
        tasks.push(task);
        taskForm.reset();
        renderTasks();
    });

    function renderTasks() {
        taskList.innerHTML = "";
        const sortedTasks = tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        sortedTasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.className = `task ${task.completed ? 'completed' : ''}`;

            taskDiv.innerHTML = `
                <span>${task.text} - ${task.deadline}</span>
                <button onclick="toggleComplete(${index})">${task.completed ? 'Označit jako nevyřízené' : 'Označit jako splněné'}</button>
                <button onclick="deleteTask(${index})">Smazat</button>
            `;
            taskList.appendChild(taskDiv);
        });
    }

    window.toggleComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };
});
