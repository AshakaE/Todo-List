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
/* harmony export */   "submitProject": () => (/* binding */ submitProject)
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
    var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_2__.default, _toConsumableArray(_utility__WEBPACK_IMPORTED_MODULE_0__.taskInputs()));

    _utility__WEBPACK_IMPORTED_MODULE_0__.showTask(newTask);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
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
      var arr = _utility__WEBPACK_IMPORTED_MODULE_1__.taskInputs();
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
  return document.querySelectorAll('[data-type="in"]');
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
  var taskInputs = findTaskInputs();
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



var newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.default('Other');
_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInNhdmVUYXNrIiwiZWRpdFRhc2tCdXR0b24iLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJhZGRUb1Byb2plY3QiLCJpZCIsImFkZFRvZG8iLCJhdHRyIiwiT2JqZWN0IiwidmFsdWVzIiwicHJvcHMiLCJmaW5kUHJvcHMiLCJhcnIiLCJpIiwicHJpb3JpdHlUZXh0IiwidGFza0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwidmFsdWUiLCJ0eXBlIiwic3R5bGUiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJwb3B1bGF0ZVRhc2tGb3JtIiwiZWRpdFRhc2tGb3JtIiwidXRpbHMiLCJmb3JtYXRQcm9wcyIsInRyIiwidGQiLCJhcHBlbmRDaGlsZCIsImVkaXRCdXR0b24iLCJjcmVhdGVCdXR0b24iLCJkZWxldGVCdXR0b24iLCJrZXlzIiwiY2hhbmdlQXR0ciIsInByb2plY3RzTGlzdCIsImVkaXRQcm9qZWN0c0xpc3QiLCJ0b2dnbGVTaG93RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbmRUYXNrSW5wdXRzIiwiY2xlYXJBZGRUYXNrRm9ybSIsImZvckVhY2giLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJvcHRpb25DbG9uZSIsImNsb25lTm9kZSIsImFkZFByb2plY3RUb0Zvcm0iLCJjcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsImFkZEhpZGRlbklucHV0IiwiZm9ybSIsInRhc2siLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2hvd1Rhc2siLCJ0YXNrVGFibGUiLCJmaW5kVGFzayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCOztBQUVBLFNBQVNFLFdBQVQsR0FBdUI7QUFDckIsTUFBTUMsYUFBYSxHQUFHSixRQUFRLENB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a0RBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuXG5mdW5jdGlvbiBsb2FkQWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udXRpbC50YXNrSW5wdXRzKCkpO1xuICAgIHV0aWwuc2hvd1Rhc2sobmV3VGFzayk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFRhc2tGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzYXZlVGFzaygpIHtcbiAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNhdmUnKTtcbiAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnV0aWwudGFza0lucHV0cygpKTtcbiAgICB1dGlsLnNob3dUYXNrKG5ld1Rhc2spO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgIHV0aWwuY2xlYXJBZGRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U3VibWl0Jyk7XG4gIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC5hZGRQcm9qZWN0VG9Gb3JtKHV0aWwuY3JlYXRlUHJvamVjdCgpKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkUHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRBZGRUYXNrLCBzdWJtaXRUYXNrLCBsb2FkQWRkUHJvamVjdCwgc3VibWl0UHJvamVjdCxcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSBQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aDtcbiAgICBQcm9qZWN0Lm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gc3RyaW5nO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgc3RhdGljIHByaW9yaXR5VGV4dCA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmluZGV4ID0gVG9kby5tYWluTGlzdC5sZW5ndGg7XG4gICAgdGhpcy5hZGRUb1Byb2plY3QocHJvamVjdCk7XG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICAgUHJvamVjdC5tYWluTGlzdFtpZF0uYWRkVG9kbyh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZUF0dHIoYXR0ciwgc3RyaW5nKSB7XG4gICAgdGhpc1thdHRyXSA9IHN0cmluZztcbiAgfVxuXG4gIGZpbmRQcm9wcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIGZvcm1hdFByb3BzKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5maW5kUHJvcHMoKTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgYXJyLnB1c2gocHJvcHNbaV0pO1xuICAgIH1cbiAgICBhcnIucHVzaChUb2RvLnByaW9yaXR5VGV4dFtwcm9wc1szXV0pO1xuICAgIGFyci5wdXNoKFByb2plY3QubWFpbkxpc3RbcHJvcHNbNF1dLnRpdGxlKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgcG9wdWxhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2tJbnB1dHNbaV07XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGhpcy5maW5kUHJvcHMoKVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tJbnB1dHM7XG4gIH1cblxuICBjcmVhdGVCdXR0b24odHlwZSwgc3R5bGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gYGJ0biBidG4tb3V0bGluZS0ke3N0eWxlfSBlZGl0X19idXR0b24gbXgtMmA7XG4gICAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IGAke3R5cGV9LXRhc2tgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5wb3B1bGF0ZVRhc2tGb3JtKCk7XG4gICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tGb3JtJyk7XG4gICAgICB1dGlscy5hZGRIaWRkZW5JbnB1dChlZGl0VGFza0Zvcm0sIHRoaXMpO1xuICAgICAgdXRpbHMudG9nZ2xlU2hvd0VsZW1lbnQoZWRpdFRhc2tGb3JtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgc2hvd1Rhc2soKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5mb3JtYXRQcm9wcygpO1xuXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZC50ZXh0Q29udGVudCA9IGFycltpXTtcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB9XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdlZGl0JywgJ2luZm8nKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZGVsZXRlJywgJ2RhbmdlcicpO1xuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICB0ZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICB0ci5kYXRhc2V0LmlkID0gdGhpcy5pbmRleDtcbiAgICByZXR1cm4gdHI7XG4gIH1cblxuICBlZGl0VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB1dGlscy50YXNrSW5wdXRzKCk7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoYW5nZUF0dHIoa2V5c1tpXSwgYXJyW2ldKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG5jb25zdCBlZGl0UHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0Jyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrSW5wdXRzKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cImluXCJdJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgbm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHRhc2tJbnB1dHMoKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBmaW5kVGFza0lucHV0cygpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGFyci5wdXNoKG5vZGUudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc2hvd01haW5MaXN0KHByb2plY3RDbGFzcykge1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pbmRleDtcbiAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4vLyAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi50YXNrSW5wdXRzKCkpO1xuLy8gICByZXR1cm4gbmV3VGFzaztcbi8vIH1cblxuZnVuY3Rpb24gcHJvamVjdElucHV0KCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQoKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRIaWRkZW5JbnB1dChmb3JtLCB0YXNrKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lkJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmluZGV4KTtcbiAgZm9ybS5pbnNlcnRCZWZvcmUoaW5wdXQsIGZvcm0uZmlyc3RDaGlsZCk7XG59XG5cbi8vIGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbi8vICAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuLy8gICBUb2RvLm1haW5MaXN0LmZvckVhY2godGFzayA9PiB7XG4vLyAgICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5mdW5jdGlvbiBzaG93VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrKGlkKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVNob3dFbGVtZW50LCBzaG93TWFpbkxpc3QsIHRhc2tJbnB1dHMsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0VG9Gb3JtLCBmaW5kVGFzaywgY2xlYXJBZGRUYXNrRm9ybSwgY2xlYXJBZGRQcm9qZWN0Rm9ybSwgYWRkSGlkZGVuSW5wdXQsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgnT3RoZXInKTtcbnV0aWxzLnNob3dNYWluTGlzdChQcm9qZWN0KTtcblxuZXZlbnQubG9hZEFkZFByb2plY3QoKTtcbmV2ZW50LmxvYWRBZGRUYXNrKCk7XG5ldmVudC5zdWJtaXRUYXNrKCk7XG5ldmVudC5zdWJtaXRQcm9qZWN0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==