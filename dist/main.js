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
    _utility__WEBPACK_IMPORTED_MODULE_0__.showTask(newTask);
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
    var project = _utility__WEBPACK_IMPORTED_MODULE_0__.createProject();
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.showProject(project);
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
  }, {
    key: "showTasksbutton",
    value: function showTasksbutton() {
      var _this = this;

      var td = document.createElement('td');
      var button = document.createElement('button');
      button.dataset.projectId = this.index;
      button.className = 'btn btn-sm btn-outline-primary';
      button.textContent = 'Show Tasks';
      button.addEventListener('click', function () {
        _this.showProjectTasks();
      });
      td.appendChild(button);
      return td;
    }
  }, {
    key: "showProject",
    value: function showProject() {
      var tr = document.createElement('tr');
      tr.dataset.projectId = this.index;
      var td = document.createElement('td');
      var tdExtra = document.createElement('td');
      td.textContent = this.title;
      var button = this.showTasksbutton();
      tr.appendChild(td);
      tr.appendChild(button);
      tr.appendChild(tdExtra);
      return tr;
    }
  }, {
    key: "showProjectTasks",
    value: function showProjectTasks() {
      var tr = document.querySelector("tr[data-project-id=\"".concat(this.index, "\"]"));
      var ulOther = document.querySelector("ul[data-project-id=\"".concat(this.index, "\"]"));

      if (ulOther !== null) {
        ulOther.remove();
      }

      var ul = document.createElement('ul');
      ul.dataset.projectId = this.index;
      this.content.forEach(function (task) {
        var li = document.createElement('li');
        li.textContent = "".concat(task.title, " - due: ").concat(task.dueDate);
        ul.appendChild(li);
      });
      tr.lastChild.appendChild(ul);
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
    key: "populateTaskForm",
    value: function populateTaskForm() {
      var taskInputs = document.querySelectorAll('[data-type="out"]');

      for (var i = 0; i < taskInputs.length; i += 1) {
        var element = taskInputs[i];
        element.value = this.findProps()[i];
      }

      return taskInputs;
    }
  }, {
    key: "addEditEvent",
    value: function addEditEvent(button) {
      var _this = this;

      button.addEventListener('click', function () {
        _this.populateTaskForm();

        var editTaskForm = document.getElementById('editTaskForm');
        _utility__WEBPACK_IMPORTED_MODULE_1__.addHiddenInput(editTaskForm, _this);
        _utility__WEBPACK_IMPORTED_MODULE_1__.toggleShowElement(editTaskForm);
      });
    }
  }, {
    key: "addDeleteEvent",
    value: function addDeleteEvent(button) {
      var _this2 = this;

      button.addEventListener('click', function () {
        _utility__WEBPACK_IMPORTED_MODULE_1__.findTask(_this2.index).remove();
        delete Todo.mainList[_this2.index];
        _utility__WEBPACK_IMPORTED_MODULE_1__.updateData(Todo, 'Tasks');
      });
    }
  }, {
    key: "createButton",
    value: function createButton(type, style) {
      var button = document.createElement('button');
      button.className = "btn btn-outline-".concat(style, " edit__button mx-2");
      button.dataset.type = "".concat(type, "-task");
      button.dataset.id = this.index;
      button.textContent = type.toUpperCase();

      if (type === 'edit') {
        this.addEditEvent(button);
      } else {
        this.addDeleteEvent(button);
      }

      return button;
    }
  }, {
    key: "showTask",
    value: function showTask() {
      var arr = this.formatProps();
      var tr = document.createElement('tr');

      for (var i = 0; i < arr.length; i += 1) {
        var _td = document.createElement('td');

        _td.textContent = arr[i];
        tr.appendChild(_td);
      }

      var editButton = this.createButton('edit', 'info');
      var deleteButton = this.createButton('delete', 'danger');
      var td = document.createElement('td');
      tr.appendChild(_utility__WEBPACK_IMPORTED_MODULE_1__.createCheckBox(this));
      td.appendChild(editButton);
      td.appendChild(deleteButton);
      tr.appendChild(td);
      tr.dataset.id = this.index;
      return tr;
    }
  }, {
    key: "editTask",
    value: function editTask() {
      var arr = _utility__WEBPACK_IMPORTED_MODULE_1__.taskInputs('out');
      var keys = Object.keys(this);

      for (var i = 0; i < arr.length; i += 1) {
        this.changeAttr(keys[i], arr[i]);
      }

      this.showEditedTask();
    }
  }, {
    key: "showEditedTask",
    value: function showEditedTask() {
      var task = document.querySelector("tr[data-id=\"".concat(this.index, "\"]"));
      var arr = task.childNodes;
      var taskValues = this.formatProps();

      for (var i = 0; i < 5; i += 1) {
        var element = arr[i];
        element.textContent = taskValues[i];
      }
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
/* harmony export */   "createProject": () => (/* binding */ createProject),
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
/* harmony export */   "showInitialTasks": () => (/* binding */ showInitialTasks)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");

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

var showInitialTasks = function showInitialTasks(todoClass) {
  var taskTable = document.querySelector('.taskTable');
  todoClass.mainList.forEach(function (task) {
    taskTable.appendChild(task.showTask());
  });
};

var showProjects = function showProjects(projectClass) {
  var table = document.querySelector('.projectsTable');
  projectClass.mainList.forEach(function (project) {
    table.appendChild(project.showProject());
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

var createProject = function createProject() {
  var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectInput());
  return newProject;
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

var showTask = function showTask(task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
};

var findTask = function findTask(id) {
  var task = document.querySelector("tr[data-id=\"".concat(id, "\"]"));
  return task;
};

var showProject = function showProject(project) {
  var table = document.querySelector('.projectsTable');
  table.appendChild(project.showProject());
};

var updateData = function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwibmV3cHJvamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwidGFzayIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsInRkIiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJwcm9qZWN0SWQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsInNob3dQcm9qZWN0VGFza3MiLCJhcHBlbmRDaGlsZCIsInRyIiwidGRFeHRyYSIsInNob3dUYXNrc2J1dHRvbiIsInVsT3RoZXIiLCJyZW1vdmUiLCJ1bCIsImxpIiwiZHVlRGF0ZSIsImxhc3RDaGlsZCIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInRhc2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBvcHVsYXRlVGFza0Zvcm0iLCJ1dGlscyIsInR5cGUiLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwiYWRkRWRpdEV2ZW50IiwiYWRkRGVsZXRlRXZlbnQiLCJmb3JtYXRQcm9wcyIsImVkaXRCdXR0b24iLCJjcmVhdGVCdXR0b24iLCJkZWxldGVCdXR0b24iLCJrZXlzIiwiY2hhbmdlQXR0ciIsInNob3dFZGl0ZWRUYXNrIiwiY2hpbGROb2RlcyIsInRhc2tWYWx1ZXMiLCJwcm9qZWN0c0xpc3QiLCJlZGl0UHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaW5kVGFza0lucHV0cyIsImNsZWFyQWRkVGFza0Zvcm0iLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJvcHRpb25DbG9uZSIsImNsb25lTm9kZSIsInNob3dJbml0aWFsVGFza3MiLCJ0b2RvQ2xhc3MiLCJ0YXNrVGFibGUiLCJzaG93VGFzayIsInNob3dQcm9qZWN0IiwiYWRkUHJvamVjdFRvRm9ybSIsImNyZWF0ZVByb2plY3QiLCJuZXdQcm9qZWN0IiwiYWRkSGlkZGVuSW5wdXQiLCJmb3JtIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwidG9nZ2xlRG9uZSIsImNoZWNrZWQiLCJjcmVhdGVDaGVja0JveCIsInRhc2tJZCIsImZpbmRUYXNrIiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBLElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCOztBQUVBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsYUFBYSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQUksZUFBYSxDQUFDQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDQywyREFBQSxDQUF1QlIsV0FBdkI7QUFDRCxHQUZEO0FBR0QsQ0FMRDs7QUFPQSxJQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7QUFDQVEsa0JBQWdCLENBQUNILGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DQywyREFBQSxDQUF1QkwsY0FBdkI7QUFDRCxHQUZEO0FBR0QsQ0FMRDs7QUFPQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQU1DLGdC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LElBQUksQ0FBQ3dHLFNBQUwsQ0FBZUYsU0FBUyxDQUFDekYsUUFBekIsQ0FBM0I7QUFDRCxDQUZEOzs7Ozs7OztVQzNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE0RixvREFBQTs7QUFDQSxJQUFJeEgsNkRBQUEsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQSxNQUFNd0csVUFBVSxHQUFHLElBQUl4Ryw2Q0FBSixDQUFZLFNBQVosQ0FBbkI7QUFDQTtBQUNEOztBQUVEa0Usa0RBQUEsQ0FBbUJsRSw2Q0FBbkI7QUFDQWtFLGtEQUFBLENBQW1CbEUsNkNBQW5CO0FBQ0FrRSxzREFBQSxDQUF1Qm5FLDBDQUF2QjtBQUVBeUgsaURBQUE7QUFDQUEsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUE7QUFDQUEsNkNBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG5jb25zdCBsb2FkQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5jb25zdCBsb2FkQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5jb25zdCBzdWJtaXRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udXRpbC50YXNrSW5wdXRzKCkpO1xuICAgIHV0aWwudXBkYXRlRGF0YShUb2RvLCAnVGFza3MnKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XG4gICAgdXRpbC5zaG93VGFzayhuZXdUYXNrKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmNvbnN0IHNhdmVUYXNrID0gKCkgPT4ge1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2F2ZScpO1xuICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlO1xuICAgIFRvZG8ubWFpbkxpc3RbZWRpdGVkVGFza10uZWRpdFRhc2soKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmNvbnN0IHN1Ym1pdFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1dGlsLmNyZWF0ZVByb2plY3QoKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XG4gICAgdXRpbC5hZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpO1xuICAgIHV0aWwuc2hvd1Byb2plY3QocHJvamVjdCk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93UHJvamVjdHMnKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNTZWN0aW9uJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KHRhYmxlKTtcbiAgfSk7XG59XG5cbmNvbnN0IHNldEluaXRpdGFsRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKSA/PyBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdCguLi5PYmplY3QudmFsdWVzKHByb2plY3QpKTtcbiAgfSk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSkgPz8gW107XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi5PYmplY3QudmFsdWVzKHRhc2spKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBsb2FkQWRkVGFzaywgc3VibWl0VGFzaywgbG9hZEFkZFByb2plY3QsIHN1Ym1pdFByb2plY3QsIHNhdmVUYXNrLCBzaG93UHJvamVjdHMsIHNldEluaXRpdGFsRGF0YSxcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSBQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aDtcbiAgICBQcm9qZWN0Lm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gc3RyaW5nO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XG4gIH1cblxuICBzaG93VGFza3NidXR0b24oKSB7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5kYXRhc2V0LnByb2plY3RJZCA9IHRoaXMuaW5kZXg7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnknO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTaG93IFRhc2tzJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dQcm9qZWN0VGFza3MoKTtcbiAgICB9KTtcbiAgICB0ZC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHJldHVybiB0ZDtcbiAgfVxuXG4gIHNob3dQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0ci5kYXRhc2V0LnByb2plY3RJZCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLnNob3dUYXNrc2J1dHRvbigpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkRXh0cmEpO1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIHNob3dQcm9qZWN0VGFza3MoKSB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLXByb2plY3QtaWQ9XCIke3RoaXMuaW5kZXh9XCJdYCk7XG4gICAgY29uc3QgdWxPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsW2RhdGEtcHJvamVjdC1pZD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICBpZiAodWxPdGhlciAhPT0gbnVsbCkge1xuICAgICAgdWxPdGhlci5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmNvbnRlbnQuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX0gLSBkdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgdHIubGFzdENoaWxkLmFwcGVuZENoaWxkKHVsKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBzdGF0aWMgcHJpb3JpdHlUZXh0ID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuaW5kZXggPSBUb2RvLm1haW5MaXN0Lmxlbmd0aDtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmFkZFRvUHJvamVjdChwcm9qZWN0KTtcbiAgICBUb2RvLm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBhZGRUb1Byb2plY3QoaWQpIHtcbiAgICBQcm9qZWN0Lm1haW5MaXN0W2lkXS5hZGRUb2RvKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlQXR0cihhdHRyLCBzdHJpbmcpIHtcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xuICB9XG5cbiAgZmluZFByb3BzKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgZm9ybWF0UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLmZpbmRQcm9wcygpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBhcnIucHVzaChwcm9wc1tpXSk7XG4gICAgfVxuICAgIGFyci5wdXNoKFRvZG8ucHJpb3JpdHlUZXh0W3Byb3BzWzNdXSk7XG4gICAgYXJyLnB1c2goUHJvamVjdC5tYWluTGlzdFtwcm9wc1s0XV0udGl0bGUpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBwb3B1bGF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwib3V0XCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGFza0lucHV0c1tpXTtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0aGlzLmZpbmRQcm9wcygpW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0lucHV0cztcbiAgfVxuXG4gIGFkZEVkaXRFdmVudChidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvcHVsYXRlVGFza0Zvcm0oKTtcbiAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcbiAgICAgIHV0aWxzLmFkZEhpZGRlbklucHV0KGVkaXRUYXNrRm9ybSwgdGhpcyk7XG4gICAgICB1dGlscy50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRGVsZXRlRXZlbnQoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdXRpbHMuZmluZFRhc2sodGhpcy5pbmRleCkucmVtb3ZlKCk7XG4gICAgICBkZWxldGUgVG9kby5tYWluTGlzdFt0aGlzLmluZGV4XTtcbiAgICAgIHV0aWxzLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVCdXR0b24odHlwZSwgc3R5bGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gYGJ0biBidG4tb3V0bGluZS0ke3N0eWxlfSBlZGl0X19idXR0b24gbXgtMmA7XG4gICAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgdGhpcy5hZGRFZGl0RXZlbnQoYnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGREZWxldGVFdmVudChidXR0b24pO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUNoZWNrQm94KHRoaXMpKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICByZXR1cm4gdHI7XG4gIH1cblxuICBlZGl0VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB1dGlscy50YXNrSW5wdXRzKCdvdXQnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dFZGl0ZWRUYXNrKCk7XG4gIH1cblxuICBzaG93RWRpdGVkVGFzaygpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICBjb25zdCBhcnIgPSB0YXNrLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgdGFza1ZhbHVlcyA9IHRoaXMuZm9ybWF0UHJvcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzW2ldO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuY29uc3QgdG9nZ2xlU2hvd0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGZpbmRUYXNrSW5wdXRzID0gKHR5cGUgPSAnaW4nKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10eXBlPVwiJHt0eXBlfVwiXWApO1xuXG5jb25zdCBjbGVhckFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHMoKTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgIG5vZGUudmFsdWUgPSAnJztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2xlYXJBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IHRhc2tJbnB1dHMgPSAodHlwZSA9ICdpbicpID0+IHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKHR5cGUpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGFyci5wdXNoKG5vZGUudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IHNob3dNYWluTGlzdCA9IChwcm9qZWN0Q2xhc3MpID0+IHtcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0luaXRpYWxUYXNrcyA9ICh0b2RvQ2xhc3MpID0+IHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0b2RvQ2xhc3MubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93UHJvamVjdHMgPSAocHJvamVjdENsYXNzKSA9PiB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzVGFibGUnKTtcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChwcm9qZWN0LnNob3dQcm9qZWN0KCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUb0Zvcm0gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pbmRleDtcbiAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG59O1xuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dC52YWx1ZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQoKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufTtcblxuY29uc3QgYWRkSGlkZGVuSW5wdXQgPSAoZm9ybSwgdGFzaykgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKSA/PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpZCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay5pbmRleCk7XG4gIGZvcm0uaW5zZXJ0QmVmb3JlKGlucHV0LCBmb3JtLmZpcnN0Q2hpbGQpO1xufTtcblxuY29uc3QgdG9nZ2xlRG9uZSA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pbmRleH1cIl1gKTtcbiAgaWYgKGlucHV0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICB0YXNrLmRvbmUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRhc2suZG9uZSA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVDaGVja0JveCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBpbnB1dC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaW5kZXg7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICB0b2dnbGVEb25lKHRhc2spO1xuICB9KTtcbiAgdGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICByZXR1cm4gdGQ7XG59O1xuXG5jb25zdCBzaG93VGFzayA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG59O1xuXG5jb25zdCBmaW5kVGFzayA9IChpZCkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gIHJldHVybiB0YXNrO1xufTtcblxuY29uc3Qgc2hvd1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1RhYmxlJyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3Quc2hvd1Byb2plY3QoKSk7XG59O1xuXG5jb25zdCB1cGRhdGVEYXRhID0gKGNsYXNzbmFtZSwgdHlwZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0eXBlLCBKU09OLnN0cmluZ2lmeShjbGFzc25hbWUubWFpbkxpc3QpKTtcbn07XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVNob3dFbGVtZW50LCBzaG93TWFpbkxpc3QsIHRhc2tJbnB1dHMsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LCBzaG93UHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZmluZFRhc2ssIGNsZWFyQWRkVGFza0Zvcm0sIGNsZWFyQWRkUHJvamVjdEZvcm0sIGFkZEhpZGRlbklucHV0LCBjcmVhdGVDaGVja0JveCxcbiAgdG9nZ2xlRG9uZSwgdXBkYXRlRGF0YSwgc2hvd1Byb2plY3RzLCBzaG93SW5pdGlhbFRhc2tzLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuZXZlbnQuc2V0SW5pdGl0YWxEYXRhKCk7XG5pZiAoUHJvamVjdC5tYWluTGlzdC5sZW5ndGggPT09IDApIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0Jyk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbn1cblxudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xudXRpbHMuc2hvd1Byb2plY3RzKFByb2plY3QpO1xudXRpbHMuc2hvd0luaXRpYWxUYXNrcyhUb2RvKTtcblxuZXZlbnQuc2hvd1Byb2plY3RzKCk7XG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9