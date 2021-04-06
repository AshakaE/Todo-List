import * as util from './utility';

function loadAddTask() {
  const addTaskForm = document.getElementById('addTaskForm');
  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    util.toggleShowElement(addTaskForm);
  });
}

function submitTask() {
  const submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', function () {
    util.createTask()
    util.showAllTasks()
  });
}

export { loadAddTask, submitTask };