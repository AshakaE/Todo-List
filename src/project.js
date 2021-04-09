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
}