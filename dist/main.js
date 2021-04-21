/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAddTask": () => (/* binding */ loadAddTask),
/* harmony export */   "submitTask": () => (/* binding */ submitTask),
/* harmony export */   "loadAddProject": () => (/* binding */ loadAddProject),
/* harmony export */   "submitProject": () => (/* binding */ submitProject),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "setInititalData": () => (/* binding */ setInititalData)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var addTaskForm = document.getElementById('addTaskForm');
var addProjectForm = document.getElementById('addProjectForm');
var editTaskForm = document.getElementById('editTaskForm');

var loadAddTask = function loadAddTask() {
  var addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
  });
};

var loadAddProject = function loadAddProject() {
  var addProjectButton = document.getElementById('addProjectButton');
  addProjectButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
  });
};

var submitTask = function submitTask() {
  var submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', function () {
    var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(_utility__WEBPACK_IMPORTED_MODULE_0__.taskInputs()));

    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.presentTask(_todo__WEBPACK_IMPORTED_MODULE_1__.default, newTask);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
};

var saveTask = function saveTask() {
  var editTaskButton = document.getElementById('formSave');
  editTaskButton.addEventListener('click', function () {
    var editedTask = document.querySelector('[name="id"]').value;
    _todo__WEBPACK_IMPORTED_MODULE_1__.default.mainList[editedTask].editTask();
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(editTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
};

var submitProject = function submitProject() {
  var submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', function () {
    var project = new _project__WEBPACK_IMPORTED_MODULE_2__.default(_utility__WEBPACK_IMPORTED_MODULE_0__.projectInput());
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.presentProject(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddProjectForm();
  });
};

var showProjects = function showProjects() {
  var button = document.getElementById('showProjects');
  var table = document.querySelector('.projectsSection');
  button.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(table);
  });
};

