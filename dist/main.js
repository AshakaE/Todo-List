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
    _utility__WEBPACK_IMPORTED_MODULE_0__.showTask(_utility__WEBPACK_IMPORTED_MODULE_0__.createTask());
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
    key: "showTask",
    value: function showTask() {
      var props = Object.values(this);
      var arr = [];

      for (var i = 0; i < 3; i += 1) {
        arr.push(props[i]);
      }

      arr.push(Todo.priorityText[props[3]]);
      arr.push(_project__WEBPACK_IMPORTED_MODULE_0__.default.mainList[props[4]].title);
      var tr = document.createElement('tr');

      for (var _i = 0; _i < arr.length; _i += 1) {
        var _td = document.createElement('td');

        _td.textContent = arr[_i];
        tr.appendChild(_td);
      }

      var editButton = document.createElement('button');
      editButton.className = 'btn btn-outline-info edit__button';
      editButton.dataset.id = this.index;
      editButton.textContent = 'Edit';
      var td = document.createElement('td');
      td.appendChild(editButton);
      tr.appendChild(td);
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
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "showMainList": () => (/* binding */ showMainList),
/* harmony export */   "taskInputs": () => (/* binding */ taskInputs),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
/* harmony export */   "showTask": () => (/* binding */ showTask),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "addProjectToForm": () => (/* binding */ addProjectToForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var projectsList = document.getElementById('project');

function toggleShowElement(element) {
  element.classList.toggle('hide');
}

function taskInputs() {
  var taskInputs = document.querySelectorAll('[data-type="in"]');
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
}

function createTask() {
  var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(taskInputs()));

  return newTask;
}

function projectInput() {
  var projectInput = document.getElementById('projectTitle');
  return projectInput.value;
}

function createProject() {
  var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectInput());
  return newProject;
}

function showAllTasks() {
  var taskTable = document.querySelector('.taskTable');
  _todo__WEBPACK_IMPORTED_MODULE_1__.default.mainList.forEach(function (task) {
    taskTable.appendChild(task.showTask());
  });
}

function showTask(task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(task.showTask());
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
_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default); // utils.showAllTasks();

