import Project from './project';

export default class Todo {
  static mainList = [];

  static priorityText = ['Low', 'Medium', 'High'];

  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  addToProject(id) {
    Project.mainList[id].addTodo(this);
  }

  changeAttr(attr, string) {
    this[attr] = string;
  }

  showTask() {
    const props = Object.values(this);
    const arr = [];
    for (let i = 0; i < 3; i += 1) {
      arr.push(props[i]);
    }
    arr.push(Todo.priorityText[props[3]]);
    arr.push(Project.mainList[props[4]].title);

    const tr = document.createElement('tr');
    for (let i = 0; i < arr.length; i += 1) {
      const td = document.createElement('td');
      td.textContent = arr[i];
      tr.appendChild(td);
    }
    return tr;
  }
}
