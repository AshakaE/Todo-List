import * as util from './utility';
import Project from './project';

const addTaskForm = document.getElementById('addTaskForm');
const addProjectForm = document.getElementById('addProjectForm');

function loadAddTask() {
  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', () => {
    util.toggleShowElement(addTaskForm);
  });
}

function loadAddProject() {
  const addProjectButton = document.getElementById('addProjectButton');
  addProjectButton.addEventListener('click', () => {
    util.toggleShowElement(addProjectForm);
  });
}

function submitTask() {
  const submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', () => {
    util.showTask(util.createTask());
    util.toggleShowElement(addTaskForm);
  });
}

function submitProject() {
  const submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', () => {
    util.addProjectToForm(util.createProject());
    util.toggleShowElement(addProjectForm);
  });
}

function loadEditTask() {
  const editButton =  document.querySelector(`[data-id="${id}"]`)
}

export {
  loadAddTask, submitTask, loadAddProject, submitProject,
};