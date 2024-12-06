document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;

      // Add a delete button to each note
      const taskButton = document.createElement('button');
      taskButton.textContent = 'Delete'; 
      // Add a class to the button
      taskButton.classList.add('delete-btn');

      //Add functionality to the delete button
      newTask.appendChild(taskButton); 
      taskButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
      });
      // End of delete button code
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;

      // Add a delete button to each note
      const noteButton = document.createElement('button');
      noteButton.textContent = 'Delete'; 
      // Add a class to the button
      noteButton.classList.add('delete-btn');

      //Add functionality to the delete button
      newNote.appendChild(noteButton); 
      noteButton.addEventListener('click', function() {
        noteList.removeChild(newNote);
      });
      // End of delete button code
      noteList.appendChild(newNote);
      noteInput.value = '';
    }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    if (goalInput.value.trim() !== "") {
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;

      // Add a delete button to each goal
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete'; 
      deleteButton.classList.add('delete-btn');

      // Add functionality to the delete button
      deleteButton.addEventListener('click', function() {
        goalList.removeChild(newGoal);
      });
      // End of delete button code
      newGoal.appendChild(deleteButton); 
      goalList.appendChild(newGoal);
      goalInput.value = ''; 
    }
  });
  
  // You can later add functionality for fetching weather from an API, etc.