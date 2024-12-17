
window.addEventListener('load', function() {
  loadTasks();
  loadNotes();
  loadGoals();
  loadPasswordItems();
});

// Function to load tasks from localStorage
function loadTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = ''; // Clear existing list
  tasks.forEach(task => {
    const newTask = createTaskElement(task);
    taskList.appendChild(newTask);
  });
}

// Function to load notes from localStorage
function loadNotes() {
  const noteList = document.getElementById('note-list');
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  noteList.innerHTML = ''; // Clear existing list
  notes.forEach(note => {
    const newNote = createNoteElement(note);
    noteList.appendChild(newNote);
  });
}

// Function to load goals from localStorage
function loadGoals() {
  const goalList = document.getElementById('goal-list');
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goalList.innerHTML = ''; // Clear existing list
  goals.forEach(goal => {
    const newGoal = createGoalElement(goal);
    goalList.appendChild(newGoal);
  });
}

// Function to load password items from localStorage
function loadPasswordItems() {
  const passwordList = document.getElementById('password-list');
  const passwordItems = JSON.parse(localStorage.getItem('passwords')) || [];
  passwordList.innerHTML = ''; // Clear existing list
  passwordItems.forEach(passwordItem => {
    const newPasswordItem = createPasswordItemElement(passwordItem);
    passwordList.appendChild(newPasswordItem);
  });
}

// Function to create task element
function createTaskElement(taskText) {
  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <span>${taskText}</span>
    <button class="editbtn">Edit</button>
    <button class="deletebtn">Delete</button>
  `;
  deletebtn(newTask);
  editbtn(newTask);
  return newTask;
}

// Function to create note element
function createNoteElement(noteText) {
  const newNote = document.createElement('li');
  newNote.innerHTML = `
    <span>${noteText}</span>
    <button class="editbtn">Edit</button>
    <button class="deletebtn">Delete</button>
  `;
  deletebtn(newNote);
  editbtn(newNote);
  return newNote;
}

// Function to create goal element
function createGoalElement(goalText) {
  const newGoal = document.createElement('li');
  newGoal.innerHTML = `
    <span>${goalText}</span>
    <button class="editbtn">Edit</button>
    <button class="deletebtn">Delete</button>
  `;
  deletebtn(newGoal);
  editbtn(newGoal);
  return newGoal;
}

// Function to create password item element
function createPasswordItemElement(passwordItemText) {
  const newPasswordItem = document.createElement('li');
  newPasswordItem.textContent = passwordItemText;
  return newPasswordItem;
}

// Task adding functionality
document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "") {
    const taskText = taskInput.value.trim();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

// Note adding functionality
document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
    const noteText = noteInput.value.trim();
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));

    const newNote = createNoteElement(noteText);
    noteList.appendChild(newNote);
    noteInput.value = '';
  }
});

// Goal adding functionality
document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  if (goalInput.value.trim() !== "") {
    const goalText = goalInput.value.trim();
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    goals.push(goalText);
    localStorage.setItem('goals', JSON.stringify(goals));

    const newGoal = createGoalElement(goalText);
    goalList.appendChild(newGoal);
    goalInput.value = '';
  }
});

// Password adding functionality
document.getElementById('add-password-btn').addEventListener('click', function() {
  const websiteInput = document.getElementById('website-input');
  const usernameInput = document.getElementById('username-input');
  const passwordInput = document.getElementById('password-input');
  const passwordList = document.getElementById('password-list');

  if (websiteInput.value.trim() !== "" && usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    const passwordText = `Website: ${websiteInput.value}, Username: ${usernameInput.value}, Password: ${passwordInput.value}`;
    const passwordItems = JSON.parse(localStorage.getItem('passwords')) || [];
    passwordItems.push(passwordText);
    localStorage.setItem('passwords', JSON.stringify(passwordItems));

    const newPasswordItem = createPasswordItemElement(passwordText);
    passwordList.appendChild(newPasswordItem);

    websiteInput.value = '';
    usernameInput.value = '';
    passwordInput.value = '';
  }
});

// Delete button functionality
function deletebtn(element) {
  const deleteBtn = element.querySelector('.deletebtn');
  deleteBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete this item?")) {
      const taskList = document.getElementById('task-list');
      const noteList = document.getElementById('note-list');
      const goalList = document.getElementById('goal-list');
      const passwordList = document.getElementById('password-list');

      // Remove from the list
      element.remove();

      // Update localStorage after deletion
      updateLocalStorage();
    }
  });
}

// Edit button functionality
function editbtn(element) {
  const editBtn = element.querySelector('.editbtn');
  editBtn.addEventListener('click', function() {
    const textSpan = element.querySelector('span');
    const editedText = prompt("Edit your item:", textSpan.textContent);
    if (editedText !== null && editedText.trim() !== "") {
      textSpan.textContent = editedText;

      // Update localStorage after editing
      updateLocalStorage();
    }
  });
}

// Function to update localStorage after edit or delete
function updateLocalStorage() {
  const tasks = [];
  const notes = [];
  const goals = [];
  const passwordItems = [];

  document.querySelectorAll('#task-list li').forEach(task => tasks.push(task.querySelector('span').textContent));
  document.querySelectorAll('#note-list li').forEach(note => notes.push(note.querySelector('span').textContent));
  document.querySelectorAll('#goal-list li').forEach(goal => goals.push(goal.querySelector('span').textContent));
  document.querySelectorAll('#password-list li').forEach(passwordItem => passwordItems.push(passwordItem.textContent));

  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('goals', JSON.stringify(goals));
  localStorage.setItem('passwords', JSON.stringify(passwordItems));
}

// Toggle password visibility
const passwordInput = document.getElementById('password-input');
const togglePasswordVisibilityIcon = document.querySelector('[data-toggle-password]');
togglePasswordVisibilityIcon.addEventListener('click', function() {
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

// Dark Mode toggle
darkBtn.onclick = function() {
  document.body.classList.toggle('darkTheme');
  if (document.body.classList.contains('darkTheme')) {
    darkBtn.textContent = 'Light Mode';
  } else {
    darkBtn.textContent = 'Dark Mode';
  }
}
