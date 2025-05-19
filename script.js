const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskTime = document.getElementById('task-time');
  const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (taskText && taskDateTime) {
    addTask(taskText, taskDateTime);
    taskInput.value = '';
    taskTime.value = '';
  }
});

function addTask(text, datetime) {
  const li = document.createElement('li');

  const taskContent = document.createElement('div');
  taskContent.innerHTML = `<strong>${text}</strong><br><small>${new Date(datetime).toLocaleString()}</small>`;

  const controls = document.createElement('div');
  controls.className = 'task-controls';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✅';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt("Edit Task:", text);
    if (newTask) taskContent.innerHTML = `<strong>${newTask}</strong><br><small>${new Date(datetime).toLocaleString()}</small>`;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => li.remove();

  controls.append(completeBtn, editBtn, deleteBtn);
  li.append(taskContent, controls);
  taskList.appendChild(li);
}
