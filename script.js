document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-task-btn').addEventListener('click', () => addTask('task-input', 'task-list'));
  document.getElementById('save-note-btn').addEventListener('click', saveNote);
  document.getElementById('add-password-btn').addEventListener('click', addPassword);

  showTaskInput();
  showGoalInput();

  
  loadTasks();
  loadGoals();
});

function showTaskInput() {
  const taskType = document.getElementById('task-type').value;
  document.getElementById('weekly-task').style.display = 'none';
  document.getElementById('monthly-task').style.display = 'none';
  document.getElementById('yearly-task').style.display = 'none';
  document.getElementById(`${taskType}-task`).style.display = 'block';
}

function showGoalInput() {
  const goalType = document.getElementById('goal-type').value;
  document.getElementById('weekly-goal').style.display = 'none';
  document.getElementById('monthly-goal').style.display = 'none';
  document.getElementById('yearly-goal').style.display = 'none';
  document.getElementById(`${goalType}-goal`).style.display = 'block';
}

function addTask(inputId, listId) {
  const input = document.getElementById(inputId);
  const task = input.value.trim();
  if (task) {
      const list = document.getElementById(listId);
      const listItem = document.createElement('li');
      listItem.innerText = task;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => {
          listItem.remove();
          saveTasks();
      });

      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);

      saveTasks();

      input.value = '';
  }
}

function saveNote() {
  const input = document.getElementById('note-input');
  const note = input.value.trim();
  if (note) {
      const list = document.getElementById('note-list');
      const listItem = document.createElement('li');
      listItem.innerText = note;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => listItem.remove());

      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);

      input.value = '';
  }
}

function addGoal(inputId, listId) {
  const input = document.getElementById(inputId);
  const goal = input.value.trim();
  if (goal) {
      const list = document.getElementById(listId);
      const listItem = document.createElement('li');
      listItem.innerText = goal;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => {
          listItem.remove();
          saveGoals();
      });

      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);

      saveGoals();

      input.value = '';
  }
}

function addPassword() {
  const website = document.getElementById('website-input').value.trim();
  const username = document.getElementById('username-input').value.trim();
  const password = document.getElementById('password-input').value.trim();
  if (website && username && password) {
      const list = document.getElementById('password-list');
      const listItem = document.createElement('li');
      listItem.innerText = `Website: ${website}, Username: ${username}, Password: ${password}`;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => listItem.remove());

      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);

      document.getElementById('website-input').value = '';
      document.getElementById('username-input').value = '';
      document.getElementById('password-input').value = '';
  }
}


function saveTasks() {
  const tasks = [];
  const taskList = document.getElementById('task-list');
  taskList.querySelectorAll('li').forEach((item) => {
      tasks.push(item.innerText.replace('Delete', '').trim());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('task-list');
  tasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.innerText = task;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => {
          listItem.remove();
          saveTasks();
      });

      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
  });
}


function saveGoals() {
  const goals = [];
  const goalList = document.getElementById('goal-list');
  goalList.querySelectorAll('li').forEach((item) => {
      goals.push(item.innerText.replace('Delete', '').trim());
  });
  localStorage.setItem('goals', JSON.stringify(goals));
}


function loadGoals() {
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  const goalList = document.getElementById('goal-list');
  goals.forEach((goal) => {
      const listItem = document.createElement('li');
      listItem.innerText = goal;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('deletebtn');
      deleteBtn.addEventListener('click', () => {
          listItem.remove();
          saveGoals();
      });

      listItem.appendChild(deleteBtn);
      goalList.appendChild(listItem);
  });
}
