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

document.getElementById('get-weather-btn').addEventListener('click', async function() {
  const city = document.getElementById('city-input').value.trim();
  const weatherDetails = document.getElementById('weather-details');

  if (city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();

      if (data.cod === 200) {
        weatherDetails.innerHTML = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
      } else {
        weatherDetails.textContent = "City not found. Please try again.";
      }
    } catch (error) {
      weatherDetails.textContent = "Unable to fetch weather. Please check your connection.";
    }
  } else {
    weatherDetails.textContent = "Please enter a city name.";
  }
});
