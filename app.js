function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('ion-item');
        taskItem.innerHTML = `
            <ion-label>${taskText}</ion-label>
            <ion-button fill="clear" slot="end" onclick="removeTask(this)">Eliminar</ion-button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        saveTasks();
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list ion-item ion-label').forEach(label => {
        tasks.push(label.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    tasks.forEach(taskText => {
        const taskItem = document.createElement('ion-item');
        taskItem.innerHTML = `
            <ion-label>${taskText}</ion-label>
            <ion-button fill="clear" slot="end" onclick="removeTask(this)">Eliminar</ion-button>
        `;
        taskList.appendChild(taskItem);
    });
}

document.addEventListener('DOMContentLoaded', loadTasks);
