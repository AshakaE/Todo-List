import Project from './project';
import Todo from './todo';

const projectsList = document.getElementById('project');

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function findTaskInputs() {
  return document.querySelectorAll('[data-type="in"]');
}

function populateTaskForm(todo) {
  const taskInputs = findTaskInputs()
  for (let i = 0; i < taskInputs.length; i++) {
    const element = taskInputs[i];
    element.value = todo.findProps()[i]
  }
}

function taskInputs() {
  const taskInputs = findTaskInputs()
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
    projectsList.appendChild(option);
  });
}

function addProjectToForm(project) {
  const option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  projectsList.appendChild(option);
}

function createTask() {
  const newTask = new Todo(...taskInputs());
  return newTask;
}

function projectInput() {
  const projectInput = document.getElementById('projectTitle');
  return projectInput.value;
}

function createProject() {
  const newProject = new Project(projectInput());
  return newProject;
}

function showAllTasks() {
  const taskTable = document.querySelector('.taskTable');
  Todo.mainList.forEach(task => {
    taskTable.appendChild(task.showTask());
  });
}

function showTask(task) {
  const taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
}

function findTask(id) {
  const task = document.querySelector(`tr[data-id="${id}"]`)
  return task
}

function editFormTitle() {
  const formTitle = document.querySelector('.form__title')
  formTitle.textContent = 'Edit Task'
}

export {
  toggleShowElement, createTask, showMainList, taskInputs, showAllTasks, showTask, createProject,
  addProjectToForm, editFormTitle, populateTaskForm, findTask
};