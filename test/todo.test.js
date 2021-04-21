import Project from '../src/project';
import Todo from '../src/todo';

const myProject = new Project('myTitle');

describe('change attr', () => {
  const myTodo = new Todo('myTodoTitle', 'myDescription', '2021-04-21', 1, 0);

  test('it change the attribute given', () => {
    myTodo.changeAttr('title', 'myTodoNewTitle');
    expect(myTodo.title).toBe('myTodoNewTitle');
  });
});