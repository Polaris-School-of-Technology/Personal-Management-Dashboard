 // Task Management
let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskDate = document.getElementById('task-date');
  const taskItem = taskInput.value.trim();
  const dueDate = taskDate.value.trim();

  if (taskItem && dueDate) {
    taskList.push({ item: taskItem, dueDate });
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskInput.value = '';
    taskDate.value = '';
    displayTasks();
  } else {
    alert('Please enter both task and due date!');
  }
});

function displayTasks() {
  const taskListElement = document.getElementById('task-list');
  taskListElement.innerHTML = '';
  taskList.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `${task.item} - ${task.dueDate} <button onclick="deleteTask(${index})">Delete</button>`;
    taskListElement.appendChild(taskElement);
  });
}

function deleteTask(index) {
  taskList.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
}

// Notes Management
let noteList = JSON.parse(localStorage.getItem('noteList')) || [];

document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteItem = noteInput.value.trim();

  if (noteItem) {
    noteList.push(noteItem);
    localStorage.setItem('noteList', JSON.stringify(noteList));
    noteInput.value = '';
    displayNotes();
  } else {
    alert('Please write a note!');
  }
});

function displayNotes() {
  const noteListElement = document.getElementById('note-list');
  noteListElement.innerHTML = '';
  noteList.forEach((note, index) => {
    const noteElement = document.createElement('li');
    noteElement.innerHTML = `${note} <button onclick="deleteNote(${index})">Delete</button>`;
    noteListElement.appendChild(noteElement);
  });
}

function deleteNote(index) {
  noteList.splice(index, 1);
  localStorage.setItem('noteList', JSON.stringify(noteList));
  displayNotes();
}

// Goals Management
let goalList = JSON.parse(localStorage.getItem('goalList')) || [];

document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
  const goalItem = goalInput.value.trim();

  if (goalItem) {
    goalList.push(goalItem);
    localStorage.setItem('goalList', JSON.stringify(goalList));
    goalInput.value = '';
    displayGoals();
  } else {
    alert('Please enter a goal!');
  }
});

function displayGoals() {
  const goalListElement = document.getElementById('goal-list');
  goalListElement.innerHTML = '';
  goalList.forEach((goal, index) => {
    const goalElement = document.createElement('li');
    goalElement.innerHTML = `${goal} <button onclick="deleteGoal(${index})">Delete</button>`;
    goalListElement.appendChild(goalElement);
  });
}

function deleteGoal(index) {
  goalList.splice(index, 1);
  localStorage.setItem('goalList', JSON.stringify(goalList));
  displayGoals();
}

 
function fetchWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weather-info');
          weatherInfo.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        });
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

fetchWeather();