_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiT2JqZWN0IiwidmFsdWVzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInRyIiwiY3JlYXRlRWxlbWVudCIsInRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImVkaXRCdXR0b24iLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwicHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGFza0lucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsInZhbHVlIiwic2hvd01haW5MaXN0IiwicHJvamVjdENsYXNzIiwib3B0aW9uIiwiYWRkUHJvamVjdFRvRm9ybSIsImNyZWF0ZVRhc2siLCJuZXdUYXNrIiwicHJvamVjdElucHV0IiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJzaG93QWxsVGFza3MiLCJ0YXNrVGFibGUiLCJxdWVyeVNlbGVjdG9yIiwidGFzayIsInNob3dUYXNrIiwidXRpbHMiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF2Qjs7QUFFQSxTQUFTRSxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0FHLGVBQWEsQ0FBQ0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q0MsMkRBQUEsQ0FBdUJQLFdBQXZCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNRLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsZ0JBQWdCLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7QUFDQU8sa0JBQWdCLENBQUNILGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DQywyREFBQSxDQUF1QkosY0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU08sVUFBVCxHQUFzQjtBQUNwQixNQUFNQyxnQkFBZ0IsR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQXpCO0FB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QUNBLFNBQU9FLFVBQVA7QUFDRDs7QUFFRCxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCLE1BQU1DLFNBQVMsR0FBR2pFLFFBQVEsQ0FBQ2tFLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQTVDLDZEQUFBLENBQXNCLFVBQUE2QyxJQUFJLEVBQUk7QUFDNUJGLGFBQVMsQ0FBQ3hCLFdBQVYsQ0FBc0IwQixJQUFJLENBQUNDLFFBQUwsRUFBdEI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU0EsUUFBVCxDQUFrQkQsSUFBbEIsRUFBd0I7QUFDdEIsTUFBTUYsU0FBUyxHQUFHakUsUUFBUSxDQUFDa0UsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBRCxXQUFTLENBQUN4QixXQUFWLENBQXNCMEIsSUFBSSxDQUFDQyxRQUFMLEVBQXRCO0FBQ0Q7Ozs7Ozs7O1VDM0REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTCxVQUFVLEdBQUcsSUFBSWxELDZDQUFKLENBQVksT0FBWixDQUFuQjtBQUNBd0Qsa0RBQUEsQ0FBbUJ4RCw2Q0FBbkIsRSxDQUVBOztBQUNBeUQsbURBQUE7QUFDQUEsZ0RBQUE7QUFDQUEsK0NBQUE7QUFDQUEsa0RBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG5cbmZ1bmN0aW9uIGxvYWRBZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZGRQcm9qZWN0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVN1Ym1pdCcpO1xuICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwuc2hvd1Rhc2sodXRpbC5jcmVhdGVUYXNrKCkpO1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U3VibWl0Jyk7XG4gIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC5hZGRQcm9qZWN0VG9Gb3JtKHV0aWwuY3JlYXRlUHJvamVjdCgpKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRBZGRUYXNrLCBzdWJtaXRUYXNrLCBsb2FkQWRkUHJvamVjdCwgc3VibWl0UHJvamVjdCxcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSBQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aDtcbiAgICBQcm9qZWN0Lm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gc3RyaW5nO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgc3RhdGljIHByaW9yaXR5VGV4dCA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmluZGV4ID0gVG9kby5tYWluTGlzdC5sZW5ndGg7XG4gICAgdGhpcy5hZGRUb1Byb2plY3QocHJvamVjdCk7XG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICAgUHJvamVjdC5tYWluTGlzdFtpZF0uYWRkVG9kbyh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZUF0dHIoYXR0ciwgc3RyaW5nKSB7XG4gICAgdGhpc1thdHRyXSA9IHN0cmluZztcbiAgfVxuXG4gIHNob3dUYXNrKCkge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LnZhbHVlcyh0aGlzKTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgYXJyLnB1c2gocHJvcHNbaV0pO1xuICAgIH1cbiAgICBhcnIucHVzaChUb2RvLnByaW9yaXR5VGV4dFtwcm9wc1szXV0pO1xuICAgIGFyci5wdXNoKFByb2plY3QubWFpbkxpc3RbcHJvcHNbNF1dLnRpdGxlKTtcblxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQudGV4dENvbnRlbnQgPSBhcnJbaV07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLW91dGxpbmUtaW5mbyBlZGl0X19idXR0b24nO1xuICAgIGVkaXRCdXR0b24uZGF0YXNldC5pZCA9IHRoaXMuaW5kZXg7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIHJldHVybiB0cjtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Jyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHRhc2tJbnB1dHMoKSB7XG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiaW5cIl0nKTtcbiAgY29uc3QgYXJyID0gW107XG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBhcnIucHVzaChub2RlLnZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHNob3dNYWluTGlzdChwcm9qZWN0Q2xhc3MpIHtcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5pbmRleDtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi50YXNrSW5wdXRzKCkpO1xuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gcHJvamVjdElucHV0KCkge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XG4gIHJldHVybiBwcm9qZWN0SW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQoKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcbiAgVG9kby5tYWluTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2sodGFzaykge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YXNrLnNob3dUYXNrKCkpO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgY3JlYXRlVGFzaywgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93QWxsVGFza3MsIHNob3dUYXNrLCBjcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0VG9Gb3JtLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ090aGVyJyk7XG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XG5cbi8vIHV0aWxzLnNob3dBbGxUYXNrcygpO1xuZXZlbnQubG9hZEFkZFByb2plY3QoKTtcbmV2ZW50LmxvYWRBZGRUYXNrKCk7XG5ldmVudC5zdWJtaXRUYXNrKCk7XG5ldmVudC5zdWJtaXRQcm9qZWN0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==