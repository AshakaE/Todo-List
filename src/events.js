import * as util from './utility';

function loadAddTask() {
  const addTaskForm = document.getElementById('addTaskForm');
  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    util.toggleShowElement(addTaskForm);
  });
}

function loadSubmitTask() {
  const taskInputs = document.querySelectorAll('[data-type="in"]');
  let arr = [];
  taskInputs.forEach(node => {
    arr.push(node.value);
    console.log(arr);
  });
  
}

export { loadAddTask, loadSubmitTask };