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
/* harmony export */   "saveTask": () => (/* binding */ saveTask)
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
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(_utility__WEBPACK_IMPORTED_MODULE_0__.createProject());
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddProjectForm();
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
    key: "createButton",
    value: function createButton(type, style) {
      var _this = this;

      var button = document.createElement('button');
      button.className = "btn btn-outline-".concat(style, " edit__button mx-2");
      button.dataset.type = "".concat(type, "-task");
      button.dataset.id = this.index;
      button.textContent = type.toUpperCase();
      button.addEventListener('click', function () {
        _this.populateTaskForm();

        var editTaskForm = document.getElementById('editTaskForm');
        _utility__WEBPACK_IMPORTED_MODULE_1__.addHiddenInput(editTaskForm, _this);
        _utility__WEBPACK_IMPORTED_MODULE_1__.toggleShowElement(editTaskForm);
      });
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
/* harmony export */   "addProjectToForm": () => (/* binding */ addProjectToForm),
/* harmony export */   "findTask": () => (/* binding */ findTask),
/* harmony export */   "clearAddTaskForm": () => (/* binding */ clearAddTaskForm),
/* harmony export */   "clearAddProjectForm": () => (/* binding */ clearAddProjectForm),
/* harmony export */   "addHiddenInput": () => (/* binding */ addHiddenInput)
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


function showTask(task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
}

function findTask(id) {
  var task = document.querySelector("tr[data-id=\"".concat(id, "\"]"));
  return task;
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
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
_events__WEBPACK_IMPORTED_MODULE_0__.saveTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInNhdmVUYXNrIiwiZWRpdFRhc2tCdXR0b24iLCJlZGl0ZWRUYXNrIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZWRpdFRhc2siLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJhZGRUb1Byb2plY3QiLCJpZCIsImFkZFRvZG8iLCJhdHRyIiwiT2JqZWN0IiwidmFsdWVzIiwicHJvcHMiLCJmaW5kUHJvcHMiLCJhcnIiLCJpIiwicHJpb3JpdHlUZXh0IiwidGFza0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwidHlwZSIsInN0eWxlIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRhdGFzZXQiLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwicG9wdWxhdGVUYXNrRm9ybSIsInV0aWxzIiwiZm9ybWF0UHJvcHMiLCJ0ciIsInRkIiwiYXBwZW5kQ2hpbGQiLCJlZGl0QnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwia2V5cyIsImNoYW5nZUF0dHIiLCJzaG93RWRpdGVkVGFzayIsInRhc2siLCJjaGlsZE5vZGVzIiwidGFza1ZhbHVlcyIsInByb2plY3RzTGlzdCIsImVkaXRQcm9qZWN0c0xpc3QiLCJ0b2dnbGVTaG93RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbmRUYXNrSW5wdXRzIiwiY2xlYXJBZGRUYXNrRm9ybSIsImZvckVhY2giLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJvcHRpb25DbG9uZSIsImNsb25lTm9kZSIsImFkZFByb2plY3RUb0Zvcm0iLCJjcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsImFkZEhpZGRlbklucHV0IiwiZm9ybSIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNob3dUYXNrIiwidGFza1RhYmxlIiwiZmluZFRhc2siLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3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Q2lCLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQWtGLFdBQVMsQ0FBQ3JDLFdBQVYsQ0FBc0JPLElBQUksQ0FBQzZCLFFBQUwsRUFBdEI7QUFDRDs7QUFFRCxTQUFTRSxRQUFULENBQWtCaEUsRUFBbEIsRUFBc0I7QUFDcEIsTUFBTWlDLElBQUksR0FBR3JFLFFBQVEsQ0FBQ2lCLGFBQVQsd0JBQXNDbUIsRUFBdEMsU0FBYjtBQUNBLFNBQU9pQyxJQUFQO0FBQ0Q7Ozs7Ozs7O1VDOUZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNc0IsVUFBVSxHQUFHLElBQUlyRSw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQW9DLGtEQUFBLENBQW1CcEMsNkNBQW5CO0FBRUErRSxtREFBQTtBQUNBQSxnREFBQTtBQUNBQSwrQ0FBQTtBQUNBQSxrREFBQTtBQUNBQSw2Q0FBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC5zaG93VGFzayhuZXdUYXNrKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrKCkge1xuICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2F2ZScpO1xuICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlXG4gICAgVG9kby5tYWluTGlzdFtlZGl0ZWRUYXNrXS5lZGl0VGFzaygpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybSh1dGlsLmNyZWF0ZVByb2plY3QoKSk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBsb2FkQWRkVGFzaywgc3VibWl0VGFzaywgbG9hZEFkZFByb2plY3QsIHN1Ym1pdFByb2plY3QsIHNhdmVUYXNrLFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBzdGF0aWMgcHJpb3JpdHlUZXh0ID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuaW5kZXggPSBUb2RvLm1haW5MaXN0Lmxlbmd0aDtcbiAgICB0aGlzLmFkZFRvUHJvamVjdChwcm9qZWN0KTtcbiAgICBUb2RvLm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBhZGRUb1Byb2plY3QoaWQpIHtcbiAgICBQcm9qZWN0Lm1haW5MaXN0W2lkXS5hZGRUb2RvKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlQXR0cihhdHRyLCBzdHJpbmcpIHtcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xuICB9XG5cbiAgZmluZFByb3BzKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgZm9ybWF0UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLmZpbmRQcm9wcygpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBhcnIucHVzaChwcm9wc1tpXSk7XG4gICAgfVxuICAgIGFyci5wdXNoKFRvZG8ucHJpb3JpdHlUZXh0W3Byb3BzWzNdXSk7XG4gICAgYXJyLnB1c2goUHJvamVjdC5tYWluTGlzdFtwcm9wc1s0XV0udGl0bGUpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBwb3B1bGF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwib3V0XCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGFza0lucHV0c1tpXTtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0aGlzLmZpbmRQcm9wcygpW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0lucHV0cztcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbih0eXBlLCBzdHlsZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcbiAgICBidXR0b24uZGF0YXNldC50eXBlID0gYCR7dHlwZX0tdGFza2A7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvcHVsYXRlVGFza0Zvcm0oKTtcbiAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcbiAgICAgIHV0aWxzLmFkZEhpZGRlbklucHV0KGVkaXRUYXNrRm9ybSwgdGhpcyk7XG4gICAgICB1dGlscy50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0VkaXRlZFRhc2soKVxuICB9XG5cbiAgc2hvd0VkaXRlZFRhc2soKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke3RoaXMuaW5kZXh9XCJdYClcbiAgICBjb25zdCBhcnIgPSB0YXNrLmNoaWxkTm9kZXNcbiAgICBjb25zdCB0YXNrVmFsdWVzID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbaV1cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHModHlwZSA9ICdpbicpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXR5cGU9XCIke3R5cGV9XCJdYCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgbm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHRhc2tJbnB1dHMoIHR5cGUgPSAnaW4nKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cyh0eXBlKTtcbiAgY29uc3QgYXJyID0gW107XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBhcnIucHVzaChub2RlLnZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHNob3dNYWluTGlzdChwcm9qZWN0Q2xhc3MpIHtcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuLy8gICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udGFza0lucHV0cygpKTtcbi8vICAgcmV0dXJuIG5ld1Rhc2s7XG4vLyB9XG5cbmZ1bmN0aW9uIHByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0KCkpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkSGlkZGVuSW5wdXQoZm9ybSwgdGFzaykge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKSA/PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpZCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay5pbmRleCk7XG4gIGZvcm0uaW5zZXJ0QmVmb3JlKGlucHV0LCBmb3JtLmZpcnN0Q2hpbGQpO1xufVxuXG4vLyBmdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4vLyAgIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbi8vICAgVG9kby5tYWluTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuLy8gICAgIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gc2hvd1Rhc2sodGFzaykge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFzayhpZCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZmluZFRhc2ssIGNsZWFyQWRkVGFza0Zvcm0sIGNsZWFyQWRkUHJvamVjdEZvcm0sIGFkZEhpZGRlbklucHV0LFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdPdGhlcicpO1xudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==