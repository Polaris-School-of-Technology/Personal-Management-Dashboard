
  document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== "") {
      const newTask =document.createElement('li');
      newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
      deletebtn(newTask); 
      editbtn(newTask); 

      // newTask.textContent = taskInput.value;  not needed now
      taskList.appendChild(newTask);
  
      const tasks = localStorage.getItem('tasks') ? localStorage.getItem('tasks') + ' | ' + taskInput.value : taskInput.value;
      localStorage.setItem('tasks', tasks);
  
      taskInput.value = ''; 
    }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    
    if (noteInput.value.trim() !== "") {
      const newNote =document.createElement('li');
      newNote.innerHTML = `
        <span>${noteInput.value}</span>
        <button class="editbtn">Edit</button>
        <button class="deletebtn">Delete</button>
      `;
      deletebtn(newNote); 
      editbtn(newNote); 
      // newNote.textContent = noteInput.value;   not needed now
      noteList.appendChild(newNote);
  
    
      const notes = localStorage.getItem('notes') ? localStorage.getItem('notes') + '|' + noteInput.value : noteInput.value;
      localStorage.setItem('notes', notes);
  
      noteInput.value = '';
    }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    
    if (goalInput.value.trim() !== "") {
      const newGoal =document.createElement('li');
      
    newGoal.innerHTML = `
      <span>${goalInput.value}</span>
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;
    deletebtn(newGoal);
    editbtn(newGoal);
      // newGoal.textContent = goalInput.value;  not needed now
      goalList.appendChild(newGoal);
  
    
      const goals = localStorage.getItem('goals') ? localStorage.getItem('goals') + '|' + goalInput.value : goalInput.value;
      localStorage.setItem('goals', goals);
  
      goalInput.value = ''; 
    }
  });
  

 
  document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const noteList = document.getElementById('note-list');
    const goalList = document.getElementById('goal-list');
  
    
    if (localStorage.getItem('tasks')) {
      localStorage.getItem('tasks').split('|').forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
      });
    }
  
   
    if (localStorage.getItem('notes')) {
      localStorage.getItem('notes').split('|').forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = note;
        noteList.appendChild(listItem);
      });
    }
  
    
    if (localStorage.getItem('goals')) {
      localStorage.getItem('goals').split('|').forEach(goal => {
        const listItem = document.createElement('li');
        listItem.textContent = goal;
        goalList.appendChild(listItem);
      });
    }
  });  


  document.getElementById('clear-all-notes-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to delete all notes?')) {
      localStorage.removeItem('notes');
      document.getElementById('note-list').innerHTML = '';
    }
  });

  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input').value;
    if (noteInput) {
      let notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(noteInput);
      localStorage.setItem('notes', JSON.stringify(notes));
      displayNotes();
    }
  });

  function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';
    notes.forEach(note => {
      const li = document.createElement('li');
      li.textContent = note;
      noteList.appendChild(li);
    });
  }
  
  displayNotes();
  
=======
  document.getElementById('add-password-btn').addEventListener('click', function() {
    const websiteInput = document.getElementById('website-input');
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');
    const passwordList = document.getElementById('password-list');

    if (websiteInput.value.trim() !== "" && usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      const newPasswordItem = document.createElement('li');
      newPasswordItem.textContent = `Website: ${websiteInput.value}, Username: ${usernameInput.value}, Password: ${passwordInput.value}`;
      passwordList.appendChild(newPasswordItem);
      
      websiteInput.value = '';
      usernameInput.value = '';
      passwordInput.value = '';
    }
  });

  
  function deletebtn(element) {
    const deleteBtn =element.querySelector('.deletebtn');
    deleteBtn.addEventListener('click', function () {
      if (confirm("Are you sure you want to delete this item?")) {
        element.remove();
      }
    });
  }
  
  // edit button functionality
  function editbtn(element) {
    const editBtn =element.querySelector('.editbtn');
    editBtn.addEventListener('click', function () {
      const textSpan =element.querySelector('span:nth-child(2)') || element.querySelector('span');
      const editedText =prompt("Edit your item:", textSpan.textContent);
      if (editedText !==null&&editedText.trim() !== "") {
        textSpan.textContent =editedText;
      }
    });
  }

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

darkBtn.onclick=function(){
  document.body.classList.toggle('darkTheme');
  if (document.body.classList.contains('darkTheme')) {
    darkBtn.textContent = 'Light Mode';
  } else {
    darkBtn.textContent = 'Dark Mode';
}
}

