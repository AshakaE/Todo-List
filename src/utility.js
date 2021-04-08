import Project from './project';

const projectsList = document.getElementById('project');
const editProjectsList = document.getElementById('editProject');

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function findTaskInputs(type = 'in') {
  return document.querySelectorAll(`[data-type="${type}"]`);
}

function clearAddTaskForm() {
  const taskInputs = findTaskInputs();
  taskInputs.forEach(node => {
    if (node.tagName === 'INPUT') {
      node.value = '';
    }
  });
}

function clearAddProjectForm() {
  const projectInput = document.getElementById('projectTitle');
  projectInput.value = '';
}

function taskInputs( type = 'in') {
  const taskInputs = findTaskInputs(type);
  const arr = [];
  taskInputs.forEach(node => {
    arr.push(node.value);
  });
  return arr;
}

function showMainList(projectClass) {
  projectClass.mainList.forEach((project, index) => {
    const option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    const optionClone = option.cloneNode(true);
    projectsList.appendChild(option);
    editProjectsList.appendChild(optionClone);
  });
}

function addProjectToForm(project) {
  const option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  const optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
}

// function createTask() {
//   const newTask = new Todo(...taskInputs());
//   return newTask;
// }

function projectInput() {
  const projectInput = document.getElementById('projectTitle');
  return projectInput.value;
}

function createProject() {
  const newProject = new Project(projectInput());
  return newProject;
}

function addHiddenInput(form, task) {
  const input = document.querySelector('[name="id"]') ?? document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'id');
  input.setAttribute('value', task.index);
  form.insertBefore(input, form.firstChild);
}

// function showAllTasks() {
//   const taskTable = document.querySelector('.taskTable');
//   Todo.mainList.forEach(task => {
//     taskTable.appendChild(task.showTask());
//   });
// }

function showTask(task) {
  const taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
}

function findTask(id) {
  const task = document.querySelector(`tr[data-id="${id}"]`);
  return task;
}

export {
  toggleShowElement, showMainList, taskInputs, showTask, createProject,
  addProjectToForm, findTask, clearAddTaskForm, clearAddProjectForm, addHiddenInput,
};