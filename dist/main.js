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

      for (var i = 0; i < arr.length; i++) {
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
/* harmony export */   "clearAddProjectForm": () => (/* binding */ clearAddProjectForm)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInN1Ym1pdFByb2plY3QiLCJzdWJtaXRQcm9qZWN0QnV0dG9uIiwiUHJvamVjdCIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsImFkZFRvUHJvamVjdCIsImlkIiwiYWRkVG9kbyIsImF0dHIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9wcyIsImZpbmRQcm9wcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ0YXNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJ2YWx1ZSIsInR5cGUiLCJzdHlsZSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsInBvcHVsYXRlVGFza0Zvcm0iLCJlZGl0VGFza0Zvcm0iLCJ1dGlscyIsImZvcm1hdFByb3BzIiwidHIiLCJ0ZCIsImFwcGVuZENoaWxkIiwiZWRpdEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImtleXMiLCJjaGFuZ2VBdHRyIiwicHJvamVjdHNMaXN0IiwiZWRpdFByb2plY3RzTGlzdCIsInRvZ2dsZVNob3dFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJjbGVhckFkZFRhc2tGb3JtIiwiZm9yRWFjaCIsIm5vZGUiLCJ0YWdOYW1lIiwiY2xlYXJBZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsIm9wdGlvbiIsIm9wdGlvbkNsb25lIiwiY2xvbmVOb2RlIiwiYWRkUHJvamVjdFRvRm9ybSIsImNyZWF0ZVByb2plY3QiLCJuZXdQcm9qZWN0Iiwic2hvd1Rhc2siLCJ0YXNrIiwidGFza1RhYmxlIiwicXVlcnlTZWxlY3RvciIsImZpbmRUYXNrIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdkI7O0FBRUEsU0FBU0UsV0FBVCxHQUF1QjtBQUNyQixNQUFNQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUNBRyxlQUFhLENBQUNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNDLDJEQUFBLENBQXVCUCxXQUF2QjtBQUNE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O0FBRUEsSUFBTUYsVUFBVSxHQUFHLElBQUluRSw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQXNDLGtEQUFBLENBQW1CdEMsNkNBQW5CO0FBRUF5RSxtREFBQTtBQUNBQSxnREFBQTtBQUNBQSwrQ0FBQTtBQUNBQSxrREFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC5zaG93VGFzayhuZXdUYXNrKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybSh1dGlsLmNyZWF0ZVByb2plY3QoKSk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgdXRpbC5jbGVhckFkZFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBsb2FkQWRkVGFzaywgc3VibWl0VGFzaywgbG9hZEFkZFByb2plY3QsIHN1Ym1pdFByb2plY3QsXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gUHJvamVjdC5tYWluTGlzdC5sZW5ndGg7XG4gICAgUHJvamVjdC5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUoc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHN0cmluZztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuY29udGVudC5wdXNoKHRvZG8pO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJvdXRcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9uKHR5cGUsIHN0eWxlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidG4gYnRuLW91dGxpbmUtJHtzdHlsZX0gZWRpdF9fYnV0dG9uIG14LTJgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBgJHt0eXBlfS10YXNrYDtcbiAgICBidXR0b24uZGF0YXNldC5pZCA9IHRoaXMuaW5kZXg7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG4gICAgICB1dGlscy50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbmNvbnN0IGVkaXRQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiaW5cIl0nKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cygpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRm9ybShwcm9qZWN0KSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBvcHRpb24udmFsdWUgPSBwcm9qZWN0LmluZGV4O1xuICBjb25zdCBvcHRpb25DbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICBlZGl0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbkNsb25lKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbi8vICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnRhc2tJbnB1dHMoKSk7XG4vLyAgIHJldHVybiBuZXdUYXNrO1xuLy8gfVxuXG5mdW5jdGlvbiBwcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcmV0dXJuIHByb2plY3RJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dCgpKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbi8vIGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbi8vICAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuLy8gICBUb2RvLm1haW5MaXN0LmZvckVhY2godGFzayA9PiB7XG4vLyAgICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5mdW5jdGlvbiBzaG93VGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhc2suc2hvd1Rhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrKGlkKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVNob3dFbGVtZW50LCBzaG93TWFpbkxpc3QsIHRhc2tJbnB1dHMsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0VG9Gb3JtLCBmaW5kVGFzaywgY2xlYXJBZGRUYXNrRm9ybSwgY2xlYXJBZGRQcm9qZWN0Rm9ybSxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBldmVudCBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdPdGhlcicpO1xudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xuXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xuZXZlbnQubG9hZEFkZFRhc2soKTtcbmV2ZW50LnN1Ym1pdFRhc2soKTtcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTsiXSwic291cmNlUm9vdCI6IiJ9