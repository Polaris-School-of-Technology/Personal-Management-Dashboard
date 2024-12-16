document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value.trim() !== "") {
      const newTask =document.createElement('li');
      newTask.classList.add('task-item');
const checkbox= document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');
const taskText= document.createElement('span');
  taskText.textContent = taskInput.value;
  const editButton = document.createElement('button');
  editButton.classList.add('editbtn');
  editButton.textContent = 'Edit';
const deleteButton = document.createElement('button');
  deleteButton.classList.add('deletebtn');
  deleteButton.textContent = 'Delete';
  newTask.appendChild(checkbox);
  newTask.appendChild(taskText);
  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);  
    deletebtn(newTask); 
    editbtn(newTask); 
    taskList.appendChild(newTask);
    taskInput.value = '';
    updateTaskSummary();
    }
  });
  function updateTaskSummary() {
    const tasks = document.querySelectorAll('#task-list li');
    const completedTasks = document.querySelectorAll('#task-list input:checked');
    document.getElementById('task-summary').textContent =` ${tasks.length - completedTasks.length} tasks remaining, ${completedTasks.length} completed`;
    }
    document.getElementById('task-list').addEventListener('change', function(event) { 
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') { 
        if (event.target.checked) { 
          event.target.parentNode.classList.add('completed');
         } 
         else { 
          event.target.parentNode.classList.remove('completed'); 
        } 
        updateTaskSummary(); 
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
        <button class="deletebtn">Delete</button>`;
      deletebtn(newNote); 
      editbtn(newNote); 
      // newNote.textContent = noteInput.value;   not needed now
      noteList.appendChild(newNote);
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
      <button class="deletebtn">Delete</button>`;
    deletebtn(newGoal);
    editbtn(newGoal);
      // newGoal.textContent = goalInput.value;  not needed now
      goalList.appendChild(newGoal);
      goalInput.value = ''; 
    }
  });
  
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
  // delete button functionality
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