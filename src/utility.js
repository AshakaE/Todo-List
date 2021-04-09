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

function taskInputs(type = 'in') {
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

function toggleDone(task) {
  const input = document.querySelector(`[data-task-id="${task.index}"]`);
  if (input.checked === true) {
    task.done = true;
  } else {
    task.done = false;
  }
}

function createCheckBox(task) {
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.className = 'form-check-input';
  input.setAttribute('type', 'checkbox');
  input.dataset.taskId = task.index;
  input.addEventListener('change', () => {
    toggleDone(task);
  });
  td.appendChild(input);
  return td;
}

function showTask(task) {
  const taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
}

function findTask(id) {
  const task = document.querySelector(`tr[data-id="${id}"]`);
  return task;
}

function showProject(project) {
  const table = document.querySelector('.projectsTable');
  table.appendChild(project.showProject());
}

function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
  console.log(localStorage);
}

export {
  toggleShowElement, showMainList, taskInputs, showTask, createProject, showProject,
  addProjectToForm, findTask, clearAddTaskForm, clearAddProjectForm, addHiddenInput, createCheckBox,
  toggleDone, updateData,
};