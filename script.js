
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('darkTheme'); 

  if (document.body.classList.contains('darkTheme')) {
    this.textContent = 'Light Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
  localStorage.setItem('darkMode', document.body.classList.contains('darkTheme'));
});

document.addEventListener('DOMContentLoaded', function() {
  const darkModeState = localStorage.getItem('darkMode');
  if (darkModeState === 'true') {
    document.body.classList.add('darkTheme');
    document.getElementById('dark-mode-toggle').textContent = 'Light Mode';
  } else {
    document.body.classList.remove('darkTheme');
    document.getElementById('dark-mode-toggle').textContent = 'Dark Mode';
  }
  loadData(); 
});


document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newTask);
    editbtn(newTask);
    taskList.appendChild(newTask);
    taskInput.value = '';
    saveData(); 
  }
});

document.getElementById('clear-tasks-btn').addEventListener('click', function() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; 
  saveData(); 
});

document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
    const newNote = document.createElement('li');
    newNote.innerHTML = `
      <span>${noteInput.value}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newNote);
    editbtn(newNote);
    noteList.appendChild(newNote);
    noteInput.value = '';
    saveData(); 
  }
});

document.getElementById('clear-all-notes-btn').addEventListener('click', function () {
  if (confirm("Are you sure you want to clear all notes?")) {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = ''; 

    localStorage.removeItem('notes');
  }
});


document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
    goalInput.value = '';
});


document.getElementById('clear-goals-btn').addEventListener('click', function() {
  const goalList = document.getElementById('goal-list');
  goalList.innerHTML = '';
  saveData();
});

const modal = document.getElementById("goalModal");
const btn = document.getElementById("add-goal-btn");
const closeBtn = document.querySelector(".close");
const goalForm = document.getElementById("goal-form");

btn.addEventListener("click", function() {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

goalForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const goalTitle = document.getElementById("goal-title").value.trim();
  const goalDescription = document.getElementById("goal-description").value.trim();
  const goalDate = document.getElementById("goal-date").value;

  if (goalTitle && goalDescription && goalDate) {
    const goalList = document.getElementById("goal-list");
    const newGoal = document.createElement("li");
    newGoal.innerHTML = `
      <span><strong>${goalTitle}</strong> - ${goalDescription} (Target Date: ${goalDate})</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newGoal);
    editbtn(newGoal);

    goalList.appendChild(newGoal);
    saveData();
    modal.style.display = "none";
    goalForm.reset();
  } else {
    alert("Please fill in all fields!");
  }
});

document.getElementById('add-password-btn').addEventListener('click', function() {
  const websiteInput = document.getElementById('website-input');
  const usernameInput = document.getElementById('username-input');
  const passwordInput = document.getElementById('password-input');
  const passwordList = document.getElementById('password-list');

  if (websiteInput.value.trim() !== "" && usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    const newPasswordItem = document.createElement('li');
    newPasswordItem.innerHTML = `Website: ${websiteInput.value}, Username: ${usernameInput.value}, Password: ${passwordInput.value}`;
    passwordList.appendChild(newPasswordItem);
    
    websiteInput.value = '';
    usernameInput.value = '';
    passwordInput.value = '';
    saveData(); 
  }
});

function deletebtn(element) {
  const deleteBtn = element.querySelector('.deletebtn');
  deleteBtn.addEventListener('click', function () {
    if (confirm("Are you sure you want to delete this item?")) {
      element.remove();
      saveData();
    }
  });
}

function editbtn(element) {
  const editBtn = element.querySelector('.editbtn');
  editBtn.addEventListener('click', function () {
    const textSpan = element.querySelector('span');

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = textSpan.textContent;

    textSpan.replaceWith(inputField);
    inputField.focus();
    inputField.addEventListener('blur', function () {
      const updatedText = inputField.value.trim();
      if (updatedText !== "") {
        const updatedSpan = document.createElement('span');
        updatedSpan.textContent = updatedText;
        inputField.replaceWith(updatedSpan);
        
        saveData(); 
      }
    });

    inputField.addEventListener('keydown', function (event) {
      if (event.key === "Enter") {
        const updatedText = inputField.value.trim();
        if (updatedText !== "") {
          const updatedSpan = document.createElement('span');
          updatedSpan.textContent = updatedText;
          inputField.replaceWith(updatedSpan);

          saveData();
        }
      }
    });
  });
}

function saveData() {
  const tasks = [];
  const notes = [];
  const goals = [];
  const passwords = [];

  document.querySelectorAll('#task-list li').forEach(task => {
    tasks.push(task.querySelector('span').textContent);
  });

  document.querySelectorAll('#note-list li').forEach(note => {
    notes.push(note.querySelector('span').textContent);
  });

  document.querySelectorAll('#goal-list li').forEach(goal => {
    goals.push(goal.querySelector('span').textContent);
  });

  document.querySelectorAll('#password-list li').forEach(password => {
    const text = password.textContent.split(', ');
    const website = text[0].replace('Website: ', '');
    const username = text[1].replace('Username: ', '');
    const passwordText = text[2].replace('Password: ', '');
    passwords.push({ website, username, password: passwordText });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('goals', JSON.stringify(goals));
  localStorage.setItem('passwords', JSON.stringify(passwords));
}

function loadData() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

  tasks.forEach(task => {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${task}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newTask);
    editbtn(newTask);
    document.getElementById('task-list').appendChild(newTask);
  });

  notes.forEach(note => {
    const newNote = document.createElement('li');
    newNote.innerHTML = `
      <span>${note}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newNote);
    editbtn(newNote);
    document.getElementById('note-list').appendChild(newNote);
  });

  goals.forEach(goal => {
    const newGoal = document.createElement('li');
    newGoal.innerHTML = `
      <span>${goal}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newGoal);
    editbtn(newGoal);
    document.getElementById('goal-list').appendChild(newGoal);
  });

  passwords.forEach(password => {
    const newPassword = document.createElement('li');
    newPassword.textContent = `Website: ${password.website}, Username: ${password.username}, Password: ${password.password}`;
    document.getElementById('password-list').appendChild(newPassword);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadData(); 
});
