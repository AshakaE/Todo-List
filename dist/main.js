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
      var td = document.createElement('td');
      var button = document.createElement('button');
      button.dataset.projectId = this.index;
      button.className = 'btn btn-sm btn-outline-primary';
      button.textContent = 'Show Tasks';
      td.appendChild(button);
      return td;
    }
  }, {
    key: "showProject",
    value: function showProject() {
      var tr = document.createElement('tr');
      tr.dataset.projectId = this.index;
      var td = document.createElement('td');
      td.textContent = this.title;
      var button = this.showTasksbutton();
      tr.appendChild(td);
      tr.appendChild(button);
      return tr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInNhdmVUYXNrIiwiZWRpdFRhc2tCdXR0b24iLCJlZGl0ZWRUYXNrIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZWRpdFRhc2siLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsInByb2plY3QiLCJzaG93UHJvamVjdHMiLCJidXR0b24iLCJ0YWJsZSIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJ0ZCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwicHJvamVjdElkIiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInRyIiwic2hvd1Rhc2tzYnV0dG9uIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsIk9iamVjdCIsInZhbHVlcyIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInRhc2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBvcHVsYXRlVGFza0Zvcm0iLCJ1dGlscyIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwic3R5bGUiLCJ0b1VwcGVyQ2FzZSIsImFkZEVkaXRFdmVudCIsImFkZERlbGV0ZUV2ZW50IiwiZm9ybWF0UHJvcHMiLCJlZGl0QnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwia2V5cyIsImNoYW5nZUF0dHIiLCJzaG93RWRpdGVkVGFzayIsInRhc2siLCJjaGlsZE5vZGVzIiwidGFza1ZhbHVlcyIsInByb2plY3RzTGlzdCIsImVkaXRQcm9qZWN0c0xpc3QiLCJ0b2dnbGVTaG93RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbmRUYXNrSW5wdXRzIiwiY2xlYXJBZGRUYXNrRm9ybSIsImZvckVhY2giLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJvcHRpb25DbG9uZSIsImNsb25lTm9kZSIsImFkZFByb2plY3RUb0Zvcm0iLCJjcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsImFkZEhpZGRlbklucHV0IiwiZm9ybSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInRvZ2dsZURvbmUiLCJjaGVja2VkIiwiY3JlYXRlQ2hlY2tCb3giLCJ0YXNrSWQiLCJzaG93VGFzayIsInRhc2tUYWJsZSIsImZpbmRUYXNrIiwic2hvd1By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OztVQ3pIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWQsVUFBVSxHQUFHLElBQUkzRSw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQXFDLGtEQUFBLENBQW1CckMsNkNBQW5CO0FBQ0FxQyxpREFBQSxDQUFrQnNDLFVBQWxCO0FBQ0FlLGlEQUFBO0FBRUFBLG1EQUFBO0FBQ0FBLGdEQUFBO0FBQ0FBLCtDQUFBO0FBQ0FBLGtEQUFBO0FBQ0FBLDZDQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrRm9ybScpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcblxuZnVuY3Rpb24gbG9hZEFkZFRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEFkZFByb2plY3QoKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcbiAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3VibWl0Jyk7XG4gIHN1Ym1pdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnV0aWwudGFza0lucHV0cygpKTtcbiAgICB1dGlsLnNob3dUYXNrKG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRhc2soKSB7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TYXZlJyk7XG4gIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWU7XG4gICAgVG9kby5tYWluTGlzdFtlZGl0ZWRUYXNrXS5lZGl0VGFzaygpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1dGlsLmNyZWF0ZVByb2plY3QoKTtcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCk7XG4gICAgdXRpbC5zaG93UHJvamVjdChwcm9qZWN0KTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkUHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dQcm9qZWN0cycpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1NlY3Rpb24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQodGFibGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzaywgc2hvd1Byb2plY3RzLFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHNob3dUYXNrc2J1dHRvbigpIHtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgVGFza3MnO1xuICAgIHRkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIHRkO1xuICB9XG5cbiAgc2hvd1Byb2plY3QoKSB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRyLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuc2hvd1Rhc2tzYnV0dG9uKCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIHRyO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJvdXRcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgYWRkRWRpdEV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgICAgdXRpbHMuYWRkSGlkZGVuSW5wdXQoZWRpdFRhc2tGb3JtLCB0aGlzKTtcbiAgICAgIHV0aWxzLnRvZ2dsZVNob3dFbGVtZW50KGVkaXRUYXNrRm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGREZWxldGVFdmVudChidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1dGlscy5maW5kVGFzayh0aGlzLmluZGV4KS5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSBUb2RvLm1haW5MaXN0W3RoaXMuaW5kZXhdO1xuICAgICAgY29uc29sZS5sb2coVG9kby5tYWluTGlzdCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVCdXR0b24odHlwZSwgc3R5bGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gYGJ0biBidG4tb3V0bGluZS0ke3N0eWxlfSBlZGl0X19idXR0b24gbXgtMmA7XG4gICAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgdGhpcy5hZGRFZGl0RXZlbnQoYnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGREZWxldGVFdmVudChidXR0b24pO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUNoZWNrQm94KHRoaXMpKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICByZXR1cm4gdHI7XG4gIH1cblxuICBlZGl0VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB1dGlscy50YXNrSW5wdXRzKCdvdXQnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dFZGl0ZWRUYXNrKCk7XG4gIH1cblxuICBzaG93RWRpdGVkVGFzaygpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICBjb25zdCBhcnIgPSB0YXNrLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgdGFza1ZhbHVlcyA9IHRoaXMuZm9ybWF0UHJvcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzW2ldO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHModHlwZSA9ICdpbicpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXR5cGU9XCIke3R5cGV9XCJdYCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgbm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHRhc2tJbnB1dHModHlwZSA9ICdpbicpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKHR5cGUpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGFyci5wdXNoKG5vZGUudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc2hvd01haW5MaXN0KHByb2plY3RDbGFzcykge1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pbmRleDtcbiAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4vLyAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi50YXNrSW5wdXRzKCkpO1xuLy8gICByZXR1cm4gbmV3VGFzaztcbi8vIH1cblxuZnVuY3Rpb24gcHJvamVjdElucHV0KCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQoKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRIaWRkZW5JbnB1dChmb3JtLCB0YXNrKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lkJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmluZGV4KTtcbiAgZm9ybS5pbnNlcnRCZWZvcmUoaW5wdXQsIGZvcm0uZmlyc3RDaGlsZCk7XG59XG5cbi8vIGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbi8vICAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuLy8gICBUb2RvLm1haW5MaXN0LmZvckVhY2godGFzayA9PiB7XG4vLyAgICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5mdW5jdGlvbiB0b2dnbGVEb25lKHRhc2spIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xuICBpZiAoaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHRhc2suZG9uZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGFzay5kb25lID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3godGFzaykge1xuICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgaW5wdXQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmluZGV4O1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdG9nZ2xlRG9uZSh0YXNrKTtcbiAgfSk7XG4gIHRkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgcmV0dXJuIHRkO1xufVxuXG5mdW5jdGlvbiBzaG93VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrKGlkKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNUYWJsZScpO1xuICB0YWJsZS5hcHBlbmRDaGlsZChwcm9qZWN0LnNob3dQcm9qZWN0KCkpO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCwgc2hvd1Byb2plY3QsXG4gIGFkZFByb2plY3RUb0Zvcm0sIGZpbmRUYXNrLCBjbGVhckFkZFRhc2tGb3JtLCBjbGVhckFkZFByb2plY3RGb3JtLCBhZGRIaWRkZW5JbnB1dCwgY3JlYXRlQ2hlY2tCb3gsXG4gIHRvZ2dsZURvbmUsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ090aGVyJyk7XG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG51dGlscy5zaG93UHJvamVjdChuZXdQcm9qZWN0KTtcbmV2ZW50LnNob3dQcm9qZWN0cygpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==