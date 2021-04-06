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
/* harmony export */   "submitTask": () => (/* binding */ submitTask)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


function loadAddTask() {
  var addTaskForm = document.getElementById('addTaskForm');
  var addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
  });
}

function submitTask() {
  var submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.createTask();
    _utility__WEBPACK_IMPORTED_MODULE_0__.showAllTasks();
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
      var tr = document.createElement('tr');

      for (var i = 0; i < props.length; i += 1) {
        var td = document.createElement('td');
        td.textContent = props[i];
        tr.appendChild(td);
      }

      return tr;
    }
  }]);

  return Todo;
}();

_defineProperty(Todo, "mainList", []);


;

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
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
  var projectsList = document.getElementById('project');
  projectClass.mainList.forEach(function (project, index) {
    var option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    projectsList.appendChild(option);
  });
}

function createTask() {
  var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(taskInputs()));

  return newTask;
}

function showAllTasks() {
  var taskTable = document.querySelector('.taskTable');
  _todo__WEBPACK_IMPORTED_MODULE_0__.default.mainList.forEach(function (task) {
    taskTable.appendChild(task.showTask());
  });
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
var ad = new _project__WEBPACK_IMPORTED_MODULE_2__.default('ccccr');
var efef = new _project__WEBPACK_IMPORTED_MODULE_2__.default('vvvr');
var dazda = new _project__WEBPACK_IMPORTED_MODULE_2__.default('bbbr');
_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
console.log(newProject);
console.log(ad); // utils.showAllTasks();

_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2FkQWRkVGFzayIsImFkZFRhc2tGb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZFRhc2tCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidXRpbCIsInN1Ym1pdFRhc2siLCJzdWJtaXRUYXNrQnV0dG9uIiwiUHJvamVjdCIsInRpdGxlIiwiY29udGVudCIsIm1haW5MaXN0IiwicHVzaCIsInN0cmluZyIsInRvZG8iLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiT2JqZWN0IiwidmFsdWVzIiwidHIiLCJjcmVhdGVFbGVtZW50IiwiaSIsImxlbmd0aCIsInRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZVNob3dFbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRhc2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJyIiwiZm9yRWFjaCIsIm5vZGUiLCJ2YWx1ZSIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsInByb2plY3RzTGlzdCIsImluZGV4Iiwib3B0aW9uIiwiY3JlYXRlVGFzayIsIm5ld1Rhc2siLCJzaG93QWxsVGFza3MiLCJ0YXNrVGFibGUiLCJxdWVyeVNlbGVjdG9yIiwidGFzayIsInNob3dUYXNrIiwibmV3UHJvamVjdCIsImFkIiwiZWZlZiIsImRhemRhIiwidXRpbHMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQUMsZUFBYSxDQUFDQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFZO0FBQ2xEQywyREFBQSxDQUF1QkwsV0FBdkI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU00sVUFBVCxHQUFzQjtBQUNwQixNQUFNQyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQXpCO0FBQ0FLLGtCQUFnQixDQUFDSCxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBWTtBQUNyREMsb0RBQUE7QUFDQUEsc0RBQUE7QUFDRCxHQUhEO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCb0JHLE87QUFHbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQUYsV0FBTyxDQUFDRyxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUNEOzs7O1dBRUQscUJBQVlDLE1BQVosRUFBb0I7QUFDbEIsV0FBS0osS0FBTCxHQUFhSSxNQUFiO0FBQ0Q7OztXQUVELGlCQUFRQyxJQUFSLEVBQWM7QUFDWixXQUFLSixPQUFMLENBQWFFLElBQWIsQ0FBa0JFLElBQWxCO0FBQ0Q7Ozs7OztnQkFm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QUFRLENBQUNvRCxhQUFULENBQXVCLFlBQXZCLENBQW5CO0FBQ0F0Qyw2REFBQSxDQUFzQixVQUFBdUMsSUFBSSxFQUFJO0FBQzVCRixhQUFTLENBQUNuQixXQUFWLENBQXNCcUIsSUFBSSxDQUFDQyxRQUFMLEVBQXRCO0FBQ0QsR0FGRDtBQUdEOzs7Ozs7OztVQ25DRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBTUMsVUFBVSxHQUFHLElBQUloRCw2Q0FBSixDQUFZLE9BQVosQ0FBbkI7QUFDQSxJQUFNaUQsRUFBRSxHQUFHLElBQUlqRCw2Q0FBSixDQUFZLE9BQVosQ0FBWDtBQUNBLElBQU1rRCxJQUFJLEdBQUcsSUFBSWxELDZDQUFKLENBQVksTUFBWixDQUFiO0FBQ0EsSUFBTW1ELEtBQUssR0FBRyxJQUFJbkQsNkNBQUosQ0FBWSxNQUFaLENBQWQ7QUFDQW9ELGtEQUFBLENBQW1CcEQsNkNBQW5CO0FBQ0FxRCxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sVUFBWjtBQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWixFLENBRUE7O0FBQ0FNLGdEQUFBO0FBQ0FBLCtDQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsaXR5JztcblxuZnVuY3Rpb24gbG9hZEFkZFRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHV0aWwudG9nZ2xlU2hvd0VsZW1lbnQoYWRkVGFza0Zvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcbiAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3VibWl0Jyk7XG4gIHN1Ym1pdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdXRpbC5jcmVhdGVUYXNrKClcbiAgICB1dGlsLnNob3dBbGxUYXNrcygpXG4gIH0pO1xufVxuXG5leHBvcnQgeyBsb2FkQWRkVGFzaywgc3VibWl0VGFzayB9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgICBQcm9qZWN0Lm1haW5MaXN0LnB1c2godGhpcyk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gc3RyaW5nO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuYWRkVG9Qcm9qZWN0KHByb2plY3QpXG4gICAgVG9kby5tYWluTGlzdC5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KGlkKSB7XG4gICBQcm9qZWN0Lm1haW5MaXN0W2lkXS5hZGRUb2RvKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlQXR0cihhdHRyLCBzdHJpbmcpIHtcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xuICB9XG5cbiAgc2hvd1Rhc2soKSB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QudmFsdWVzKHRoaXMpXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKz0gMSkge1xuICAgICAgY29uc3QgdGQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLnRleHRDb250ZW50ID0gcHJvcHNbaV07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfVxuICAgIHJldHVybiB0clxuICB9XG59O1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuZnVuY3Rpb24gdG9nZ2xlU2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gdGFza0lucHV0cygpIHtcbiAgY29uc3QgdGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJpblwiXScpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgdGFza0lucHV0cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGFyci5wdXNoKG5vZGUudmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc2hvd01haW5MaXN0KHByb2plY3RDbGFzcykge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICBwcm9qZWN0Q2xhc3MubWFpbkxpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKC4uLnRhc2tJbnB1dHMoKSk7XG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tUYWJsZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RhYmxlJyk7XG4gIFRvZG8ubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQodGFzay5zaG93VGFzaygpKVxuICB9KVxufVxuXG5leHBvcnQge1xuICB0b2dnbGVTaG93RWxlbWVudCwgY3JlYXRlVGFzaywgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93QWxsVGFza3Ncbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBldmVudCBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdPdGhlcicpO1xuY29uc3QgYWQgPSBuZXcgUHJvamVjdCgnY2NjY3InKTtcbmNvbnN0IGVmZWYgPSBuZXcgUHJvamVjdCgndnZ2cicpO1xuY29uc3QgZGF6ZGEgPSBuZXcgUHJvamVjdCgnYmJicicpO1xudXRpbHMuc2hvd01haW5MaXN0KFByb2plY3QpO1xuY29uc29sZS5sb2cobmV3UHJvamVjdClcbmNvbnNvbGUubG9nKGFkKVxuXG4vLyB1dGlscy5zaG93QWxsVGFza3MoKTtcbmV2ZW50LmxvYWRBZGRUYXNrKCk7XG5ldmVudC5zdWJtaXRUYXNrKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==