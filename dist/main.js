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
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  _createClass(Todo, [{
    key: "addToProject",
    value: function addToProject(id) {
      console.log(id);
      console.log(_project__WEBPACK_IMPORTED_MODULE_0__.default.mainList);
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
        var td = document.createElement('td');
        td.textContent = arr[_i];
        tr.appendChild(td);
      }

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
  console.log(arr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJzdWJtaXRQcm9qZWN0Iiwic3VibWl0UHJvamVjdEJ1dHRvbiIsIlByb2plY3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIm1haW5MaXN0IiwibGVuZ3RoIiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9kbyIsImF0dHIiLCJwcm9wcyIsIk9iamVjdCIsInZhbHVlcyIsImFyciIsImkiLCJwcmlvcml0eVRleHQiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJ0ZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0c0xpc3QiLCJ0b2dnbGVTaG93RWxlbWVudCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0YXNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwidmFsdWUiLCJzaG93TWFpbkxpc3QiLCJwcm9qZWN0Q2xhc3MiLCJvcHRpb24iLCJhZGRQcm9qZWN0VG9Gb3JtIiwiY3JlYXRlVGFzayIsIm5ld1Rhc2siLCJwcm9qZWN0SW5wdXQiLCJjcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsInNob3dBbGxUYXNrcyIsInRhc2tUYWJsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXNrIiwic2hvd1Rhc2siLCJ1dGlscyIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCOztBQUVBLFNBQVNFLFdBQVQsR0FBdUI7QUFDckIsTUFBTUMsYUFBYSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQUcsZUFBYSxDQUFDQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDQywyREFBQSxDQUF1QlAsV0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU1EsY0FBVCxHQUEwQjtBQUN4QixNQUFNQyxnQkFBZ0IsR0FBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBTyxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCSixjQUF2QjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTTyxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLGdCQUFnQixHQUFHVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBekI7QUFDQVMsa0JBQWdCLENBQUNMLGdC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Q2lFLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQUQsV0FBUyxDQUFDckIsV0FBVixDQUFzQnVCLElBQUksQ0FBQ0MsUUFBTCxFQUF0QjtBQUNEOzs7Ozs7OztVQzVERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBTUwsVUFBVSxHQUFHLElBQUlqRCw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQXVELGtEQUFBLENBQW1CdkQsNkNBQW5CLEUsQ0FFQTs7QUFDQXdELG1EQUFBO0FBQ0FBLGdEQUFBO0FBQ0FBLCtDQUFBO0FBQ0FBLGtEQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuXG5mdW5jdGlvbiBsb2FkQWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkQWRkUHJvamVjdCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TdWJtaXQnKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1dGlsLnNob3dUYXNrKHV0aWwuY3JlYXRlVGFzaygpKTtcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xuICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHV0aWwuYWRkUHJvamVjdFRvRm9ybSh1dGlsLmNyZWF0ZVByb2plY3QoKSk7XG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBsb2FkQWRkVGFzaywgc3VibWl0VGFzaywgbG9hZEFkZFByb2plY3QsIHN1Ym1pdFByb2plY3QsXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gUHJvamVjdC5tYWluTGlzdC5sZW5ndGg7XG4gICAgUHJvamVjdC5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUoc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHN0cmluZztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuY29udGVudC5wdXNoKHRvZG8pO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBtYWluTGlzdCA9IFtdO1xuXG4gIHN0YXRpYyBwcmlvcml0eVRleHQgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5hZGRUb1Byb2plY3QocHJvamVjdCk7XG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnNvbGUubG9nKFByb2plY3QubWFpbkxpc3QpO1xuICAgIFByb2plY3QubWFpbkxpc3RbaWRdLmFkZFRvZG8odGhpcyk7XG4gIH1cblxuICBjaGFuZ2VBdHRyKGF0dHIsIHN0cmluZykge1xuICAgIHRoaXNbYXR0cl0gPSBzdHJpbmc7XG4gIH1cblxuICBzaG93VGFzaygpIHtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC52YWx1ZXModGhpcyk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHByb3BzW2ldKTtcbiAgICB9XG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcbiAgICBhcnIucHVzaChQcm9qZWN0Lm1haW5MaXN0W3Byb3BzWzRdXS50aXRsZSk7XG5cbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgIH1cbiAgICByZXR1cm4gdHI7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaG93RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiB0YXNrSW5wdXRzKCkge1xuICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cImluXCJdJyk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgYXJyLnB1c2gobm9kZS52YWx1ZSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhhcnIpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaG93TWFpbkxpc3QocHJvamVjdENsYXNzKSB7XG4gIHByb2plY3RDbGFzcy5tYWluTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Gb3JtKHByb2plY3QpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4udGFza0lucHV0cygpKTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0KCkpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuICBjb25zdCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUYWJsZScpO1xuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKTtcbn1cblxuZXhwb3J0IHtcbiAgdG9nZ2xlU2hvd0VsZW1lbnQsIGNyZWF0ZVRhc2ssIHNob3dNYWluTGlzdCwgdGFza0lucHV0cywgc2hvd0FsbFRhc2tzLCBzaG93VGFzaywgY3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdFRvRm9ybSxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBldmVudCBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdPdGhlcicpO1xudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xuXG4vLyB1dGlscy5zaG93QWxsVGFza3MoKTtcbmV2ZW50LmxvYWRBZGRQcm9qZWN0KCk7XG5ldmVudC5sb2FkQWRkVGFzaygpO1xuZXZlbnQuc3VibWl0VGFzaygpO1xuZXZlbnQuc3VibWl0UHJvamVjdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=