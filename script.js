document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskError = document.getElementById('task-error');
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
      taskInput.value = '';
      taskError.style.display = 'none'; // Hide error message
    }else {
      taskError.textContent = "Task input cannot be empty!";
      taskError.style.display = 'block';
    }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    const noteError = document.getElementById('note-error');
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
      noteInput.value = '';
      noteError.style.display = 'none'; // Hide error message
    }else{
      noteError.textContent = "Note input cannot be empty!";
      noteError.style.display = 'block';
    }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    const goalError = document.getElementById('goal-error');
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
      goalInput.value = ''; 
      goalError.style.display = 'none'; // Hide error message
    }else{
      goalError.textContent = "Goal input cannot be empty!";
      goalError.style.display = 'block';
    }
  });
  
  document.getElementById('add-password-btn').addEventListener('click', function() {
    const websiteInput = document.getElementById('website-input');
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');
    const passwordList = document.getElementById('password-list');
    const passwordError = document.getElementById('password-error');

    if (websiteInput.value.trim() !== "" && usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      const newPasswordItem = document.createElement('li');
      newPasswordItem.textContent = `Website: ${websiteInput.value}, Username: ${usernameInput.value}, Password: ${passwordInput.value}`;
      passwordList.appendChild(newPasswordItem);
      
      websiteInput.value = '';
      usernameInput.value = '';
      passwordInput.value = '';
      passwordError.style.display = 'none';
    }else{
      passwordError.textContent = "All fields must be filled!";
      passwordError.style.display = 'block';
    }
  });

  // You can later add functionality for fetching weather from an API, etc.
   
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