var setInititalData = function setInititalData() {
  var _JSON$parse, _JSON$parse2;

  var projects = (_JSON$parse = JSON.parse(localStorage.getItem('Projects'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  projects.forEach(function (project) {
    /* eslint-disable no-unused-vars */
    var newproject = _construct(_project__WEBPACK_IMPORTED_MODULE_2__.default, _toConsumableArray(Object.values(project)));
  });
  var tasks = (_JSON$parse2 = JSON.parse(localStorage.getItem('Tasks'))) !== null && _JSON$parse2 !== void 0 ? _JSON$parse2 : [];
  tasks.forEach(function (task) {
    if (task) {
      var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(Object.values(task)));
      /* eslint-enable no-unused-vars */

    }
  });
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Project = /*#__PURE__*/function () {
  function Project(title) {
    _classCallCheck(this, Project);

    this.title = title;
    this.content = [];
    this.index = Project.mainList.length;
    Project.mainList.push(this);
  }

  _createClass(Project, [{
    key: "changeTitle",
    value: function changeTitle(string) {
      if (string === '') {
        throw new Error('MissingError: Title cannot be blank');
      } else {
        this.title = string;
      }
    }
  }, {
    key: "addTodo",
    value: function addTodo(todo) {
      this.content.push(todo);
    }
  }]);

  return Project;
}();

_defineProperty(Project, "mainList", []);



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority, project) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.index = Todo.mainList.length;
    this.done = false;
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  _createClass(Todo, [{
    key: "addToProject",
    value: function addToProject(id) {
      _project__WEBPACK_IMPORTED_MODULE_0__.default.mainList[id].addTodo(this);
    }
  }, {
    key: "changeAttr",
    value: function changeAttr(attr, string) {
      this[attr] = string;
    }
  }, {
    key: "findProps",
    value: function findProps() {
      return Object.values(this);
    }
  }, {
    key: "formatProps",
    value: function formatProps() {
      var props = this.findProps();
      var arr = [];

      for (var i = 0; i < 3; i += 1) {
        arr.push(props[i]);
      }

      arr.push(Todo.priorityText[props[3]]);
      arr.push(_project__WEBPACK_IMPORTED_MODULE_0__.default.mainList[props[4]].title);
      return arr;
    }
  }, {
    key: "editTask",
    value: function editTask() {
      var arr = _utility__WEBPACK_IMPORTED_MODULE_1__.taskInputs('out');
      var keys = Object.keys(this);

      for (var i = 0; i < arr.length; i += 1) {
        this.changeAttr(keys[i], arr[i]);
      }

      _utility__WEBPACK_IMPORTED_MODULE_1__.showEditedTask(this);
    }
  }]);

  return Todo;
}();

_defineProperty(Todo, "mainList", []);

_defineProperty(Todo, "priorityText", ['Low', 'Medium', 'High']);



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleShowElement": () => (/* binding */ toggleShowElement),
/* harmony export */   "showMainList": () => (/* binding */ showMainList),
/* harmony export */   "taskInputs": () => (/* binding */ taskInputs),
/* harmony export */   "showTask": () => (/* binding */ showTask),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "showProject": () => (/* binding */ showProject),
/* harmony export */   "addProjectToForm": () => (/* binding */ addProjectToForm),
/* harmony export */   "findTask": () => (/* binding */ findTask),
/* harmony export */   "clearAddTaskForm": () => (/* binding */ clearAddTaskForm),
/* harmony export */   "clearAddProjectForm": () => (/* binding */ clearAddProjectForm),
/* harmony export */   "addHiddenInput": () => (/* binding */ addHiddenInput),
/* harmony export */   "createCheckBox": () => (/* binding */ createCheckBox),
/* harmony export */   "toggleDone": () => (/* binding */ toggleDone),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "showInitialTasks": () => (/* binding */ showInitialTasks),
/* harmony export */   "populateTaskForm": () => (/* binding */ populateTaskForm),
/* harmony export */   "addEditEvent": () => (/* binding */ addEditEvent),
/* harmony export */   "addDeleteEvent": () => (/* binding */ addDeleteEvent),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "presentTask": () => (/* binding */ presentTask),
/* harmony export */   "showEditedTask": () => (/* binding */ showEditedTask),
/* harmony export */   "showTasksbutton": () => (/* binding */ showTasksbutton),
/* harmony export */   "presentProject": () => (/* binding */ presentProject),
/* harmony export */   "showProjectTasks": () => (/* binding */ showProjectTasks)
/* harmony export */ });
var projectsList = document.getElementById('project');
var editProjectsList = document.getElementById('editProject');

var toggleShowElement = function toggleShowElement(element) {
  element.classList.toggle('hide');
};

var findTaskInputs = function findTaskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  return document.querySelectorAll("[data-type=\"".concat(type, "\"]"));
};

var resetValue = function resetValue(node) {
  if (node.tagName === 'INPUT') {
    node.value = '';
  }
};

var clearAddTaskForm = function clearAddTaskForm() {
  var taskInputs = findTaskInputs();
  taskInputs.forEach(function (node) {
    return resetValue(node);
  });
};

var clearAddProjectForm = function clearAddProjectForm() {
  var projectInput = document.getElementById('projectTitle');
  projectInput.value = '';
};

var taskInputs = function taskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  var taskInputs = findTaskInputs(type);
  var arr = [];
  taskInputs.forEach(function (node) {
    arr.push(node.value);
  });
  return arr;
};

var showMainList = function showMainList(projectClass) {
  projectClass.mainList.forEach(function (project, index) {
    var option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    var optionClone = option.cloneNode(true);
    projectsList.appendChild(option);
    editProjectsList.appendChild(optionClone);
  });
};

var addProjectToForm = function addProjectToForm(project) {
  var option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  var optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
};

var projectInput = function projectInput() {
  var projectInput = document.getElementById('projectTitle');
  return projectInput.value;
};

var addHiddenInput = function addHiddenInput(form, task) {
  var _document$querySelect;

  var input = (_document$querySelect = document.querySelector('[name="id"]')) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'id');
  input.setAttribute('value', task.index);
  form.insertBefore(input, form.firstChild);
};

