import * as util from './utility';
import Todo from './todo';
import Project from './project';

const addTaskForm = document.getElementById('addTaskForm');
const addProjectForm = document.getElementById('addProjectForm');
const editTaskForm = document.getElementById('editTaskForm');

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
    const newTask = new Todo(...util.taskInputs());
    util.updateData(Todo, 'Tasks');
    util.updateData(Project, 'Projects');
    util.showTask(newTask);
    util.toggleShowElement(addTaskForm);
    util.clearAddTaskForm();
  });
}

function saveTask() {
  const editTaskButton = document.getElementById('formSave');
  editTaskButton.addEventListener('click', () => {
    const editedTask = document.querySelector('[name="id"]').value;
    Todo.mainList[editedTask].editTask();
    util.updateData(Todo, 'Tasks');
    util.updateData(Project, 'Projects');
    util.toggleShowElement(editTaskForm);
    util.clearAddTaskForm();
  });
}

function submitProject() {
  const submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', () => {
    const project = util.createProject();
    util.updateData(Project, 'Projects');
    util.addProjectToForm(project);
    util.showProject(project);
    util.toggleShowElement(addProjectForm);
    util.clearAddProjectForm();
  });
}

function showProjects() {
  const button = document.getElementById('showProjects');
  const table = document.querySelector('.projectsSection');
  button.addEventListener('click', () => {
    util.toggleShowElement(table);
  });
}

function setInititalData() {
  const projects = JSON.parse(localStorage.getItem('Projects')) ?? [];
  projects.forEach(project => {
    /* eslint-disable no-unused-vars */
    const newproject = new Project(...Object.values(project));
  });
  const tasks = JSON.parse(localStorage.getItem('Tasks')) ?? [];
  tasks.forEach(task => {
    if (task) {
      const newTask = new Todo(...Object.values(task));
      /* eslint-enable no-unused-vars */
    }
  });
}

export {
  loadAddTask, submitTask, loadAddProject, submitProject, saveTask, showProjects, setInititalData,
};