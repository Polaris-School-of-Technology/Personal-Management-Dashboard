document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskDueDate = document.getElementById('task-due-date');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "" && taskDueDate.value) {
    const newTask = document.createElement('li');
    newTask.textContent = `${taskInput.value} - Due: ${taskDueDate.value}`;
    taskList.appendChild(newTask);
    taskInput.value = '';
    taskDueDate.value = '';
    updateTaskCount();
    sortTasksByDueDate();
  }
});

document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
    const newNote = document.createElement('li');
    newNote.textContent = noteInput.value;
    noteList.appendChild(newNote);
    noteInput.value = '';
  }
});

document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  if (goalInput.value.trim() !== "") {
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput.value;
    goalList.appendChild(newGoal);
    goalInput.value = ''; 
  }
});

document.getElementById('task-count-btn').addEventListener('click', updateTaskCount);

function updateTaskCount() {
  const taskList = document.getElementById('task-list');
  const taskCount = taskList.children.length;
  document.getElementById('task-count').textContent = `Total Tasks: ${taskCount}`;
}

function sortTasksByDueDate() {
  const taskList = document.getElementById('task-list');
  const tasks = Array.from(taskList.children);
  tasks.sort((a, b) => {
      const dateA = new Date(a.textContent.split(' - Due: ')[1]);
      const dateB = new Date(b.textContent.split(' - Due: ')[1]);
      return dateA - dateB;
  });
  taskList.innerHTML = '';
  tasks.forEach(task => taskList.appendChild(task));
}
