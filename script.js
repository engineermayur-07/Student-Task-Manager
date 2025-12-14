document.addEventListener('DOMContentLoaded', function () {
  const showWelcome = true;
  if (showWelcome) {
   
  }

  
  const taskForm = document.getElementById('task-form');
  const taskText = document.getElementById('task-text');
  const tasksList = document.getElementById('tasks-list');
  const clearButton = document.getElementById('clear-tasks');

  if (taskForm && tasksList && taskText) {
    taskForm.addEventListener('submit', function (ev) {
      ev.preventDefault(); 
      const value = taskText.value.trim();
      if (!value) return;

      
      const li = document.createElement('li');
      li.className = 'task-item';

      const spanText = document.createElement('span');
      spanText.className = 'task-text';
      spanText.textContent = value; 

      const meta = document.createElement('span');
      meta.className = 'task-meta';

      
      li.appendChild(spanText);
      li.appendChild(meta);
      
      tasksList.insertBefore(li, tasksList.firstChild);

      
      taskText.value = '';
      taskText.focus();
    });

  }
});