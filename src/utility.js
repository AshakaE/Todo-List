import Todo from './todo';

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function taskInputs() {
  const taskInputs = document.querySelectorAll('[data-type="in"]');
  const arr = [];
  taskInputs.forEach(node => {
    arr.push(node.value);
  });
  return arr;
}

function showMainList(projectClass) {
  const projectsList = document.getElementById('project');
  projectClass.mainList.forEach((project, index) => {
    const option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    projectsList.appendChild(option);
  });
}

function createTask() {
  const taskInputs = document.querySelectorAll('[data-type="in"]');
  const arr = [];
  taskInputs.forEach(node => {
    arr.push(node.value);
  });
  const newTask = new Todo(...arr);
  return newTask;
}

export {
  toggleShowElement, createTask, showMainList, taskInputs,
};