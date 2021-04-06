export default class Project {
  constructor(title) {
    this.title = title;
    this.content = [];
  }

  changeTitle(string) {
    this.title = string;
  }
};