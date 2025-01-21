// counter.js
function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

// dateUtils.js
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthName(date) {
  return date.toLocaleString('default', { month: 'long' });
}

function getWeekdays() {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

// taskManager.js
class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || {};
  }

  addTask(date, description) {
    if (!this.tasks[date]) {
      this.tasks[date] = [];
    }
    this.tasks[date].push({
      id: Date.now(),
      description,
      completed: false
    });
    this.save();
  }

  getTasksForDate(date) {
    return this.tasks[date] || [];
  }

  deleteTask(date, taskId) {
    if (this.tasks[date]) {
      this.tasks[date] = this.tasks[date].filter(task => task.id !== taskId);
      if (this.tasks[date].length === 0) {
        delete this.tasks[date];
      }
      this.save();
    }
  }

  updateTask(date, taskId, newDescription) {
    if (this.tasks[date]) {
      const task = this.tasks[date].find(task => task.id === taskId);
      if (task) {
        task.description = newDescription;
        this.save();
      }
    }
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

// calendar.js
class Calendar {
  constructor(date = new Date()) {
    this.currentDate = date;
    this.selectedDate = null;
  }

  generateWeekdaysHTML() {
    const weekdays = getWeekdays();
    return weekdays.map(day => `<div class="weekday">${day}</div>`).join('');
  }

  generateCalendarHTML() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    let calendarHTML = this.generateWeekdaysHTML();

    for (let i = 0; i < firstDay; i++) {
      calendarHTML += '<div class="calendar-day empty">-</div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = date === this.selectedDate ? 'selected' : '';

      calendarHTML += `
        <div class="calendar-day ${isSelected}" data-date="${date}">
          ${day}
          <div class="task-list"></div>
          <div class="task-indicators"></div>
        </div>
      `;
    }

    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    for (let i = firstDay + daysInMonth; i < totalCells; i++) {
      calendarHTML += '<div class="calendar-day empty">-</div>';
    }

    return calendarHTML;
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
  }

  updateCalendar() {
    const monthYear = document.querySelector('.month-year');
    monthYear.textContent = `${getMonthName(this.currentDate)} ${this.currentDate.getFullYear()}`;

    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = this.generateCalendarHTML();
  }

  setSelectedDate(date) {
    this.selectedDate = date;
    this.updateCalendar();
  }
}

// main.js
const calendar = new Calendar();
const taskManager = new TaskManager();

calendar.updateCalendar();

document.querySelector('.prev-month').addEventListener('click', () => {
  calendar.previousMonth();
  updateTaskIndicators();
});

document.querySelector('.next-month').addEventListener('click', () => {
  calendar.nextMonth();
  updateTaskIndicators();
});

document.querySelector('.calendar-grid').addEventListener('click', (e) => {
  const dayElement = e.target.closest('.calendar-day');
  if (dayElement && !dayElement.classList.contains('empty')) {
    const date = dayElement.dataset.date;
    calendar.setSelectedDate(date);
    document.getElementById('task-date').value = date;
    updateTaskList(date);
  }
});

document.querySelector('.save-button').addEventListener('click', () => {
  const dateInput = document.getElementById('task-date');
  const descriptionInput = document.getElementById('task-description');

  if (dateInput.value && descriptionInput.value) {
    taskManager.addTask(dateInput.value, descriptionInput.value);
    updateTaskIndicators();
    updateTaskList(dateInput.value);
    descriptionInput.value = '';
  }
});

function updateTaskList(date) {
  const tasks = taskManager.getTasksForDate(date);
  const dayElement = document.querySelector(`.calendar-day[data-date="${date}"]`);

  if (dayElement) {
    const taskList = dayElement.querySelector('.task-list');
    if (taskList) {
      taskList.innerHTML = tasks.map(task => `
        <div class="task-item" data-task-id="${task.id}">
          <span class="task-description">${task.description}</span>
          <div class="task-actions">
            <button class="icon-button edit-button" onclick="editTask(${task.id}, '${date}', '${task.description}')" title="Edit task">
              <i class="fas fa-edit"></i>
            </button>
            <button class="icon-button delete-button" onclick="deleteTask(${task.id}, '${date}')" title="Delete task">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

function updateTaskIndicators() {
  const days = document.querySelectorAll('.calendar-day:not(.empty)');
  days.forEach(day => {
    const date = day.dataset.date;
    if (date) {
      const tasks = taskManager.getTasksForDate(date);
      const indicators = day.querySelector('.task-indicators');
      if (indicators) {
        indicators.innerHTML = tasks.map(() => '<div class="task-indicator"></div>').join('');
      }

      if (date === calendar.selectedDate) {
        updateTaskList(date);
      }
    }
  });
}

window.editTask = (taskId, date, description) => {
  const newDescription = prompt('Edit task:', description);
  if (newDescription !== null && newDescription.trim() !== '') {
    taskManager.updateTask(date, taskId, newDescription.trim());
    updateTaskList(date);
    updateTaskIndicators();
  }
};

window.deleteTask = (taskId, date) => {
  if (confirm('Are you sure you want to delete this task?')) {
    taskManager.deleteTask(date, taskId);
    updateTaskList(date);
    updateTaskIndicators();
  }
};

document.getElementById('task-date').value = formatDate(new Date());
updateTaskIndicators();
