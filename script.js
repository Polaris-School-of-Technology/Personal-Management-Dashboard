document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = `${taskList.children.length+1} : ${taskInput.value}`;
      taskList.appendChild(newTask);
      taskInput.value = '';
      
    }
  });


document.getElementById("del-btn").addEventListener("click" , ()=>{
  let indexinput= document.getElementById("index");
  let list = document.getElementById("task-list");
  let index = parseInt(indexinput.value , 10);
  if( !isNaN(index) && index>=0 && index<=list.children.length+1){
    list.children[index-1].remove();
    indexinput.value="";
  }
  else{
    alert("invaild position");
    indexinput.value="";
  }

})

document.getElementById("del-all-task").addEventListener("click" , ()=>{
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
})


  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = `${noteList.children.length+1} : ${noteInput.value}`;
      noteList.appendChild(newNote);
      noteInput.value = '';
    }
  });
  

document.getElementById("del-allnotes").addEventListener("click" , ()=>{
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
});



document.getElementById("del-notes-btn").addEventListener("click" , ()=>{
  let indexinput = document.getElementById("index1");
  let noteslist = document.getElementById("note-list");
  let index = parseInt(indexinput.value , 10);
  if(!isNaN(index) && index>=0 && index<=noteslist.children.length+1){
    noteslist.children[index-1].remove();
    indexinput.value ="";
  }else{
    alert("invaild position")
    indexinput.value="";
  }
})











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
  