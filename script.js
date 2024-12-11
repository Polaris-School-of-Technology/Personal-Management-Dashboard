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
  