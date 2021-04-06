import todo from './todo';

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function createTask() {
  const taskInputs = document.querySelectorAll('[data-type="in"]');
    let arr = [];
    taskInputs.forEach(node => {
      arr.push(node.value);
    });
  let newTask = new todo(...arr);
  return newTask;
}


export { toggleShowElement, createTask };