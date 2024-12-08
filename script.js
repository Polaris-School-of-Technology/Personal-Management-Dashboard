// document.getElementById('add-task-btn').addEventListener('click', function() {
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');
//     if (taskInput.value.trim() !== "") {
//       const newTask = document.createElement('li');
//       newTask.textContent = taskInput.value;
//       taskList.appendChild(newTask);
//       taskInput.value = '';
//     }
//   });
  
//   document.getElementById('save-note-btn').addEventListener('click', function() {
//     const noteInput = document.getElementById('note-input');
//     const noteList = document.getElementById('note-list');
//     if (noteInput.value.trim() !== "") {
//       const newNote = document.createElement('li');
//       newNote.textContent = noteInput.value;
//       noteList.appendChild(newNote);
//       noteInput.value = '';
//     }
//   });
  
//   document.getElementById('add-goal-btn').addEventListener('click', function() {
//     const goalInput = document.getElementById('goal-input');
//     const goalList = document.getElementById('goal-list');
//     if (goalInput.value.trim() !== "") {
//       const newGoal = document.createElement('li');
//       newGoal.textContent = goalInput.value;
//       goalList.appendChild(newGoal);
//       goalInput.value = ''; 
//     }
//   });

  // You can later add functionality for fetching weather from an API, etc.
  

  document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
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
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
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
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;
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
  