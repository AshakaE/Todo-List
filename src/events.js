import * as util from './utility';

const addTaskForm = document.getElementById('addTaskForm');

function loadAddTask() {
  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', () => {
    util.toggleShowElement(addTaskForm);
  });
}

function submitTask() {
  const submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', () => {
    util.showTask(util.createTask());
    util.toggleShowElement(addTaskForm);
  });
}

export { loadAddTask, submitTask };