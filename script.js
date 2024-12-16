const addedTasks = new Set();
const addedNotes = new Set();
const addedGoals = new Set()

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();
    const taskWithCategory = `${taskText} (${taskCategory.value})`;
  
    if (isValidInput(taskText)) {
      if(!addedTasks.has(taskWithCategory)) {
        addedTasks.add(taskWithCategory); 
      const newTask =document.createElement('li');
      newTask.innerHTML = `
      <span>${taskWithCategory}</span>
      <div style="display: inline-block;">
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
      </div>
    `;
      deletebtn(newTask , taskWithCategory, addedTasks); 
      editbtn(newTask , taskWithCategory, addedTasks); 

      // newTask.textContent = taskInput.value;  not needed now
      taskList.appendChild(newTask);
      taskInput.value = '';
    }else{
      alert("You already added this task!");
    }
  } else {
    alert("Invalid input. Please enter a meaningful task.");
  }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');

    const noteText=noteInput.value.trim();

    if (isValidInput(noteText)) {
      if(!addedNotes.has(noteText)) {
        addedNotes.add(noteText);
      const newNote =document.createElement('li');
      newNote.innerHTML = `
        <span>${noteText}</span>
        <div style="display: inline-block;">
        <button class="editbtn">Edit</button>
        <button class="deletebtn">Delete</button>
        </div>
      `;
      deletebtn(newNote , noteText , addedNotes); 
      editbtn(newNote , noteText , addedNotes); 
      // newNote.textContent = noteInput.value;   not needed now
      noteList.appendChild(newNote);
      noteInput.value = '';
    }else {
      alert("You already added this note!");
    }
  } else {
    alert("Invalid input. Please enter a meaningful note.");
  }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');

    const goalText = goalInput.value.trim();

    if (isValidInput(goalText)) {
      if(!addedGoals.has(goalText)) {
        addedGoals.add(goalText);
      const newGoal =document.createElement('li');
      
      newGoal.innerHTML = `
      <span>${goalText}</span>
      <div style="display: inline-block;">
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
      </div>
    `;
    deletebtn(newGoal , goalText , addedGoals);
    editbtn(newGoal , goalText , addedGoals);
      // newGoal.textContent = goalInput.value;  not needed now
      goalList.appendChild(newGoal);
      goalInput.value = ''; 
    }else {
      alert("You already added this goal!");
    }
  } else {
    alert("Invalid input. Please enter a meaningful goal.");
  }
  });
  
  document.getElementById('add-password-btn').addEventListener('click', function() {
    const websiteInput = document.getElementById('website-input');
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');
    const passwordList = document.getElementById('password-list');

    const website = websiteInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (isValidInput(website) && isValidInput(username) && isValidInput(password)) {
      const newPasswordItem = document.createElement('li');
      newPasswordItem.textContent = `Website: ${website}, Username: ${username}, Password: ${password}`;
      passwordList.appendChild(newPasswordItem);
      
      websiteInput.value = '';
      usernameInput.value = '';
      passwordInput.value = '';
    }else {
      alert("Invalid input. Please ensure all fields are filled with meaningful data.");
    }
  });

  function isValidInput(input) {
    const invalidPatterns = [/^\s*$/, /[^a-zA-Z0-9 ]/]; 
    return !invalidPatterns.some((pattern) => pattern.test(input));
  } 


  // You can later add functionality for fetching weather from an API, etc.
   
  // delete button functionality
  function deletebtn(element , value , set) {
    const deleteBtn =element.querySelector('.deletebtn');
    deleteBtn.addEventListener('click', function () {
      if (confirm("Are you sure you want to delete this item?")) {
        set.delete(value);
        element.remove();
      }
    });
  }
  
  // edit button functionality
  function editbtn(element , value , set) {
    const editBtn =element.querySelector('.editbtn');
    editBtn.addEventListener('click', function () {
      const textSpan =element.querySelector('span');
      const editedText =prompt("Edit your item:", textSpan.textContent.split("(")[0])
      if (editedText !==null&&editedText.trim() !== "") {
        const newFormattedValue  =editedText.trim();
        if(!set.has(newFormattedValue)){
          set.delete(value);
          set.add(newFormattedValue);
          textSpan.textContent = `${newFormattedValue} (${element.querySelector('span').textContent.split("(")[1]})`;
        } else{
          alert("This edited item already exists!");
        }
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