export default class Project {
  static mainList = [];

  constructor(title) {
    this.title = title;
    this.content = [];
    this.index = Project.mainList.length;
    Project.mainList.push(this);
  }

  changeTitle(string) {
    this.title = string;
  }

  addTodo(todo) {
    this.content.push(todo);
  }

  showTasksbutton() {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.dataset.projectId = this.index;
    button.className = 'btn btn-sm btn-outline-primary';
    button.textContent = 'Show Tasks';
    button.addEventListener('click', () => {
      this.showProjectTasks()
    })
    td.appendChild(button);
    return td;
  }

  showProject() {
    const tr = document.createElement('tr');
    tr.dataset.projectId = this.index;
    const td = document.createElement('td');
    const tdExtra = document.createElement('td');
    td.textContent = this.title;
    const button = this.showTasksbutton();
    tr.appendChild(td);
    tr.appendChild(button);
    tr.appendChild(tdExtra);
    return tr;
  }

  showProjectTasks() {
    const tr = document.querySelector(`tr[data-project-id="${this.index}"]`)
    const ulOther = document.querySelector(`ul[data-project-id="${this.index}"]`)
    if (ulOther !== null) {
      ulOther.remove()
    }
    const ul = document.createElement('ul');
      ul.dataset.projectId = this.index;
      this.content.forEach(task => {
        const li = document.createElement('li')
        li.textContent = `${task.title} - due: ${task.dueDate}`
        ul.appendChild(li)
      })
      tr.lastChild.appendChild(ul);
  }
}