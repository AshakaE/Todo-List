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
      this.title = string;
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

var clearAddTaskForm = function clearAddTaskForm() {
  var taskInputs = findTaskInputs();
  taskInputs.forEach(function (node) {
    if (node.tagName === 'INPUT') {
      node.value = '';
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwibmV3cHJvamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwidGFzayIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiZG9uZSIsImFkZFRvUHJvamVjdCIsImlkIiwiYWRkVG9kbyIsImF0dHIiLCJwcm9wcyIsImZpbmRQcm9wcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ1dGlscyIsImtleXMiLCJjaGFuZ2VBdHRyIiwicHJvamVjdHNMaXN0IiwiZWRpdFByb2plY3RzTGlzdCIsInRvZ2dsZVNob3dFbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbmRUYXNrSW5wdXRzIiwidHlwZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGVhckFkZFRhc2tGb3JtIiwidGFza0lucHV0cyIsIm5vZGUiLCJ0YWdOYW1lIiwiY2xlYXJBZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbkNsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiYWRkSGlkZGVuSW5wdXQiLCJmb3JtIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwidG9nZ2xlRG9uZSIsImNoZWNrZWQiLCJjcmVhdGVDaGVja0JveCIsInRkIiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsInRhc2tJZCIsImZpbmRUYXNrIiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwb3B1bGF0ZVRhc2tGb3JtIiwiYWRkRWRpdEV2ZW50IiwiYWRkRGVsZXRlRXZlbnQiLCJyZW1vdmUiLCJjcmVhdGVCdXR0b24iLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwic2hvd1Rhc2siLCJmb3JtYXRQcm9wcyIsInRyIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInNob3dJbml0aWFsVGFza3MiLCJ0b2RvQ2xhc3MiLCJ0YXNrVGFibGUiLCJwcmVzZW50VGFzayIsInNob3dFZGl0ZWRUYXNrIiwidGFza05vZGUiLCJjaGlsZE5vZGVzIiwidGFza1ZhbHVlcyIsInNob3dQcm9qZWN0VGFza3MiLCJ1bE90aGVyIiwidWwiLCJwcm9qZWN0SWQiLCJsaSIsImxhc3RDaGlsZCIsInNob3dUYXNrc2J1dHRvbiIsInNob3dQcm9qZWN0IiwidGRFeHRyYSIsInByZXNlbnRQcm9qZWN0IiwiZXZlbnQiLCJuZXdQcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBQ0EsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUNBSSxlQUFhLENBQUNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNDLDJEQUFBLENBQXVCUixXQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBUSxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCTCxjQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BLElBQU1RLFVBQVUsR0FBRyxTQUFi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QUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUFnSCxvREFBQTs7QUFDQSxJQUFJekgsNkRBQUEsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQSxNQUFNMEgsVUFBVSxHQUFHLElBQUkxSCw2Q0FBSixDQUFZLFNBQVosQ0FBbkI7QUFDQTtBQUNEOztBQUVEOEMsa0RBQUEsQ0FBbUI5Qyw2Q0FBbkI7QUFDQThDLGtEQUFBLENBQW1COUMsNkNBQW5CO0FBQ0E4QyxzREFBQSxDQUF1Qi9DLDBDQUF2QjtBQUVBMEgsaURBQUE7QUFDQUEsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUE7QUFDQUEsNkNBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG5jb25zdCBsb2FkQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFRvZG8sICdUYXNrcycpO1xuICAgIHV0aWwudXBkYXRlRGF0YShQcm9qZWN0LCAnUHJvamVjdHMnKTtcbiAgICB1dGlsLnByZXNlbnRUYXNrKFRvZG8sIG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNhdmVUYXNrID0gKCkgPT4ge1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2F2ZScpO1xuICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlO1xuICAgIFRvZG8ubWFpbkxpc3RbZWRpdGVkVGFza10uZWRpdFRhc2soKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTdWJtaXQnKTtcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodXRpbC5wcm9qZWN0SW5wdXQoKSk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybShwcm9qZWN0KTtcbiAgICB1dGlsLnByZXNlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dQcm9qZWN0cycpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1NlY3Rpb24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQodGFibGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldEluaXRpdGFsRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKSA/PyBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdCguLi5PYmplY3QudmFsdWVzKHByb2plY3QpKTtcbiAgfSk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSkgPz8gW107XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi5PYmplY3QudmFsdWVzKHRhc2spKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzaywgc2hvd1Byb2plY3RzLCBzZXRJbml0aXRhbERhdGEsXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gUHJvamVjdC5tYWluTGlzdC5sZW5ndGg7XG4gICAgUHJvamVjdC5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUoc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHN0cmluZztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuY29udGVudC5wdXNoKHRvZG8pO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XG4gICAgfVxuICAgIHV0aWxzLnNob3dFZGl0ZWRUYXNrKHRoaXMpO1xuICB9XG59XG4iLCJjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuY29uc3QgZWRpdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdCcpO1xuXG5jb25zdCB0b2dnbGVTaG93RWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuY29uc3QgZmluZFRhc2tJbnB1dHMgPSAodHlwZSA9ICdpbicpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXR5cGU9XCIke3R5cGV9XCJdYCk7XG5cbmNvbnN0IGNsZWFyQWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgbm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgdGFza0lucHV0cyA9ICh0eXBlID0gJ2luJykgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHModHlwZSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3Qgc2hvd01haW5MaXN0ID0gKHByb2plY3RDbGFzcykgPT4ge1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0VG9Gb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xufTtcblxuY29uc3QgcHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXQudmFsdWU7XG59O1xuXG5jb25zdCBhZGRIaWRkZW5JbnB1dCA9IChmb3JtLCB0YXNrKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lkJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmluZGV4KTtcbiAgZm9ybS5pbnNlcnRCZWZvcmUoaW5wdXQsIGZvcm0uZmlyc3RDaGlsZCk7XG59O1xuXG5jb25zdCB0b2dnbGVEb25lID0gKHRhc2spID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xuICBpZiAoaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHRhc2suZG9uZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGFzay5kb25lID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNoZWNrQm94ID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGlucHV0LmRhdGFzZXQudGFza0lkID0gdGFzay5pbmRleDtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRvZ2dsZURvbmUodGFzayk7XG4gIH0pO1xuICB0ZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiB0ZDtcbn07XG5cbmNvbnN0IGZpbmRUYXNrID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCB1cGRhdGVEYXRhID0gKGNsYXNzbmFtZSwgdHlwZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeShjbGFzc25hbWUubWFpbkxpc3QpKTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlVGFza0Zvcm0gPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGFza0lucHV0c1tpXTtcbiAgICBlbGVtZW50LnZhbHVlID0gdGFzay5maW5kUHJvcHMoKVtpXTtcbiAgfVxuICByZXR1cm4gdGFza0lucHV0cztcbn07XG5cbmNvbnN0IGFkZEVkaXRFdmVudCA9ICh0YXNrLCBidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVsYXRlVGFza0Zvcm0odGFzayk7XG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgIGFkZEhpZGRlbklucHV0KGVkaXRUYXNrRm9ybSwgdGFzayk7XG4gICAgdG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGREZWxldGVFdmVudCA9IChjbGFzc05hbWUsIHRhc2ssIGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmluZFRhc2sodGFzay5pbmRleCkucmVtb3ZlKCk7XG4gICAgZGVsZXRlIGNsYXNzTmFtZS5tYWluTGlzdFt0YXNrLmluZGV4XTtcbiAgICB1cGRhdGVEYXRhKGNsYXNzTmFtZSwgJ1Rhc2tzJyk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgdGFzaywgdHlwZSwgc3R5bGUpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICBidXR0b24uZGF0YXNldC5pZCA9IHRhc2suaW5kZXg7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xuICAgIGFkZEVkaXRFdmVudCh0YXNrLCBidXR0b24pO1xuICB9IGVsc2Uge1xuICAgIGFkZERlbGV0ZUV2ZW50KGNsYXNzTmFtZSwgdGFzaywgYnV0dG9uKTtcbiAgfVxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3Qgc2hvd1Rhc2sgPSAoY2xhc3NOYW1lLCB0YXNrKSA9PiB7XG4gIGNvbnN0IGFyciA9IHRhc2suZm9ybWF0UHJvcHMoKTtcblxuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgfVxuICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKGNsYXNzTmFtZSwgdGFzaywgJ2VkaXQnLCAnaW5mbycpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oY2xhc3NOYW1lLCB0YXNrLCAnZGVsZXRlJywgJ2RhbmdlcicpO1xuICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KHRhc2spKTtcbiAgdGQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgdHIuZGF0YXNldC5pZCA9IHRhc2suaW5kZXg7XG4gIHJldHVybiB0cjtcbn07XG5cbmNvbnN0IHNob3dJbml0aWFsVGFza3MgPSAodG9kb0NsYXNzKSA9PiB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdG9kb0NsYXNzLm1haW5MaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHNob3dUYXNrKHRvZG9DbGFzcywgdGFzaykpO1xuICB9KTtcbn07XG5cbmNvbnN0IHByZXNlbnRUYXNrID0gKGNsYXNzTmFtZSwgdGFzaykgPT4ge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZChzaG93VGFzayhjbGFzc05hbWUsIHRhc2spKTtcbn07XG5cbmNvbnN0IHNob3dFZGl0ZWRUYXNrID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xuICBjb25zdCBhcnIgPSB0YXNrTm9kZS5jaGlsZE5vZGVzO1xuICBjb25zdCB0YXNrVmFsdWVzID0gdGFzay5mb3JtYXRQcm9wcygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaV07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV07XG4gIH1cbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5pbmRleH1cIl1gKTtcbiAgY29uc3QgdWxPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdC5pbmRleH1cIl1gKTtcbiAgaWYgKHVsT3RoZXIgIT09IG51bGwpIHtcbiAgICB1bE90aGVyLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmluZGV4O1xuICBwcm9qZWN0LmNvbnRlbnQuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfSAtIGR1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuICB0ci5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQodWwpO1xufTtcblxuY29uc3Qgc2hvd1Rhc2tzYnV0dG9uID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pbmRleDtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnknO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBUYXNrcyc7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93UHJvamVjdFRhc2tzKHByb2plY3QpO1xuICB9KTtcbiAgdGQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcmV0dXJuIHRkO1xufTtcblxuY29uc3Qgc2hvd1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIHRyLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pbmRleDtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCB0ZEV4dHJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgdGQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBjb25zdCBidXR0b24gPSBzaG93VGFza3NidXR0b24ocHJvamVjdCk7XG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgdHIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGRFeHRyYSk7XG4gIHJldHVybiB0cjtcbn07XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9IChwcm9qZWN0Q2xhc3MpID0+IHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNUYWJsZScpO1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHNob3dQcm9qZWN0KHByb2plY3QpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcmVzZW50UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzVGFibGUnKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3QocHJvamVjdCkpO1xufTtcblxuZXhwb3J0IHtcbiAgdG9nZ2xlU2hvd0VsZW1lbnQsIHNob3dNYWluTGlzdCwgdGFza0lucHV0cywgc2hvd1Rhc2ssIHByb2plY3RJbnB1dCwgc2hvd1Byb2plY3QsXG4gIGFkZFByb2plY3RUb0Zvcm0sIGZpbmRUYXNrLCBjbGVhckFkZFRhc2tGb3JtLCBjbGVhckFkZFByb2plY3RGb3JtLCBhZGRIaWRkZW5JbnB1dCwgY3JlYXRlQ2hlY2tCb3gsXG4gIHRvZ2dsZURvbmUsIHVwZGF0ZURhdGEsIHNob3dQcm9qZWN0cywgc2hvd0luaXRpYWxUYXNrcywgcG9wdWxhdGVUYXNrRm9ybSwgYWRkRWRpdEV2ZW50LFxuICBhZGREZWxldGVFdmVudCwgY3JlYXRlQnV0dG9uLCBwcmVzZW50VGFzaywgc2hvd0VkaXRlZFRhc2ssIHNob3dUYXNrc2J1dHRvbiwgcHJlc2VudFByb2plY3QsXG4gIHNob3dQcm9qZWN0VGFza3MsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5ldmVudC5zZXRJbml0aXRhbERhdGEoKTtcbmlmIChQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ2RlZmF1bHQnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xufVxuXG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG51dGlscy5zaG93UHJvamVjdHMoUHJvamVjdCk7XG51dGlscy5zaG93SW5pdGlhbFRhc2tzKFRvZG8pO1xuXG5ldmVudC5zaG93UHJvamVjdHMoKTtcbmV2ZW50LmxvYWRBZGRQcm9qZWN0KCk7XG5ldmVudC5sb2FkQWRkVGFzaygpO1xuZXZlbnQuc3VibWl0VGFzaygpO1xuZXZlbnQuc3VibWl0UHJvamVjdCgpO1xuZXZlbnQuc2F2ZVRhc2soKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=