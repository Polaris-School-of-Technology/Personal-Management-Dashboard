function saveNotesToLocalStorage() {
  const notes = [];
  document.querySelectorAll('#note-list li').forEach(note => {
      notes.push(note.textContent);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}


function loadNotesFromLocalStorage() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const noteList = document.getElementById('note-list');
  notes.forEach(noteText => {
      const newNote = document.createElement('li');
      newNote.textContent = noteText;
      noteList.appendChild(newNote);
  });
}


document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
      noteList.appendChild(newNote);
      noteInput.value = '';
      saveNotesToLocalStorage(); 
  }
});


document.addEventListener('DOMContentLoaded', function() {
  loadNotesFromLocalStorage(); 
});

  
  
  
  // You can later add functionality for fetching weather from an API, etc.
  