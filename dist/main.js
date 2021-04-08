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
  });
}

function submitProject() {
  var submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(_utility__WEBPACK_IMPORTED_MODULE_0__.createProject());
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
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
      var taskInputs = document.querySelectorAll('[data-type="in"]');

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
      button.className = "btn btn-outline-".concat(style, " edit__button mr-2");
      button.dataset.type = "".concat(type, "-task");
      button.dataset.id = this.index;
      button.textContent = "".concat(type.charAt(0).toUpperCase());
      button.addEventListener('click', function () {
        _this.populateTaskForm();

        var addTaskForm = document.getElementById('addTaskForm');
        _utility__WEBPACK_IMPORTED_MODULE_1__.toggleShowElement(addTaskForm);
        _utility__WEBPACK_IMPORTED_MODULE_1__.editFormTitle();
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
/* harmony export */   "editFormTitle": () => (/* binding */ editFormTitle),
/* harmony export */   "findTask": () => (/* binding */ findTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");

var projectsList = document.getElementById('project');

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function findTaskInputs() {
  return document.querySelectorAll('[data-type="in"]');
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
    projectsList.appendChild(option);
  });
}

function addProjectToForm(project) {
  var option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  projectsList.appendChild(option);
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

function editFormTitle() {
  var formTitle = document.querySelector('.form__title');
  formTitle.textContent = 'Edit Task';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInN1Ym1pdFByb2plY3QiLCJzdWJtaXRQcm9qZWN0QnV0dG9uIiwiUHJvamVjdCIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsImFkZFRvUHJvamVjdCIsImlkIiwiYWRkVG9kbyIsImF0dHIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9wcyIsImZpbmRQcm9wcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ0YXNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJ2YWx1ZSIsInR5cGUiLCJzdHlsZSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwidGV4dENvbnRlbnQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInBvcHVsYXRlVGFza0Zvcm0iLCJ1dGlscyIsImZvcm1hdFByb3BzIiwidHIiLCJ0ZCIsImFwcGVuZENoaWxkIiwiZWRpdEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInByb2plY3RzTGlzdCIsInRvZ2dsZVNob3dFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJmb3JFYWNoIiwibm9kZSIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsIm9wdGlvbiIsImFkZFByb2plY3RUb0Zvcm0iLCJwcm9qZWN0SW5wdXQiLCJjcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsInNob3dUYXNrIiwidGFzayIsInRhc2tUYWJsZSIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kVGFzayIsImVkaXRGb3JtVGl0bGUiLCJmb3JtVGl0bGUiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2Qjs7QUFFQSxTQUFTRSxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0FHLGVBQWEsQ0FBQ0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q0MsMkRBQUEsQ0FBdUJQLFdBQXZCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNRLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7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QXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBTXlCLFVBQVUsR0FBRyxJQUFJM0QsNkNBQUosQ0FBWSxPQUFaLENBQW5CO0FBQ0FzQyxrREFBQSxDQUFtQnRDLDZDQUFuQjtBQUVBbUUsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuXG5mdW5jdGlvbiBsb2FkQWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udXRpbC50YXNrSW5wdXRzKCkpO1xuICAgIHV0aWwuc2hvd1Rhc2sobmV3VGFzayk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTdWJtaXQnKTtcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0odXRpbC5jcmVhdGVQcm9qZWN0KCkpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkUHJvamVjdEZvcm0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gW107XG4gICAgdGhpcy5pbmRleCA9IFByb2plY3QubWFpbkxpc3QubGVuZ3RoO1xuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSBzdHJpbmc7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLmNvbnRlbnQucHVzaCh0b2RvKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBzdGF0aWMgcHJpb3JpdHlUZXh0ID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuaW5kZXggPSBUb2RvLm1haW5MaXN0Lmxlbmd0aDtcbiAgICB0aGlzLmFkZFRvUHJvamVjdChwcm9qZWN0KTtcbiAgICBUb2RvLm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBhZGRUb1Byb2plY3QoaWQpIHtcbiAgICBQcm9qZWN0Lm1haW5MaXN0W2lkXS5hZGRUb2RvKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlQXR0cihhdHRyLCBzdHJpbmcpIHtcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xuICB9XG5cbiAgZmluZFByb3BzKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMpO1xuICB9XG5cbiAgZm9ybWF0UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLmZpbmRQcm9wcygpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBhcnIucHVzaChwcm9wc1tpXSk7XG4gICAgfVxuICAgIGFyci5wdXNoKFRvZG8ucHJpb3JpdHlUZXh0W3Byb3BzWzNdXSk7XG4gICAgYXJyLnB1c2goUHJvamVjdC5tYWluTGlzdFtwcm9wc1s0XV0udGl0bGUpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBwb3B1bGF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiaW5cIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9uKHR5cGUsIHN0eWxlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidG4gYnRuLW91dGxpbmUtJHtzdHlsZX0gZWRpdF9fYnV0dG9uIG1yLTJgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBgJHt0eXBlfS10YXNrYDtcbiAgICBidXR0b24uZGF0YXNldC5pZCA9IHRoaXMuaW5kZXg7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1gO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbiAgICAgIFxuICAgICAgdXRpbHMudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICAgICAgdXRpbHMuZWRpdEZvcm1UaXRsZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiaW5cIl0nKTtcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cygpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuLy8gICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udGFza0lucHV0cygpKTtcbi8vICAgcmV0dXJuIG5ld1Rhc2s7XG4vLyB9XG5cbmZ1bmN0aW9uIHByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0KCkpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuLy8gZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuLy8gICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4vLyAgIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbi8vICAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNob3dUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZWRpdEZvcm1UaXRsZSgpIHtcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3RpdGxlJyk7XG4gIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSwgZWRpdEZvcm1UaXRsZSwgZmluZFRhc2ssXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgnT3RoZXInKTtcbnV0aWxzLnNob3dNYWluTGlzdChQcm9qZWN0KTtcblxuZXZlbnQubG9hZEFkZFByb2plY3QoKTtcbmV2ZW50LmxvYWRBZGRUYXNrKCk7XG5ldmVudC5zdWJtaXRUYXNrKCk7XG5ldmVudC5zdWJtaXRQcm9qZWN0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==