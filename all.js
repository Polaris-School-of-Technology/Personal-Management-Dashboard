 
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } 
  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
   
  let taskList = getData('taskList') || [];
  let noteList = getData('noteList') || [];
  let goalList = getData('goalList') || [];
  
  document.addEventListener('DOMContentLoaded', function() {
     
    displayData();
  }); 

  function displayData() {
     
    if (document.getElementById('task-list')) {
      const taskListElement = document.getElementById('task-list');
      taskListElement.innerHTML = '';
      taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `${task.item} - ${task.dueDate} <button onclick="deleteTask(${index})">Delete</button>`;
        taskListElement.appendChild(taskElement);
      });
    }
    
    if (document.getElementById('note-list')) {
      const noteListElement = document.getElementById('note-list');
      noteListElement.innerHTML = '';
      noteList.forEach(note => {
        const noteElement = document.createElement('li');
        noteElement.textContent = note;
        noteListElement.appendChild(noteElement);
      });
    }
  
    if (document.getElementById('goal-list')) {
      const goalListElement = document.getElementById('goal-list');
      goalListElement.innerHTML = '';
      goalList.forEach(goal => {
        const goalElement = document.createElement('li');
        goalElement.textContent = goal;
        goalListElement.appendChild(goalElement);
      });
    }
  } 

  document.getElementById('add-task-btn')?.addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskItem = taskInput.value.trim();
    const dueDate = taskDate.value.trim();
  
    if (taskItem && dueDate) {
      taskList.push({ item: taskItem, dueDate });
      saveData('taskList', taskList);
      taskInput.value = '';
      taskDate.value = '';
      displayData();
    } else {
      alert('Please enter both task and due date!');
    }
  });
   
  function deleteTask(index) {
    taskList.splice(index, 1);
    saveData('taskList', taskList);
    displayData();
  }
  
