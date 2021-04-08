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
/* harmony export */   "clearAddTaskForm": () => (/* binding */ clearAddTaskForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");

var projectsList = document.getElementById('project');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsInN1Ym1pdFByb2plY3QiLCJzdWJtaXRQcm9qZWN0QnV0dG9uIiwiUHJvamVjdCIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwidG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsImFkZFRvUHJvamVjdCIsImlkIiwiYWRkVG9kbyIsImF0dHIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9wcyIsImZpbmRQcm9wcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ0YXNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJ2YWx1ZSIsInR5cGUiLCJzdHlsZSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsInBvcHVsYXRlVGFza0Zvcm0iLCJlZGl0VGFza0Zvcm0iLCJ1dGlscyIsImZvcm1hdFByb3BzIiwidHIiLCJ0ZCIsImFwcGVuZENoaWxkIiwiZWRpdEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImtleXMiLCJjaGFuZ2VBdHRyIiwicHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaW5kVGFza0lucHV0cyIsImNsZWFyQWRkVGFza0Zvcm0iLCJmb3JFYWNoIiwibm9kZSIsInRhZ05hbWUiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJhZGRQcm9qZWN0VG9Gb3JtIiwicHJvamVjdElucHV0IiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJzaG93VGFzayIsInRhc2siLCJ0YXNrVGFibGUiLCJxdWVyeVNlbGVjdG9yIiwiZmluZFRhc2siLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2Qjs7QUFFQSxTQUFTRSxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0FHLGVBQWEsQ0FBQ0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q0MsMkRBQUEsQ0FBdUJQLFdBQXZCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNRLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdSLFFBQVEsQ0FB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QixXQUFWLENBQXNCdUIsSUFBSSxDQUFDRCxRQUFMLEVBQXRCO0FBQ0Q7O0FBRUQsU0FBU0ksUUFBVCxDQUFrQnRELEVBQWxCLEVBQXNCO0FBQ3BCLE1BQU1tRCxJQUFJLEdBQUdoRixRQUFRLENBQUNrRixhQUFULHdCQUFzQ3JELEVBQXRDLFNBQWI7QUFDQSxTQUFPbUQsSUFBUDtBQUNEOzs7Ozs7OztVQzVFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBTUYsVUFBVSxHQUFHLElBQUkvRCw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQXNDLGtEQUFBLENBQW1CdEMsNkNBQW5CO0FBRUFxRSxtREFBQTtBQUNBQSxnREFBQTtBQUNBQSwrQ0FBQTtBQUNBQSxrREFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XG4gICAgdXRpbC5zaG93VGFzayhuZXdUYXNrKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybSh1dGlsLmNyZWF0ZVByb2plY3QoKSk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBsb2FkQWRkVGFzaywgc3VibWl0VGFzaywgbG9hZEFkZFByb2plY3QsIHN1Ym1pdFByb2plY3QsXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gUHJvamVjdC5tYWluTGlzdC5sZW5ndGg7XG4gICAgUHJvamVjdC5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUoc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHN0cmluZztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuY29udGVudC5wdXNoKHRvZG8pO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChpZCkge1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XG4gIH1cblxuICBmb3JtYXRQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuZmluZFByb3BzKCk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJvdXRcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXNrSW5wdXRzW2ldO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRoaXMuZmluZFByb3BzKClbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9uKHR5cGUsIHN0eWxlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGBidG4gYnRuLW91dGxpbmUtJHtzdHlsZX0gZWRpdF9fYnV0dG9uIG14LTJgO1xuICAgIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBgJHt0eXBlfS10YXNrYDtcbiAgICBidXR0b24uZGF0YXNldC5pZCA9IHRoaXMuaW5kZXg7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucG9wdWxhdGVUYXNrRm9ybSgpO1xuICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG4gICAgICB1dGlscy50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmZvcm1hdFByb3BzKCk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2VkaXQnLCAnaW5mbycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdkZWxldGUnLCAnZGFuZ2VyJyk7XG4gICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHRyLmRhdGFzZXQuaWQgPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiB0cjtcbiAgfVxuXG4gIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY2hhbmdlQXR0cihrZXlzW2ldLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbnB1dHMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiaW5cIl0nKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICBub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cygpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuLy8gICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udGFza0lucHV0cygpKTtcbi8vICAgcmV0dXJuIG5ld1Rhc2s7XG4vLyB9XG5cbmZ1bmN0aW9uIHByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0KCkpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuLy8gZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuLy8gICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4vLyAgIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbi8vICAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNob3dUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IHtcbiAgdG9nZ2xlU2hvd0VsZW1lbnQsIHNob3dNYWluTGlzdCwgdGFza0lucHV0cywgc2hvd1Rhc2ssIGNyZWF0ZVByb2plY3QsXG4gIGFkZFByb2plY3RUb0Zvcm0sIGZpbmRUYXNrLCBjbGVhckFkZFRhc2tGb3JtLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ090aGVyJyk7XG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG5cbmV2ZW50LmxvYWRBZGRQcm9qZWN0KCk7XG5ldmVudC5sb2FkQWRkVGFzaygpO1xuZXZlbnQuc3VibWl0VGFzaygpO1xuZXZlbnQuc3VibWl0UHJvamVjdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=