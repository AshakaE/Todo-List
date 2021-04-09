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

function loadAddTask() {
  var addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
  });
}

function loadAddProject() {
  var addProjectButton = document.getElementById('addProjectButton');
  addProjectButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
  });
}

function submitTask() {
  var submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', function () {
    var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(_utility__WEBPACK_IMPORTED_MODULE_0__.taskInputs()));

    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.showTask(newTask);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
}

function saveTask() {
  var editTaskButton = document.getElementById('formSave');
  editTaskButton.addEventListener('click', function () {
    var editedTask = document.querySelector('[name="id"]').value;
    _todo__WEBPACK_IMPORTED_MODULE_1__.default.mainList[editedTask].editTask();
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(editTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
}

function submitProject() {
  var submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', function () {
    var project = _utility__WEBPACK_IMPORTED_MODULE_0__.createProject();
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.showProject(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddProjectForm();
  });
}

function showProjects() {
  var button = document.getElementById('showProjects');
  var table = document.querySelector('.projectsSection');
  button.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(table);
  });
}

function setInititalData() {
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
}



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

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function findTaskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  return document.querySelectorAll("[data-type=\"".concat(type, "\"]"));
}

function clearAddTaskForm() {
  var taskInputs = findTaskInputs();
  taskInputs.forEach(function (node) {
    if (node.tagName === 'INPUT') {
      node.value = '';
    }
  });
}

function clearAddProjectForm() {
  var projectInput = document.getElementById('projectTitle');
  projectInput.value = '';
}

function taskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  var taskInputs = findTaskInputs(type);
  var arr = [];
  taskInputs.forEach(function (node) {
    arr.push(node.value);
  });
  return arr;
}

function showMainList(projectClass) {
  projectClass.mainList.forEach(function (project, index) {
    var option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    var optionClone = option.cloneNode(true);
    projectsList.appendChild(option);
    editProjectsList.appendChild(optionClone);
  });
}

function showInitialTasks(todoClass) {
  var taskTable = document.querySelector('.taskTable');
  todoClass.mainList.forEach(function (task) {
    taskTable.appendChild(task.showTask());
  });
}

function showProjects(projectClass) {
  var table = document.querySelector('.projectsTable');
  projectClass.mainList.forEach(function (project) {
    table.appendChild(project.showProject());
  });
}

function addProjectToForm(project) {
  var option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  var optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
}

function projectInput() {
  var projectInput = document.getElementById('projectTitle');
  return projectInput.value;
}

function createProject() {
  var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectInput());
  return newProject;
}

function addHiddenInput(form, task) {
  var _document$querySelect;

  var input = (_document$querySelect = document.querySelector('[name="id"]')) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'id');
  input.setAttribute('value', task.index);
  form.insertBefore(input, form.firstChild);
}

function toggleDone(task) {
  var input = document.querySelector("[data-task-id=\"".concat(task.index, "\"]"));

  if (input.checked === true) {
    task.done = true;
  } else {
    task.done = false;
  }
}

function createCheckBox(task) {
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
}

function showTask(task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
}

function findTask(id) {
  var task = document.querySelector("tr[data-id=\"".concat(id, "\"]"));
  return task;
}

function showProject(project) {
  var table = document.querySelector('.projectsTable');
  table.appendChild(project.showProject());
}

