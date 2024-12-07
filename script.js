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
  
  // You can later add functionality for fetching weather from an API, etc.

// Code to Get the Weather Data from OpenWeatherMap API

// On clicking the Weather Button , the function getWeather() will be called
let weatherbtn = document.getElementById("weather-btn");
weatherbtn.addEventListener("click",()=>{
  fetchweather();
})
 
// Using asynchronous function to get the weather data from OpenWeatherMap API
async function fetchweather() {
  let city = document.getElementById('City').value; // Taking the City from the Input field
  let api = "50370eb305bcf8b13c21105c13583f30";  // API Id
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`; // Created API url 

  // Using Try and Catch so even if there is an error in the API call, the code will not crash
  try {
    let response = await fetch(apiURL);  //Taking the response from the API, used await so the program  waits for the response
    if(!response.ok){
      throw new Error("Network response was not ok");  // If response is not OK , it will throw an error
    }
    let data = await response.json();  // Storing Data coming from the API and converting to JSON for better access 
    document.getElementById('weather-data').style.display = 'block'; // Making the Weather Data div visible

    document.querySelector(".CurrentTemp").innerHTML = Math.round(data.main.temp);  // Displaying the Current Temperature in the HTML div
    document.querySelector(".MaxTemp").innerHTML = Math.round(data.main.temp_max);  // Displaying the Maximum Temperature in the HTML div
    document.querySelector(".MinTemp").innerHTML = Math.round(data.main.temp_min);  // Displaying the Minimum Temperature in the HTML div
    document.querySelector(".FeelsLike").innerHTML = Math.round(data.main.feels_like);  // Displaying the Feels Like Temperature in the HTML div
    document.querySelector(".Humidity").innerHTML = data.main.humidity; // Displaying the Humidity in the HTML div
    document.querySelector(".WindSpeed").innerHTML = data.wind.speed; // Displaying the Wind Speed in the HTML div
  } 
  // If errors occur in the API call, it will be caught and the error will be displayed in the HTML div
  catch (error) {
    console.error("There is a problem with your fetch :",error); document.getElementById('weather-data').innerHTML = "Loading Failed";
    document.getElementById('weather-data').style.display='block';
  }
}
