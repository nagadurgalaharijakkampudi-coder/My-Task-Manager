let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');
        li.innerHTML = `
            <span onclick="toggleTask(${index})" style="cursor:pointer; flex:1;">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text === '') { alert('Please enter a task!'); return; }
    tasks.push({ text: text, completed: false });
    input.value = '';
    displayTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
displayTasks();
