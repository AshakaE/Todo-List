import Project from './project';

export default class Todo {
  static mainList = [];

  constructor(title, description, dueDate, priority, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.addToProject(project)
    Todo.mainList.push(this);
  }

  addToProject(id) {
   Project.mainList[id].addTodo(this);
  }

  changeAttr(attr, string) {
    this[attr] = string;
  }

  showTask() {
    const props = Object.values(this)
    const tr = document.createElement('tr');
    for (let i = 0; i < props.length; i+= 1) {
      const td =  document.createElement('td');
      td.textContent = props[i];
      tr.appendChild(td);
    }
    return tr
  }
};
