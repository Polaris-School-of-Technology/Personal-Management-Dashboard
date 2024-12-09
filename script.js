document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
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
    goalList.appendChild(newGoal);
    goalInput.value = ''; 
  }
});


document.getElementById('save-date-btn').addEventListener('click', () => {
  const goalDateInput = document.getElementById('goal-date').value;
  const selectedDateDisplay = document.getElementById('selected-date'); 

  if (goalDateInput) {
      const today = new Date();
      const goalDate = new Date(goalDateInput);
      
      const timeDifference = goalDate - today;

      const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
      const day = String(goalDate.getDate()).padStart(2, '0');
      const month = String(goalDate.getMonth() + 1).padStart(2, '0');
      const year = goalDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      
      selectedDateDisplay.textContent = `Selected Date: ${formattedDate} (Days Left: ${daysLeft})`;
  } else {
      alert('Please select a date.');
  }
});


