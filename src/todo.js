import Project from './project';
import * as utils from './utility';


export default class Todo {
  static mainList = [];

  static priorityText = ['Low', 'Medium', 'High'];

  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.index = Todo.mainList.length;
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  addToProject(id) {
    Project.mainList[id].addTodo(this);
  }

  changeAttr(attr, string) {
    this[attr] = string;
  }

  findProps() {
    return Object.values(this);
  }

  formatProps() {
    const props = this.findProps();
    const arr = [];
    for (let i = 0; i < 3; i += 1) {
      arr.push(props[i]);
    }
    arr.push(Todo.priorityText[props[3]]);
    arr.push(Project.mainList[props[4]].title);
    return arr;
  }

  populateTaskForm() {
    const taskInputs = document.querySelectorAll('[data-type="out"]');
    for (let i = 0; i < taskInputs.length; i += 1) {
      const element = taskInputs[i];
      element.value = this.findProps()[i];
    }
    return taskInputs;
  }

  addEditEvent(button) {
    button.addEventListener('click', () => {
      this.populateTaskForm();
      const editTaskForm = document.getElementById('editTaskForm');
      utils.addHiddenInput(editTaskForm, this);
      utils.toggleShowElement(editTaskForm);
    });
  }

  addDeleteEvent(button) {
    button.addEventListener('click', () => {
      utils.findTask(this.index).remove()
      delete Todo.mainList[this.index]
      console.log(Todo.mainList)
    });
  }

  createButton(type, style) {
    const button = document.createElement('button');
    button.className = `btn btn-outline-${style} edit__button mx-2`;
    button.dataset.type = `${type}-task`;
    button.dataset.id = this.index;
    button.textContent = type.toUpperCase();
    if (type === 'edit') {
      this.addEditEvent(button)
    } else {
      this.addDeleteEvent(button)
    }
    return button;
  }

  showTask() {
    const arr = this.formatProps();

    const tr = document.createElement('tr');
    for (let i = 0; i < arr.length; i += 1) {
      const td = document.createElement('td');
      td.textContent = arr[i];
      tr.appendChild(td);
    }
    const editButton = this.createButton('edit', 'info');
    const deleteButton = this.createButton('delete', 'danger');
    const td = document.createElement('td');
    td.appendChild(editButton);
    td.appendChild(deleteButton);
    tr.appendChild(td);
    tr.dataset.id = this.index;
    return tr;
  }

  editTask() {
    const arr = utils.taskInputs('out');
    const keys = Object.keys(this);
    for (let i = 0; i < arr.length; i += 1) {
      this.changeAttr(keys[i], arr[i]);
    }
    this.showEditedTask()
  }

  showEditedTask() {
    const task = document.querySelector(`tr[data-id="${this.index}"]`)
    const arr = task.childNodes
    const taskValues = this.formatProps();
    for (let i = 0; i < 5; i += 1) {
      const element = arr[i];
      element.textContent = taskValues[i]
      
    }
  }
}
