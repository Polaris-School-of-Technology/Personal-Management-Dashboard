document.addEventListener('DOMContentLoaded', () => {
  // Event listeners for buttons
  document.getElementById('add-task-btn').addEventListener('click', () => addTask('task-input', 'task-list'));
  document.getElementById('save-note-btn').addEventListener('click', saveNote);
  document.getElementById('add-password-btn').addEventListener('click', addPassword);
  document.getElementById('add-goal-btn').addEventListener('click', () => addGoal('goal-input', 'goal-list'));

  showTaskInput();
  showGoalInput();

  loadTasks();  // Load tasks from localStorage
  loadGoals();  // Load goals from localStorage
});

// Task category selection
function showTaskInput() {
  const taskType = document.getElementById('task-type').value;
  document.getElementById('weekly-task').style.display = 'none';
  document.getElementById('monthly-task').style.display = 'none';
  document.getElementById('yearly-task').style.display = 'none';
  document.getElementById(`${taskType}-task`).style.display = 'block';
}

// Goal category selection
function showGoalInput() {
  const goalType = document.getElementById('goal-type').value;
  document.getElementById('weekly-goal').style.display = 'none';
  document.getElementById('monthly-goal').style.display = 'none';
  document.getElementById('yearly-goal').style.display = 'none';
  document.getElementById(`${goalType}-goal`).style.display = 'block';
}

// Add task
function addTask(inputId, listId) {
  const input = document.getElementById(inputId);
  const task = input.value.trim();
  if (task) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(listItem);
    editbtn(listItem);
    list.appendChild(listItem);
    saveTasks();  // Save tasks after adding new task
    input.value = '';
  }
}

// Add goal
function addGoal(inputId, listId) {
  const input = document.getElementById(inputId);
  const goal = input.value.trim();
  if (goal) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${goal}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(listItem);
    editbtn(listItem);
    list.appendChild(listItem);
    saveGoals();  // Save goals after adding new goal
    input.value = '';
  }
}

// Save note
function saveNote() {
  const input = document.getElementById('note-input');
  const note = input.value.trim();
  if (note) {
    const list = document.getElementById('note-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${note}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(listItem);
    editbtn(listItem);
    list.appendChild(listItem);
    input.value = '';
  }
}

// Add password
function addPassword() {
  const website = document.getElementById('website-input').value.trim();
  const username = document.getElementById('username-input').value.trim();
  const password = document.getElementById('password-input').value.trim();

  if (website && username && password) {
    const list = document.getElementById('password-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `Website: ${website}, Username: ${username}, Password: ${password}`;

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

// delete button functionality
function deletebtn(element) {
  const deleteBtn = element.querySelector('.deletebtn');
  deleteBtn.addEventListener('click', function () {
    if (confirm("Are you sure you want to delete this item?")) {
      element.remove();
      saveTasks();
      saveGoals();
    }
  });
}

// edit button functionality
function editbtn(element) {
  const editBtn = element.querySelector('.editbtn');
  editBtn.addEventListener('click', function () {
    const textSpan = element.querySelector('span:nth-child(2)') || element.querySelector('span');
    const editedText = prompt("Edit your item:", textSpan.textContent);
    if (editedText !== null && editedText.trim() !== "") {
      textSpan.textContent = editedText;
    }
  });
}

// Toggle password visibility
const passwordInput = document.getElementById('password-input');
const togglePasswordVisibilityIcon = document.querySelector('[data-toggle-password]');
togglePasswordVisibilityIcon.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordVisibilityIcon.classList.remove('fa-eye');
    togglePasswordVisibilityIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    togglePasswordVisibilityIcon.classList.remove('fa-eye-slash');
    togglePasswordVisibilityIcon.classList.add('fa-eye');
  }
});

// Save tasks to localStorage
function saveTasks() {
  const tasks = {
    weekly: [],
    monthly: [],
    yearly: []
  };

  // Collect tasks
  document.querySelectorAll('#weekly-task-list li').forEach(item => tasks.weekly.push(item.innerText));
  document.querySelectorAll('#monthly-task-list li').forEach(item => tasks.monthly.push(item.innerText));
  document.querySelectorAll('#yearly-task-list li').forEach(item => tasks.yearly.push(item.innerText));

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Save goals to localStorage
function saveGoals() {
  const goals = {
    weekly: [],
    monthly: [],
    yearly: []
  };

  // Collect goals
  document.querySelectorAll('#weekly-goal-list li').forEach(item => goals.weekly.push(item.innerText));
  document.querySelectorAll('#monthly-goal-list li').forEach(item => goals.monthly.push(item.innerText));
  document.querySelectorAll('#yearly-goal-list li').forEach(item => goals.yearly.push(item.innerText));

  localStorage.setItem('goals', JSON.stringify(goals));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || { weekly: [], monthly: [], yearly: [] };

  // Populate task lists
  tasks.weekly.forEach(task => addTaskToList('weekly-task-list', task));
  tasks.monthly.forEach(task => addTaskToList('monthly-task-list', task));
  tasks.yearly.forEach(task => addTaskToList('yearly-task-list', task));
}

function loadGoals() {
  const goals = JSON.parse(localStorage.getItem('goals')) || { weekly: [], monthly: [], yearly: [] };

  goals.weekly.forEach(goal => addGoalToList('weekly-goal-list', goal));
  goals.monthly.forEach(goal => addGoalToList('monthly-goal-list', goal));
  goals.yearly.forEach(goal => addGoalToList('yearly-goal-list', goal));
}

function addTaskToList(listId, task) {
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
}

function addGoalToList(listId, goal) {
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
}
darkBtn.onclick=function(){
  document.body.classList.toggle('darkTheme');
  if (document.body.classList.contains('darkTheme')) {
    darkBtn.textContent = 'Light Mode';
  } else {
    darkBtn.textContent = 'Dark Mode';
}
}
