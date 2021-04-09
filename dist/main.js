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

  _project__WEBPACK_IMPORTED_MODULE_2__.default.mainList = (_JSON$parse = JSON.parse(localStorage.getItem('Projects'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  _todo__WEBPACK_IMPORTED_MODULE_1__.default.mainList = (_JSON$parse2 = JSON.parse(localStorage.getItem('Tasks'))) !== null && _JSON$parse2 !== void 0 ? _JSON$parse2 : [];
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
/* harmony export */   "updateData": () => (/* binding */ updateData)
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

function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
  console.log(localStorage);
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



_events__WEBPACK_IMPORTED_MODULE_0__.setInititalData();
console.log(_project__WEBPACK_IMPORTED_MODULE_2__.default.mainList);
_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_events__WEBPACK_IMPORTED_MODULE_0__.showProjects();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
_events__WEBPACK_IMPORTED_MODULE_0__.saveTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGl0bGUiLCJjb250ZW50IiwiaW5kZXgiLCJtYWluTGlzdCIsImxlbmd0aCIsInB1c2giLCJzdHJpbmciLCJ0b2RvIiwidGQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInByb2plY3RJZCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic2hvd1Byb2plY3RUYXNrcyIsImFwcGVuZENoaWxkIiwidHIiLCJ0ZEV4dHJhIiwic2hvd1Rhc2tzYnV0dG9uIiwidWxPdGhlciIsInJlbW92ZSIsInVsIiwiZm9yRWFjaCIsInRhc2siLCJsaSIsImR1ZURhdGUiLCJsYXN0Q2hpbGQiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwiZG9uZSIsImFkZFRvUHJvamVjdCIsImlkIiwiYWRkVG9kbyIsImF0dHIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9wcyIsImZpbmRQcm9wcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ0YXNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwb3B1bGF0ZVRhc2tGb3JtIiwidXRpbHMiLCJ0eXBlIiwic3R5bGUiLCJ0b1VwcGVyQ2FzZSIsImFkZEVkaXRFdmVudCIsImFkZERlbGV0ZUV2ZW50IiwiZm9ybWF0UHJvcHMiLCJlZGl0QnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwia2V5cyIsImNoYW5nZUF0dHIiLCJzaG93RWRpdGVkVGFzayIsImNoaWxkTm9kZXMiLCJ0YXNrVmFsdWVzIiwicHJvamVjdHNMaXN0IiwiZWRpdFByb2plY3RzTGlzdCIsInRvZ2dsZVNob3dFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJjbGVhckFkZFRhc2tGb3JtIiwibm9kZSIsInRhZ05hbWUiLCJjbGVhckFkZFByb2plY3RGb3JtIiwicHJvamVjdElucHV0Iiwic2hvd01haW5MaXN0IiwicHJvamVjdENsYXNzIiwib3B0aW9uIiwib3B0aW9uQ2xvbmUiLCJjbG9uZU5vZGUiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJhZGRIaWRkZW5JbnB1dCIsImZvcm0iLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJ0b2dnbGVEb25lIiwiY2hlY2tlZCIsImNyZWF0ZUNoZWNrQm94IiwidGFza0lkIiwic2hvd1Rhc2siLCJ0YXNrVGFibGUiLCJmaW5kVGFzayIsInNob3dQcm9qZWN0IiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkI7QUFDQSxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFyQjs7QUFFQSxTQUFTRyxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLGFBQWEsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0FJLGVBQWEsQ0FBQ0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q0MsMkRBQUEsQ0FBdUJSLFdBQXZCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNTLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7QUFDQVEsa0JBQWdCLENBQUNILGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DQywyREFBQSxDQUF1QkwsY0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU1EsVUFBVCxHQUFzQjtBQUNwQixNQUFNQyxnQkFBZ0IsR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQXpCO0FBQ0FVLGtCQUFnQixDQUFDTCxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUMvQyxRQUFN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Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUFxRyxvREFBQTtBQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWXBILHNEQUFaO0FBRUErRCxrREFBQSxDQUFtQi9ELDZDQUFuQjtBQUNBcUgsaURBQUE7QUFFQUEsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUE7QUFDQUEsNkNBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG5mdW5jdGlvbiBsb2FkQWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udXRpbC50YXNrSW5wdXRzKCkpO1xuICAgIHV0aWwudXBkYXRlRGF0YShUb2RvLCAnVGFza3MnKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XG4gICAgdXRpbC5zaG93VGFzayhuZXdUYXNrKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrKCkge1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2F2ZScpO1xuICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlO1xuICAgIFRvZG8ubWFpbkxpc3RbZWRpdGVkVGFza10uZWRpdFRhc2soKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1dGlsLmNyZWF0ZVByb2plY3QoKTtcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XG4gICAgdXRpbC5hZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpO1xuICAgIHV0aWwuc2hvd1Byb2plY3QocHJvamVjdCk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93UHJvamVjdHMnKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNTZWN0aW9uJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KHRhYmxlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEluaXRpdGFsRGF0YSgpIHtcbiAgUHJvamVjdC5tYWluTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpID8/IFtdO1xuICBUb2RvLm1haW5MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSkgPz8gW107XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRBZGRUYXNrLCBzdWJtaXRUYXNrLCBsb2FkQWRkUHJvamVjdCwgc3VibWl0UHJvamVjdCwgc2F2ZVRhc2ssIHNob3dQcm9qZWN0cywgc2V0SW5pdGl0YWxEYXRhLFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHNob3dUYXNrc2J1dHRvbigpIHtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1Nob3cgVGFza3MnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1Byb2plY3RUYXNrcygpO1xuICAgIH0pO1xuICAgIHRkLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIHRkO1xuICB9XG5cbiAgc2hvd1Byb2plY3QoKSB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRyLmRhdGFzZXQucHJvamVjdElkID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGRFeHRyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuc2hvd1Rhc2tzYnV0dG9uKCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGRFeHRyYSk7XG4gICAgcmV0dXJuIHRyO1xuICB9XG5cbiAgc2hvd1Byb2plY3RUYXNrcygpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtcHJvamVjdC1pZD1cIiR7dGhpcy5pbmRleH1cIl1gKTtcbiAgICBjb25zdCB1bE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdWxbZGF0YS1wcm9qZWN0LWlkPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgIGlmICh1bE90aGVyICE9PSBudWxsKSB7XG4gICAgICB1bE90aGVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuZGF0YXNldC5wcm9qZWN0SWQgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuY29udGVudC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRpdGxlfSAtIGR1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICB0ci5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQodWwpO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJvdXRcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgYWRkRWRpdEV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICAgICAgdXRpbHMuYWRkSGlkZGVuSW5wdXQoZWRpdFRhc2tGb3JtLCB0aGlzKTtcbiAgICAgIHV0aWxzLnRvZ2dsZVNob3dFbGVtZW50KGVkaXRUYXNrRm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGREZWxldGVFdmVudChidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB1dGlscy5maW5kVGFzayh0aGlzLmluZGV4KS5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZSBUb2RvLm1haW5MaXN0W3RoaXMuaW5kZXhdO1xuICAgICAgdXRpbHMudXBkYXRlRGF0YShUb2RvLCAnVGFza3MnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbih0eXBlLCBzdHlsZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgICBidXR0b24uZGF0YXNldC50eXBlID0gYCR7dHlwZX0tdGFza2A7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLmFkZEVkaXRFdmVudChidXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZERlbGV0ZUV2ZW50KGJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuXG4gIHNob3dUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuZm9ybWF0UHJvcHMoKTtcblxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZWRpdCcsICdpbmZvJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2RlbGV0ZScsICdkYW5nZXInKTtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlQ2hlY2tCb3godGhpcykpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0VkaXRlZFRhc2soKTtcbiAgfVxuXG4gIHNob3dFZGl0ZWRUYXNrKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0aGlzLmluZGV4fVwiXWApO1xuICAgIGNvbnN0IGFyciA9IHRhc2suY2hpbGROb2RlcztcbiAgICBjb25zdCB0YXNrVmFsdWVzID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuY29uc3QgZWRpdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdCcpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaG93RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdHlwZT1cIiR7dHlwZX1cIl1gKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cyh0eXBlID0gJ2luJykge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHModHlwZSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRm9ybShwcm9qZWN0KSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmluZGV4O1xuICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbi8vICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnRhc2tJbnB1dHMoKSk7XG4vLyAgIHJldHVybiBuZXdUYXNrO1xuLy8gfVxuXG5mdW5jdGlvbiBwcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dCgpKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEhpZGRlbklucHV0KGZvcm0sIHRhc2spIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaWQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2suaW5kZXgpO1xuICBmb3JtLmluc2VydEJlZm9yZShpbnB1dCwgZm9ybS5maXJzdENoaWxkKTtcbn1cblxuLy8gZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuLy8gICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4vLyAgIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbi8vICAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZURvbmUodGFzaykge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCJdYCk7XG4gIGlmIChpbnB1dC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgdGFzay5kb25lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrLmRvbmUgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGVja0JveCh0YXNrKSB7XG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBpbnB1dC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaW5kZXg7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICB0b2dnbGVEb25lKHRhc2spO1xuICB9KTtcbiAgdGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICByZXR1cm4gdGQ7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1RhYmxlJyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3Quc2hvd1Byb2plY3QoKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEoY2xhc3NuYW1lLCB0eXBlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHR5cGUsIEpTT04uc3RyaW5naWZ5KGNsYXNzbmFtZS5tYWluTGlzdCkpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCwgc2hvd1Byb2plY3QsXG4gIGFkZFByb2plY3RUb0Zvcm0sIGZpbmRUYXNrLCBjbGVhckFkZFRhc2tGb3JtLCBjbGVhckFkZFByb2plY3RGb3JtLCBhZGRIaWRkZW5JbnB1dCwgY3JlYXRlQ2hlY2tCb3gsXG4gIHRvZ2dsZURvbmUsIHVwZGF0ZURhdGEsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmV2ZW50LnNldEluaXRpdGFsRGF0YSgpO1xuY29uc29sZS5sb2coUHJvamVjdC5tYWluTGlzdCk7XG5cbnV0aWxzLnNob3dNYWluTGlzdChQcm9qZWN0KTtcbmV2ZW50LnNob3dQcm9qZWN0cygpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9