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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInNhdmVUYXNrIiwiZWRpdFRhc2tCdXR0b24iLCJlZGl0ZWRUYXNrIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZWRpdFRhc2siLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJhZGRUb1Byb2plY3QiLCJpZCIsImFkZFRvZG8iLCJhdHRyIiwiT2JqZWN0IiwidmFsdWVzIiwicHJvcHMiLCJmaW5kUHJvcHMiLCJhcnIiLCJpIiwicHJpb3JpdHlUZXh0IiwidGFza0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwidHlwZSIsInN0eWxlIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRhdGFzZXQiLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwicG9wdWxhdGVUYXNrRm9ybSIsInV0aWxzIiwiZm9ybWF0UHJvcHMiLCJ0ciIsInRkIiwiYXBwZW5kQ2hpbGQiLCJlZGl0QnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwia2V5cyIsImNoYW5nZUF0dHIiLCJwcm9qZWN0c0xpc3QiLCJlZGl0UHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaW5kVGFza0lucHV0cyIsImNsZWFyQWRkVGFza0Zvcm0iLCJmb3JFYWNoIiwibm9kZSIsInRhZ05hbWUiLCJjbGVhckFkZFByb2plY3RGb3JtIiwicHJvamVjdElucHV0Iiwic2hvd01haW5MaXN0IiwicHJvamVjdENsYXNzIiwib3B0aW9uIiwib3B0aW9uQ2xvbmUiLCJjbG9uZU5vZGUiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJhZGRIaWRkZW5JbnB1dCIsImZvcm0iLCJ0YXNrIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2hvd1Rhc2siLCJ0YXNrVGFibGUiLCJmaW5kVGFzayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBLElBQU1FLFlBQVksR0FBR0gsUUFBUSxD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LHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1ILFVBQVUsR0FBRyxJQUFJakUsNkNBQUosQ0FBWSxPQUFaLENBQW5CO0FBQ0FvQyxrREFBQSxDQUFtQnBDLDZDQUFuQjtBQUVBNEUsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUE7QUFDQUEsNkNBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG5mdW5jdGlvbiBsb2FkQWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udXRpbC50YXNrSW5wdXRzKCkpO1xuICAgIHV0aWwuc2hvd1Rhc2sobmV3VGFzayk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFRhc2tGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzYXZlVGFzaygpIHtcbiAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNhdmUnKTtcbiAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWRpdGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZVxuICAgIFRvZG8ubWFpbkxpc3RbZWRpdGVkVGFza10uZWRpdFRhc2soKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGVkaXRUYXNrRm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFRhc2tGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTdWJtaXQnKTtcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0odXRpbC5jcmVhdGVQcm9qZWN0KCkpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzayxcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSBQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aDtcbiAgICBQcm9qZWN0Lm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gc3RyaW5nO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgc3RhdGljIHByaW9yaXR5VGV4dCA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmluZGV4ID0gVG9kby5tYWluTGlzdC5sZW5ndGg7XG4gICAgdGhpcy5hZGRUb1Byb2plY3QocHJvamVjdCk7XG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICAgUHJvamVjdC5tYWluTGlzdFtpZF0uYWRkVG9kbyh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZUF0dHIoYXR0ciwgc3RyaW5nKSB7XG4gICAgdGhpc1thdHRyXSA9IHN0cmluZztcbiAgfVxuXG4gIGZpbmRQcm9wcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIGZvcm1hdFByb3BzKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5maW5kUHJvcHMoKTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgYXJyLnB1c2gocHJvcHNbaV0pO1xuICAgIH1cbiAgICBhcnIucHVzaChUb2RvLnByaW9yaXR5VGV4dFtwcm9wc1szXV0pO1xuICAgIGFyci5wdXNoKFByb2plY3QubWFpbkxpc3RbcHJvcHNbNF1dLnRpdGxlKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgcG9wdWxhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tJbnB1dHNbaV07XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5maW5kUHJvcHMoKVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tJbnB1dHM7XG4gIH1cblxuICBjcmVhdGVCdXR0b24odHlwZSwgc3R5bGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gYGJ0biBidG4tb3V0bGluZS0ke3N0eWxlfSBlZGl0X19idXR0b24gbXgtMmA7XG4gICAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5wb3B1bGF0ZVRhc2tGb3JtKCk7XG4gICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7XG4gICAgICB1dGlscy5hZGRIaWRkZW5JbnB1dChlZGl0VGFza0Zvcm0sIHRoaXMpO1xuICAgICAgdXRpbHMudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgc2hvd1Rhc2soKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZC50ZXh0Q29udGVudCA9IGFycltpXTtcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB9XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdlZGl0JywgJ2luZm8nKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZGVsZXRlJywgJ2RhbmdlcicpO1xuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICByZXR1cm4gdHI7XG4gIH1cblxuICBlZGl0VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB1dGlscy50YXNrSW5wdXRzKCdvdXQnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHModHlwZSA9ICdpbicpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXR5cGU9XCIke3R5cGV9XCJdYCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgbm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHRhc2tJbnB1dHMoIHR5cGUgPSAnaW4nKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cyh0eXBlKTtcbiAgY29uc3QgYXJyID0gW107XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBhcnIucHVzaChub2RlLnZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHNob3dNYWluTGlzdChwcm9qZWN0Q2xhc3MpIHtcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuLy8gICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udGFza0lucHV0cygpKTtcbi8vICAgcmV0dXJuIG5ld1Rhc2s7XG4vLyB9XG5cbmZ1bmN0aW9uIHByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0KCkpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkSGlkZGVuSW5wdXQoZm9ybSwgdGFzaykge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKSA/PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpZCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay5pbmRleCk7XG4gIGZvcm0uaW5zZXJ0QmVmb3JlKGlucHV0LCBmb3JtLmZpcnN0Q2hpbGQpO1xufVxuXG4vLyBmdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4vLyAgIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbi8vICAgVG9kby5tYWluTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuLy8gICAgIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gc2hvd1Rhc2sodGFzaykge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFzayhpZCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZmluZFRhc2ssIGNsZWFyQWRkVGFza0Zvcm0sIGNsZWFyQWRkUHJvamVjdEZvcm0sIGFkZEhpZGRlbklucHV0LFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdPdGhlcicpO1xudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcbmV2ZW50LnNhdmVUYXNrKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==