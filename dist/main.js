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
/* harmony export */   "showProjects": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
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
    var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_2__.default, _toConsumableArray(_utility__WEBPACK_IMPORTED_MODULE_0__.taskInputs()));

    _utility__WEBPACK_IMPORTED_MODULE_0__.showTask(newTask);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
}

function saveTask() {
  var editTaskButton = document.getElementById('formSave');
  editTaskButton.addEventListener('click', function () {
    var editedTask = document.querySelector('[name="id"]').value;
    _todo__WEBPACK_IMPORTED_MODULE_2__.default.mainList[editedTask].editTask();
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(editTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
}

function submitProject() {
  var submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', function () {
    var project = _utility__WEBPACK_IMPORTED_MODULE_0__.createProject();
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
        console.log(Todo.mainList);
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
/* harmony export */   "toggleDone": () => (/* binding */ toggleDone)
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

function addProjectToForm(project) {
  var option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  var optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
} // function createTask() {
//   const newTask = new Todo(...taskInputs());
//   return newTask;
// }


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
} // function showAllTasks() {
//   const taskTable = document.querySelector('.taskTable');
//   Todo.mainList.forEach(task => {
//     taskTable.appendChild(task.showTask());
//   });
// }


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




var newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.default('Other');
_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_utility__WEBPACK_IMPORTED_MODULE_1__.showProject(newProject);
_events__WEBPACK_IMPORTED_MODULE_0__.showProjects();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
_events__WEBPACK_IMPORTED_MODULE_0__.saveTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInNhdmVUYXNrIiwiZWRpdFRhc2tCdXR0b24iLCJlZGl0ZWRUYXNrIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZWRpdFRhc2siLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsInByb2plY3QiLCJzaG93UHJvamVjdHMiLCJidXR0b24iLCJ0YWJsZSIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJ0ZCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicHJvamVjdElkIiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJzaG93UHJvamVjdFRhc2tzIiwiYXBwZW5kQ2hpbGQiLCJ0ciIsInRkRXh0cmEiLCJzaG93VGFza3NidXR0b24iLCJ1bE90aGVyIiwicmVtb3ZlIiwidWwiLCJmb3JFYWNoIiwidGFzayIsImxpIiwiZHVlRGF0ZSIsImxhc3RDaGlsZCIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsIk9iamVjdCIsInZhbHVlcyIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInRhc2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBvcHVsYXRlVGFza0Zvcm0iLCJ1dGlscyIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwic3R5bGUiLCJ0b1VwcGVyQ2FzZSIsImFkZEVkaXRFdmVudCIsImFkZERlbGV0ZUV2ZW50IiwiZm9ybWF0UHJvcHMiLCJlZGl0QnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwia2V5cyIsImNoYW5nZUF0dHIiLCJzaG93RWRpdGVkVGFzayIsImNoaWxkTm9kZXMiLCJ0YXNrVmFsdWVzIiwicHJvamVjdHNMaXN0IiwiZWRpdFByb2plY3RzTGlzdCIsInRvZ2dsZVNob3dFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJjbGVhckFkZFRhc2tGb3JtIiwibm9kZSIsInRhZ05hbWUiLCJjbGVhckFkZFByb2plY3RGb3JtIiwicHJvamVjdElucHV0Iiwic2hvd01haW5MaXN0IiwicHJvamVjdENsYXNzIiwib3B0aW9uIiwib3B0aW9uQ2xvbmUiLCJjbG9uZU5vZGUiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJhZGRIaWRkZW5JbnB1dCIsImZvcm0iLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJ0b2dnbGVEb25lIiwiY2hlY2tlZCIsImNyZWF0ZUNoZWNrQm94IiwidGFza0lkIiwic2hvd1Rhc2siLCJ0YXNrVGFibGUiLCJmaW5kVGFzayIsInNob3dQcm9qZWN0IiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBLElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXJCOztBQUVBLFNBQVNHLFdBQVQsR0FBdUI7QUFDckIsTUFBTUMsYUFBYSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQUksZUFBYSxDQUFDQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDQywyREFBQSxDQUF1QlIsV0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU1MsY0FBVCxHQUEwQjtBQUN4QixNQUFNQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBUSxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCTCxjQUF2QjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTUSxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLGdCQUFnQixHQUFHWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBekI7QUFDQVUsa0JBQWdCLENBQUNMLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DLFFBQU1NLE9BQU8sY0FBT0MsMENBQVAscUJBQWVOLGdEQUFBLEVBQWYsRUFBYjs7QUFDQUEsa0RBQUEsQ0FBY0ssT0FBZDtBQUNBTCwyREFBQSxDQUF1QlIsV0FBdkI7QUFDQVEsMERBQUE7QUFD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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWQsVUFBVSxHQUFHLElBQUlqRiw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQThDLGtEQUFBLENBQW1COUMsNkNBQW5CO0FBQ0E4QyxpREFBQSxDQUFrQm1DLFVBQWxCO0FBQ0FlLGlEQUFBO0FBRUFBLG1EQUFBO0FBQ0FBLGdEQUFBO0FBQ0FBLCtDQUFBO0FBQ0FBLGtEQUFBO0FBQ0FBLDZDQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrRm9ybScpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcblxuZnVuY3Rpb24gbG9hZEFkZFRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFByb2plY3QoKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcbiAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3VibWl0Jyk7XG4gIHN1Ym1pdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnV0aWwudGFza0lucHV0cygpKTtcbiAgICB1dGlsLnNob3dUYXNrKG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRhc2soKSB7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TYXZlJyk7XG4gIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWU7XG4gICAgVG9kby5tYWluTGlzdFtlZGl0ZWRUYXNrXS5lZGl0VGFzaygpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1dGlsLmNyZWF0ZVByb2plY3QoKTtcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCk7XG4gICAgdXRpbC5zaG93UHJvamVjdChwcm9qZWN0KTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkUHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dQcm9qZWN0cycpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1NlY3Rpb24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQodGFibGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzaywgc2hvd1Byb2plY3RzLFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHNob3dUYXNrc2J1dHRvbigpIHtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgVGFza3MnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1Byb2plY3RUYXNrcygpXG4gICAgfSlcbiAgICB0ZC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHJldHVybiB0ZDtcbiAgfVxuXG4gIHNob3dQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0ci5kYXRhc2V0LnByb2plY3RJZCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLnNob3dUYXNrc2J1dHRvbigpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkRXh0cmEpO1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIHNob3dQcm9qZWN0VGFza3MoKSB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLXByb2plY3QtaWQ9XCIke3RoaXMuaW5kZXh9XCJdYClcbiAgICBjb25zdCB1bE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdWxbZGF0YS1wcm9qZWN0LWlkPVwiJHt0aGlzLmluZGV4fVwiXWApXG4gICAgaWYgKHVsT3RoZXIgIT09IG51bGwpIHtcbiAgICAgIHVsT3RoZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdWwuZGF0YXNldC5wcm9qZWN0SWQgPSB0aGlzLmluZGV4O1xuICAgICAgdGhpcy5jb250ZW50LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9IC0gZHVlOiAke3Rhc2suZHVlRGF0ZX1gXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgfSlcbiAgICAgIHRyLmxhc3RDaGlsZC5hcHBlbmRDaGlsZCh1bCk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgc3RhdGljIHByaW9yaXR5VGV4dCA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmluZGV4ID0gVG9kby5tYWluTGlzdC5sZW5ndGg7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgdGhpcy5hZGRUb1Byb2plY3QocHJvamVjdCk7XG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICAgUHJvamVjdC5tYWluTGlzdFtpZF0uYWRkVG9kbyh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZUF0dHIoYXR0ciwgc3RyaW5nKSB7XG4gICAgdGhpc1thdHRyXSA9IHN0cmluZztcbiAgfVxuXG4gIGZpbmRQcm9wcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIGZvcm1hdFByb3BzKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5maW5kUHJvcHMoKTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgYXJyLnB1c2gocHJvcHNbaV0pO1xuICAgIH1cbiAgICBhcnIucHVzaChUb2RvLnByaW9yaXR5VGV4dFtwcm9wc1szXV0pO1xuICAgIGFyci5wdXNoKFByb2plY3QubWFpbkxpc3RbcHJvcHNbNF1dLnRpdGxlKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgcG9wdWxhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tJbnB1dHNbaV07XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5maW5kUHJvcHMoKVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tJbnB1dHM7XG4gIH1cblxuICBhZGRFZGl0RXZlbnQoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5wb3B1bGF0ZVRhc2tGb3JtKCk7XG4gICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7XG4gICAgICB1dGlscy5hZGRIaWRkZW5JbnB1dChlZGl0VGFza0Zvcm0sIHRoaXMpO1xuICAgICAgdXRpbHMudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZERlbGV0ZUV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHV0aWxzLmZpbmRUYXNrKHRoaXMuaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgZGVsZXRlIFRvZG8ubWFpbkxpc3RbdGhpcy5pbmRleF07XG4gICAgICBjb25zb2xlLmxvZyhUb2RvLm1haW5MaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbih0eXBlLCBzdHlsZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgICBidXR0b24uZGF0YXNldC50eXBlID0gYCR7dHlwZX0tdGFza2A7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLmFkZEVkaXRFdmVudChidXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZERlbGV0ZUV2ZW50KGJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuXG4gIHNob3dUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuZm9ybWF0UHJvcHMoKTtcblxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZWRpdCcsICdpbmZvJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2RlbGV0ZScsICdkYW5nZXInKTtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlQ2hlY2tCb3godGhpcykpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0VkaXRlZFRhc2soKTtcbiAgfVxuXG4gIHNob3dFZGl0ZWRUYXNrKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgIGNvbnN0IGFyciA9IHRhc2suY2hpbGROb2RlcztcbiAgICBjb25zdCB0YXNrVmFsdWVzID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuY29uc3QgZWRpdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdCcpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaG93RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdHlwZT1cIiR7dHlwZX1cIl1gKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHModHlwZSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRm9ybShwcm9qZWN0KSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmluZGV4O1xuICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbi8vICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnRhc2tJbnB1dHMoKSk7XG4vLyAgIHJldHVybiBuZXdUYXNrO1xuLy8gfVxuXG5mdW5jdGlvbiBwcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dCgpKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEhpZGRlbklucHV0KGZvcm0sIHRhc2spIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaWQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2suaW5kZXgpO1xuICBmb3JtLmluc2VydEJlZm9yZShpbnB1dCwgZm9ybS5maXJzdENoaWxkKTtcbn1cblxuLy8gZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuLy8gICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4vLyAgIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbi8vICAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZURvbmUodGFzaykge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCJdYCk7XG4gIGlmIChpbnB1dC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgdGFzay5kb25lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrLmRvbmUgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGVja0JveCh0YXNrKSB7XG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBpbnB1dC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaW5kZXg7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICB0b2dnbGVEb25lKHRhc2spO1xuICB9KTtcbiAgdGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICByZXR1cm4gdGQ7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1RhYmxlJyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3Quc2hvd1Byb2plY3QoKSk7XG59XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVNob3dFbGVtZW50LCBzaG93TWFpbkxpc3QsIHRhc2tJbnB1dHMsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LCBzaG93UHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZmluZFRhc2ssIGNsZWFyQWRkVGFza0Zvcm0sIGNsZWFyQWRkUHJvamVjdEZvcm0sIGFkZEhpZGRlbklucHV0LCBjcmVhdGVDaGVja0JveCxcbiAgdG9nZ2xlRG9uZSwgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ090aGVyJyk7XG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG51dGlscy5zaG93UHJvamVjdChuZXdQcm9qZWN0KTtcbmV2ZW50LnNob3dQcm9qZWN0cygpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==