var toggleDone = function toggleDone(task) {
  var input = document.querySelector("[data-task-id=\"".concat(task.index, "\"]"));

  if (input.checked === true) {
    task.done = true;
  } else {
    task.done = false;
  }
};

var createCheckBox = function createCheckBox(task) {
  var td = document.createElement('td');
  var input = document.createElement('input');
  input.className = 'form-check-input';
  input.setAttribute('type', 'checkbox');
  input.dataset.taskId = task.index;
  input.addEventListener('change', function () {
    toggleDone(task);
  });
  td.appendChild(input);
  return td;
};

var findTask = function findTask(id) {
  var task = document.querySelector("tr[data-id=\"".concat(id, "\"]"));
  return task;
};

var updateData = function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
};

var populateTaskForm = function populateTaskForm(task) {
  var taskInputs = document.querySelectorAll('[data-type="out"]');

  for (var i = 0; i < taskInputs.length; i += 1) {
    var element = taskInputs[i];
    element.value = task.findProps()[i];
  }

  return taskInputs;
};

var addEditEvent = function addEditEvent(task, button) {
  button.addEventListener('click', function () {
    populateTaskForm(task);
    var editTaskForm = document.getElementById('editTaskForm');
    addHiddenInput(editTaskForm, task);
    toggleShowElement(editTaskForm);
  });
};

var addDeleteEvent = function addDeleteEvent(className, task, button) {
  button.addEventListener('click', function () {
    findTask(task.index).remove();
    delete className.mainList[task.index];
    updateData(className, 'Tasks');
  });
};

var createButton = function createButton(className, task, type, style) {
  var button = document.createElement('button');
  button.className = "btn btn-outline-".concat(style, " edit__button mx-2");
  button.dataset.type = "".concat(type, "-task");
  button.dataset.id = task.index;
  button.textContent = type.toUpperCase();

  if (type === 'edit') {
    addEditEvent(task, button);
  } else {
    addDeleteEvent(className, task, button);
  }

  return button;
};

var showTask = function showTask(className, task) {
  var arr = task.formatProps();
  var tr = document.createElement('tr');

  for (var i = 0; i < arr.length; i += 1) {
    var _td = document.createElement('td');

    _td.textContent = arr[i];
    tr.appendChild(_td);
  }

  var editButton = createButton(className, task, 'edit', 'info');
  var deleteButton = createButton(className, task, 'delete', 'danger');
  var td = document.createElement('td');
  tr.appendChild(createCheckBox(task));
  td.appendChild(editButton);
  td.appendChild(deleteButton);
  tr.appendChild(td);
  tr.dataset.id = task.index;
  return tr;
};

var showInitialTasks = function showInitialTasks(todoClass) {
  var taskTable = document.querySelector('.taskTable');
  todoClass.mainList.forEach(function (task) {
    taskTable.appendChild(showTask(todoClass, task));
  });
};

var presentTask = function presentTask(className, task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(showTask(className, task));
};

var showEditedTask = function showEditedTask(task) {
  var taskNode = document.querySelector("tr[data-id=\"".concat(task.index, "\"]"));
  var arr = taskNode.childNodes;
  var taskValues = task.formatProps();

  for (var i = 0; i < 5; i += 1) {
    var element = arr[i];
    element.textContent = taskValues[i];
  }
};

var showProjectTasks = function showProjectTasks(project) {
  var tr = document.querySelector("tr[data-project-id=\"".concat(project.index, "\"]"));
  var ulOther = document.querySelector("ul[data-project-id=\"".concat(project.index, "\"]"));

  if (ulOther !== null) {
    ulOther.remove();
  }

  var ul = document.createElement('ul');
  ul.dataset.projectId = project.index;
  project.content.forEach(function (task) {
    var li = document.createElement('li');
    li.textContent = "".concat(task.title, " - due: ").concat(task.dueDate);
    ul.appendChild(li);
  });
  tr.lastChild.appendChild(ul);
};

