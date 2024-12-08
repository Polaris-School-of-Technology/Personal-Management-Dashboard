document.addEventListener("DOMContentLoaded", () => {
const calendar = document.getElementById("calendar");
const moodPicker = document.getElementById("mood-picker");
const emojis = document.querySelectorAll(".emoji");

for (let i = 1; i <= 31; i++) {
    const day = document.createElement("div");
    day.classList.add("calendar-day");
    day.textContent = i;
    day.dataset.date = i;
    day.addEventListener("click", () => selectDay(day));
    calendar.appendChild(day);
}
let selectedDay = null;
function selectDay(day) {
  if (selectedDay) {
    selectedDay.classList.remove("selected");
  }
  selectedDay = day;
  selectedDay.classList.add("selected");
  moodPicker.classList.remove("hidden");
}
emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
      if (selectedDay) {
        selectedDay.textContent = `${selectedDay.dataset.date} ${emoji.dataset.mood}`;
      }
      moodPicker.classList.add("hidden");
    });
  });
});