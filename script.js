document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const errorDiv1 = document.getElementById('errorForTask');
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
      errorDiv1.innerHTML = "";
    }
    else if(taskInput.value.trim() == ""){
      errorDiv1.innerHTML = "Input cannot be empty!";
      
    }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    const errorDiv2 = document.getElementById('errorForNotes');
    if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
      noteList.appendChild(newNote);
      noteInput.value = '';
      errorDiv2.innerHTML = "";
    }
    else if(noteInput.value.trim() == ""){
      errorDiv2.innerHTML = "Input cannot be empty!";
      
    }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const errorDiv3 = document.getElementById('errorForGoals');
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    if (goalInput.value.trim() !== "") {
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;
      goalList.appendChild(newGoal);
      goalInput.value = ''; 
      errorDiv3.innerHTML = "";
    }
    else if(goalInput.value.trim() == ""){
      errorDiv3.innerHTML = "Input cannot be empty!";
      
    }
  });
  
  // You can later add functionality for fetching weather from an API, etc.
  