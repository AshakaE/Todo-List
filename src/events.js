import * as util from './utility';

function loadAddTask() {
  const addTaskForm = document.getElementById('addTaskForm');
  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    util.toggleShowElement(addTaskForm);
  });
}

export { loadAddTask };