function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwibmV3cHJvamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwidGFzayIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsInRkIiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJwcm9qZWN0SWQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsInNob3dQcm9qZWN0VGFza3MiLCJhcHBlbmRDaGlsZCIsInRyIiwidGRFeHRyYSIsInNob3dUYXNrc2J1dHRvbiIsInVsT3RoZXIiLCJyZW1vdmUiLCJ1bCIsImxpIiwiZHVlRGF0ZSIsImxhc3RDaGlsZCIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInRhc2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBvcHVsYXRlVGFza0Zvcm0iLCJ1dGlscyIsInR5cGUiLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwiYWRkRWRpdEV2ZW50IiwiYWRkRGVsZXRlRXZlbnQiLCJmb3JtYXRQcm9wcyIsImVkaXRCdXR0b24iLCJjcmVhdGVCdXR0b24iLCJkZWxldGVCdXR0b24iLCJrZXlzIiwiY2hhbmdlQXR0ciIsInNob3dFZGl0ZWRUYXNrIiwiY2hpbGROb2RlcyIsInRhc2tWYWx1ZXMiLCJwcm9qZWN0c0xpc3QiLCJlZGl0UHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaW5kVGFza0lucHV0cyIsImNsZWFyQWRkVGFza0Zvcm0iLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJvcHRpb25DbG9uZSIsImNsb25lTm9kZSIsInNob3dJbml0aWFsVGFza3MiLCJ0b2RvQ2xhc3MiLCJ0YXNrVGFibGUiLCJzaG93VGFzayIsInNob3dQcm9qZWN0IiwiYWRkUHJvamVjdFRvRm9ybSIsImNyZWF0ZVByb2plY3QiLCJuZXdQcm9qZWN0IiwiYWRkSGlkZGVuSW5wdXQiLCJmb3JtIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwidG9nZ2xlRG9uZSIsImNoZWNrZWQiLCJjcmVhdGVDaGVja0JveCIsInRhc2tJZCIsImZpbmRUYXNrIiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBLElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCOztBQUVBLFNBQVNHLFdBQVQsR0FBdUI7QUFDckIsTUFBTUMsYUFBYSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQUksZUFBYSxDQUFDQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDQywyREFBQSxDQUF1QlIsV0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU1MsY0FBVCxHQUEwQjtBQUN4QixNQUFNQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBUSxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCTCxjQUF2QjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTUSxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLGdCQUFnQixHQUFHWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBekI7QUFDQVUsa0JBQWdC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QjtBQUNBa0Usa0RBQUEsQ0FBbUJsRSw2Q0FBbkI7QUFDQWtFLHNEQUFBLENBQXVCbkUsMENBQXZCO0FBRUF5SCxpREFBQTtBQUNBQSxtREFBQTtBQUNBQSxnREFBQTtBQUNBQSwrQ0FBQTtBQUNBQSxrREFBQTtBQUNBQSw2Q0FBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFRvZG8sICdUYXNrcycpO1xuICAgIHV0aWwudXBkYXRlRGF0YShQcm9qZWN0LCAnUHJvamVjdHMnKTtcbiAgICB1dGlsLnNob3dUYXNrKG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRhc2soKSB7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TYXZlJyk7XG4gIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWU7XG4gICAgVG9kby5tYWluTGlzdFtlZGl0ZWRUYXNrXS5lZGl0VGFzaygpO1xuICAgIHV0aWwudXBkYXRlRGF0YShUb2RvLCAnVGFza3MnKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U3VibWl0Jyk7XG4gIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHV0aWwuY3JlYXRlUHJvamVjdCgpO1xuICAgIHV0aWwudXBkYXRlRGF0YShQcm9qZWN0LCAnUHJvamVjdHMnKTtcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCk7XG4gICAgdXRpbC5zaG93UHJvamVjdChwcm9qZWN0KTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkUHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dQcm9qZWN0cycpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1NlY3Rpb24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQodGFibGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0SW5pdGl0YWxEYXRhKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpID8/IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3QgbmV3cHJvamVjdCA9IG5ldyBQcm9qZWN0KC4uLk9iamVjdC52YWx1ZXMocHJvamVjdCkpO1xuICB9KTtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrcycpKSA/PyBbXTtcbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBpZiAodGFzaykge1xuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLk9iamVjdC52YWx1ZXModGFzaykpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRBZGRUYXNrLCBzdWJtaXRUYXNrLCBsb2FkQWRkUHJvamVjdCwgc3VibWl0UHJvamVjdCwgc2F2ZVRhc2ssIHNob3dQcm9qZWN0cywgc2V0SW5pdGl0YWxEYXRhLFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHNob3dUYXNrc2J1dHRvbigpIHtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgVGFza3MnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1Byb2plY3RUYXNrcygpO1xuICAgIH0pO1xuICAgIHRkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIHRkO1xuICB9XG5cbiAgc2hvd1Byb2plY3QoKSB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRyLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGRFeHRyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuc2hvd1Rhc2tzYnV0dG9uKCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGRFeHRyYSk7XG4gICAgcmV0dXJuIHRyO1xuICB9XG5cbiAgc2hvd1Byb2plY3RUYXNrcygpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtcHJvamVjdC1pZD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICBjb25zdCB1bE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdWxbZGF0YS1wcm9qZWN0LWlkPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgIGlmICh1bE90aGVyICE9PSBudWxsKSB7XG4gICAgICB1bE90aGVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuZGF0YXNldC5wcm9qZWN0SWQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuY29udGVudC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfSAtIGR1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICB0ci5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQodWwpO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJvdXRcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgYWRkRWRpdEV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgICAgdXRpbHMuYWRkSGlkZGVuSW5wdXQoZWRpdFRhc2tGb3JtLCB0aGlzKTtcbiAgICAgIHV0aWxzLnRvZ2dsZVNob3dFbGVtZW50KGVkaXRUYXNrRm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGREZWxldGVFdmVudChidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1dGlscy5maW5kVGFzayh0aGlzLmluZGV4KS5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSBUb2RvLm1haW5MaXN0W3RoaXMuaW5kZXhdO1xuICAgICAgdXRpbHMudXBkYXRlRGF0YShUb2RvLCAnVGFza3MnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbih0eXBlLCBzdHlsZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgICBidXR0b24uZGF0YXNldC50eXBlID0gYCR7dHlwZX0tdGFza2A7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLmFkZEVkaXRFdmVudChidXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZERlbGV0ZUV2ZW50KGJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuXG4gIHNob3dUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuZm9ybWF0UHJvcHMoKTtcblxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZWRpdCcsICdpbmZvJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2RlbGV0ZScsICdkYW5nZXInKTtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlQ2hlY2tCb3godGhpcykpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0VkaXRlZFRhc2soKTtcbiAgfVxuXG4gIHNob3dFZGl0ZWRUYXNrKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgIGNvbnN0IGFyciA9IHRhc2suY2hpbGROb2RlcztcbiAgICBjb25zdCB0YXNrVmFsdWVzID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuY29uc3QgZWRpdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdCcpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaG93RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdHlwZT1cIiR7dHlwZX1cIl1gKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHModHlwZSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0luaXRpYWxUYXNrcyh0b2RvQ2xhc3MpIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0b2RvQ2xhc3MubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cyhwcm9qZWN0Q2xhc3MpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNUYWJsZScpO1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3Quc2hvd1Byb2plY3QoKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dCgpKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEhpZGRlbklucHV0KGZvcm0sIHRhc2spIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaWQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2suaW5kZXgpO1xuICBmb3JtLmluc2VydEJlZm9yZShpbnB1dCwgZm9ybS5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRG9uZSh0YXNrKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pbmRleH1cIl1gKTtcbiAgaWYgKGlucHV0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICB0YXNrLmRvbmUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRhc2suZG9uZSA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KHRhc2spIHtcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGlucHV0LmRhdGFzZXQudGFza0lkID0gdGFzay5pbmRleDtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRvZ2dsZURvbmUodGFzayk7XG4gIH0pO1xuICB0ZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiB0ZDtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2sodGFzaykge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFzayhpZCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzVGFibGUnKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQocHJvamVjdC5zaG93UHJvamVjdCgpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YShjbGFzc25hbWUsIHR5cGUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkoY2xhc3NuYW1lLm1haW5MaXN0KSk7XG59XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVNob3dFbGVtZW50LCBzaG93TWFpbkxpc3QsIHRhc2tJbnB1dHMsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LCBzaG93UHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZmluZFRhc2ssIGNsZWFyQWRkVGFza0Zvcm0sIGNsZWFyQWRkUHJvamVjdEZvcm0sIGFkZEhpZGRlbklucHV0LCBjcmVhdGVDaGVja0JveCxcbiAgdG9nZ2xlRG9uZSwgdXBkYXRlRGF0YSwgc2hvd1Byb2plY3RzLCBzaG93SW5pdGlhbFRhc2tzLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuZXZlbnQuc2V0SW5pdGl0YWxEYXRhKCk7XG5pZiAoUHJvamVjdC5tYWluTGlzdC5sZW5ndGggPT09IDApIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0Jyk7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbn1cblxudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xudXRpbHMuc2hvd1Byb2plY3RzKFByb2plY3QpO1xudXRpbHMuc2hvd0luaXRpYWxUYXNrcyhUb2RvKTtcblxuZXZlbnQuc2hvd1Byb2plY3RzKCk7XG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9