var showTasksbutton = function showTasksbutton(project) {
  var td = document.createElement('td');
  var button = document.createElement('button');
  button.dataset.projectId = project.index;
  button.className = 'btn btn-sm btn-outline-primary';
  button.textContent = 'Show Tasks';
  button.addEventListener('click', function () {
    showProjectTasks(project);
  });
  td.appendChild(button);
  return td;
};

var showProject = function showProject(project) {
  var tr = document.createElement('tr');
  tr.dataset.projectId = project.index;
  var td = document.createElement('td');
  var tdExtra = document.createElement('td');
  td.textContent = project.title;
  var button = showTasksbutton(project);
  tr.appendChild(td);
  tr.appendChild(button);
  tr.appendChild(tdExtra);
  return tr;
};

var showProjects = function showProjects(projectClass) {
  var table = document.querySelector('.projectsTable');
  projectClass.mainList.forEach(function (project) {
    table.appendChild(showProject(project));
  });
};

var presentProject = function presentProject(project) {
  var table = document.querySelector('.projectsTable');
  table.appendChild(showProject(project));
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




_events__WEBPACK_IMPORTED_MODULE_0__.setInititalData();

if (_project__WEBPACK_IMPORTED_MODULE_2__.default.mainList.length === 0) {
  /* eslint-disable no-unused-vars */
  var newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.default('default');
  /* eslint-enable no-unused-vars */
}

_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_utility__WEBPACK_IMPORTED_MODULE_1__.showProjects(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_utility__WEBPACK_IMPORTED_MODULE_1__.showInitialTasks(_todo__WEBPACK_IMPORTED_MODULE_3__.default);
_events__WEBPACK_IMPORTED_MODULE_0__.showProjects();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
_events__WEBPACK_IMPORTED_MODULE_0__.saveTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwibmV3cHJvamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwidGFzayIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwiRXJyb3IiLCJ0b2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInV0aWxzIiwia2V5cyIsImNoYW5nZUF0dHIiLCJwcm9qZWN0c0xpc3QiLCJlZGl0UHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJ0eXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInJlc2V0VmFsdWUiLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkVGFza0Zvcm0iLCJ0YXNrSW5wdXRzIiwiY2xlYXJBZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbkNsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiYWRkSGlkZGVuSW5wdXQiLCJmb3JtIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwidG9nZ2xlRG9uZSIsImNoZWNrZWQiLCJjcmVhdGVDaGVja0JveCIsInRkIiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsInRhc2tJZCIsImZpbmRUYXNrIiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwb3B1bGF0ZVRhc2tGb3JtIiwiYWRkRWRpdEV2ZW50IiwiYWRkRGVsZXRlRXZlbnQiLCJyZW1vdmUiLCJjcmVhdGVCdXR0b24iLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwic2hvd1Rhc2siLCJmb3JtYXRQcm9wcyIsInRyIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInNob3dJbml0aWFsVGFza3MiLCJ0b2RvQ2xhc3MiLCJ0YXNrVGFibGUiLCJwcmVzZW50VGFzayIsInNob3dFZGl0ZWRUYXNrIiwidGFza05vZGUiLCJjaGlsZE5vZGVzIiwidGFza1ZhbHVlcyIsInNob3dQcm9qZWN0VGFza3MiLCJ1bE90aGVyIiwidWwiLCJwcm9qZWN0SWQiLCJsaSIsImxhc3RDaGlsZCIsInNob3dUYXNrc2J1dHRvbiIsInNob3dQcm9qZWN0IiwidGRFeHRyYSIsInByZXNlbnRQcm9qZWN0IiwiZXZlbnQiLCJuZXdQcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBQ0EsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUNBSSxlQUFhLENBQUNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNDLDJEQUFBLENBQXVCUixXQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBUSxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCTCxjQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9B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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUFrSCxvREFBQTs7QUFDQSxJQUFJM0gsNkRBQUEsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQSxNQUFNNEgsVUFBVSxHQUFHLElBQUk1SCw2Q0FBSixDQUFZLFNBQVosQ0FBbkI7QUFDQTtBQUNEOztBQUVEK0Msa0RBQUEsQ0FBbUIvQyw2Q0FBbkI7QUFDQStDLGtEQUFBLENBQW1CL0MsNkNBQW5CO0FBQ0ErQyxzREFBQSxDQUF1QmhELDBDQUF2QjtBQUVBNEgsaURBQUE7QUFDQUEsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUE7QUFDQUEsNkNBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG5jb25zdCBsb2FkQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFRvZG8sICdUYXNrcycpO1xuICAgIHV0aWwudXBkYXRlRGF0YShQcm9qZWN0LCAnUHJvamVjdHMnKTtcbiAgICB1dGlsLnByZXNlbnRUYXNrKFRvZG8sIG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNhdmVUYXNrID0gKCkgPT4ge1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2F2ZScpO1xuICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlO1xuICAgIFRvZG8ubWFpbkxpc3RbZWRpdGVkVGFza10uZWRpdFRhc2soKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTdWJtaXQnKTtcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodXRpbC5wcm9qZWN0SW5wdXQoKSk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybShwcm9qZWN0KTtcbiAgICB1dGlsLnByZXNlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dQcm9qZWN0cycpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1NlY3Rpb24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQodGFibGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldEluaXRpdGFsRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKSA/PyBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdCguLi5PYmplY3QudmFsdWVzKHByb2plY3QpKTtcbiAgfSk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSkgPz8gW107XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi5PYmplY3QudmFsdWVzKHRhc2spKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzaywgc2hvd1Byb2plY3RzLCBzZXRJbml0aXRhbERhdGEsXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gUHJvamVjdC5tYWluTGlzdC5sZW5ndGg7XG4gICAgUHJvamVjdC5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUoc3RyaW5nKSB7XG4gICAgaWYgKHN0cmluZyA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZ0Vycm9yOiBUaXRsZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZSA9IHN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBzdGF0aWMgcHJpb3JpdHlUZXh0ID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuaW5kZXggPSBUb2RvLm1haW5MaXN0Lmxlbmd0aDtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmFkZFRvUHJvamVjdChwcm9qZWN0KTtcbiAgICBUb2RvLm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBhZGRUb1Byb2plY3QoaWQpIHtcbiAgICBQcm9qZWN0Lm1haW5MaXN0W2lkXS5hZGRUb2RvKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlQXR0cihhdHRyLCBzdHJpbmcpIHtcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xuICB9XG5cbiAgZmluZFByb3BzKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgZm9ybWF0UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLmZpbmRQcm9wcygpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBhcnIucHVzaChwcm9wc1tpXSk7XG4gICAgfVxuICAgIGFyci5wdXNoKFRvZG8ucHJpb3JpdHlUZXh0W3Byb3BzWzNdXSk7XG4gICAgYXJyLnB1c2goUHJvamVjdC5tYWluTGlzdFtwcm9wc1s0XV0udGl0bGUpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBlZGl0VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB1dGlscy50YXNrSW5wdXRzKCdvdXQnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgICB1dGlscy5zaG93RWRpdGVkVGFzayh0aGlzKTtcbiAgfVxufVxuIiwiY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuY29uc3QgdG9nZ2xlU2hvd0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGZpbmRUYXNrSW5wdXRzID0gKHR5cGUgPSAnaW4nKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10eXBlPVwiJHt0eXBlfVwiXWApO1xuXG5jb25zdCByZXNldFZhbHVlID0gKG5vZGUpID0+IHtcbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgIG5vZGUudmFsdWUgPSAnJztcbiAgfVxufVxuXG5jb25zdCBjbGVhckFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHMoKTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4gcmVzZXRWYWx1ZShub2RlKSk7XG59O1xuXG5jb25zdCBjbGVhckFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgdGFza0lucHV0cyA9ICh0eXBlID0gJ2luJykgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHModHlwZSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3Qgc2hvd01haW5MaXN0ID0gKHByb2plY3RDbGFzcykgPT4ge1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0VG9Gb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xufTtcblxuY29uc3QgcHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXQudmFsdWU7XG59O1xuXG5jb25zdCBhZGRIaWRkZW5JbnB1dCA9IChmb3JtLCB0YXNrKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lkJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmluZGV4KTtcbiAgZm9ybS5pbnNlcnRCZWZvcmUoaW5wdXQsIGZvcm0uZmlyc3RDaGlsZCk7XG59O1xuXG5jb25zdCB0b2dnbGVEb25lID0gKHRhc2spID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xuICBpZiAoaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHRhc2suZG9uZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGFzay5kb25lID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNoZWNrQm94ID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGlucHV0LmRhdGFzZXQudGFza0lkID0gdGFzay5pbmRleDtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRvZ2dsZURvbmUodGFzayk7XG4gIH0pO1xuICB0ZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiB0ZDtcbn07XG5cbmNvbnN0IGZpbmRUYXNrID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCB1cGRhdGVEYXRhID0gKGNsYXNzbmFtZSwgdHlwZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeShjbGFzc25hbWUubWFpbkxpc3QpKTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlVGFza0Zvcm0gPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGFza0lucHV0c1tpXTtcbiAgICBlbGVtZW50LnZhbHVlID0gdGFzay5maW5kUHJvcHMoKVtpXTtcbiAgfVxuICByZXR1cm4gdGFza0lucHV0cztcbn07XG5cbmNvbnN0IGFkZEVkaXRFdmVudCA9ICh0YXNrLCBidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVsYXRlVGFza0Zvcm0odGFzayk7XG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgIGFkZEhpZGRlbklucHV0KGVkaXRUYXNrRm9ybSwgdGFzayk7XG4gICAgdG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGREZWxldGVFdmVudCA9IChjbGFzc05hbWUsIHRhc2ssIGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmluZFRhc2sodGFzay5pbmRleCkucmVtb3ZlKCk7XG4gICAgZGVsZXRlIGNsYXNzTmFtZS5tYWluTGlzdFt0YXNrLmluZGV4XTtcbiAgICB1cGRhdGVEYXRhKGNsYXNzTmFtZSwgJ1Rhc2tzJyk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgdGFzaywgdHlwZSwgc3R5bGUpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICBidXR0b24uZGF0YXNldC5pZCA9IHRhc2suaW5kZXg7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xuICAgIGFkZEVkaXRFdmVudCh0YXNrLCBidXR0b24pO1xuICB9IGVsc2Uge1xuICAgIGFkZERlbGV0ZUV2ZW50KGNsYXNzTmFtZSwgdGFzaywgYnV0dG9uKTtcbiAgfVxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3Qgc2hvd1Rhc2sgPSAoY2xhc3NOYW1lLCB0YXNrKSA9PiB7XG4gIGNvbnN0IGFyciA9IHRhc2suZm9ybWF0UHJvcHMoKTtcblxuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgfVxuICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKGNsYXNzTmFtZSwgdGFzaywgJ2VkaXQnLCAnaW5mbycpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oY2xhc3NOYW1lLCB0YXNrLCAnZGVsZXRlJywgJ2RhbmdlcicpO1xuICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KHRhc2spKTtcbiAgdGQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgdHIuZGF0YXNldC5pZCA9IHRhc2suaW5kZXg7XG4gIHJldHVybiB0cjtcbn07XG5cbmNvbnN0IHNob3dJbml0aWFsVGFza3MgPSAodG9kb0NsYXNzKSA9PiB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdG9kb0NsYXNzLm1haW5MaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHNob3dUYXNrKHRvZG9DbGFzcywgdGFzaykpO1xuICB9KTtcbn07XG5cbmNvbnN0IHByZXNlbnRUYXNrID0gKGNsYXNzTmFtZSwgdGFzaykgPT4ge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZChzaG93VGFzayhjbGFzc05hbWUsIHRhc2spKTtcbn07XG5cbmNvbnN0IHNob3dFZGl0ZWRUYXNrID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xuICBjb25zdCBhcnIgPSB0YXNrTm9kZS5jaGlsZE5vZGVzO1xuICBjb25zdCB0YXNrVmFsdWVzID0gdGFzay5mb3JtYXRQcm9wcygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaV07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV07XG4gIH1cbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5pbmRleH1cIl1gKTtcbiAgY29uc3QgdWxPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5pbmRleH1cIl1gKTtcbiAgaWYgKHVsT3RoZXIgIT09IG51bGwpIHtcbiAgICB1bE90aGVyLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmluZGV4O1xuICBwcm9qZWN0LmNvbnRlbnQuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfSAtIGR1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuICB0ci5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQodWwpO1xufTtcblxuY29uc3Qgc2hvd1Rhc2tzYnV0dG9uID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pbmRleDtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnknO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBUYXNrcyc7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93UHJvamVjdFRhc2tzKHByb2plY3QpO1xuICB9KTtcbiAgdGQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcmV0dXJuIHRkO1xufTtcblxuY29uc3Qgc2hvd1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIHRyLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pbmRleDtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCB0ZEV4dHJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgdGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBjb25zdCBidXR0b24gPSBzaG93VGFza3NidXR0b24ocHJvamVjdCk7XG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgdHIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGRFeHRyYSk7XG4gIHJldHVybiB0cjtcbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9IChwcm9qZWN0Q2xhc3MpID0+IHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNUYWJsZScpO1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHNob3dQcm9qZWN0KHByb2plY3QpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcmVzZW50UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzVGFibGUnKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3QocHJvamVjdCkpO1xufTtcblxuZXhwb3J0IHtcbiAgdG9nZ2xlU2hvd0VsZW1lbnQsIHNob3dNYWluTGlzdCwgdGFza0lucHV0cywgc2hvd1Rhc2ssIHByb2plY3RJbnB1dCwgc2hvd1Byb2plY3QsXG4gIGFkZFByb2plY3RUb0Zvcm0sIGZpbmRUYXNrLCBjbGVhckFkZFRhc2tGb3JtLCBjbGVhckFkZFByb2plY3RGb3JtLCBhZGRIaWRkZW5JbnB1dCwgY3JlYXRlQ2hlY2tCb3gsXG4gIHRvZ2dsZURvbmUsIHVwZGF0ZURhdGEsIHNob3dQcm9qZWN0cywgc2hvd0luaXRpYWxUYXNrcywgcG9wdWxhdGVUYXNrRm9ybSwgYWRkRWRpdEV2ZW50LFxuICBhZGREZWxldGVFdmVudCwgY3JlYXRlQnV0dG9uLCBwcmVzZW50VGFzaywgc2hvd0VkaXRlZFRhc2ssIHNob3dUYXNrc2J1dHRvbiwgcHJlc2VudFByb2plY3QsXG4gIHNob3dQcm9qZWN0VGFza3MsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5ldmVudC5zZXRJbml0aXRhbERhdGEoKTtcbmlmIChQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ2RlZmF1bHQnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xufVxuXG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG51dGlscy5zaG93UHJvamVjdHMoUHJvamVjdCk7XG51dGlscy5zaG93SW5pdGlhbFRhc2tzKFRvZG8pO1xuXG5ldmVudC5zaG93UHJvamVjdHMoKTtcbmV2ZW50LmxvYWRBZGRQcm9qZWN0KCk7XG5ldmVudC5sb2FkQWRkVGFzaygpO1xuZXZlbnQuc3VibWl0VGFzaygpO1xuZXZlbnQuc3VibWl0UHJvamVjdCgpO1xuZXZlbnQuc2F2ZVRhc2soKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=