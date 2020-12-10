/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/control/scripts/control.js":
/*!*******************************************!*\
  !*** ./blocks/control/scripts/control.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu */ "./blocks/control/scripts/menu/menu.js");
/* harmony import */ var _tic_tac_toe_scripts_tic_tac_toe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tic-tac-toe/scripts/tic-tac-toe */ "./blocks/tic-tac-toe/scripts/tic-tac-toe.js");


new _menu_menu__WEBPACK_IMPORTED_MODULE_0__["Menu"](_tic_tac_toe_scripts_tic_tac_toe__WEBPACK_IMPORTED_MODULE_1__["TicTacToe"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/abstract-classes/_external-items.js":
/*!*************************************************************************!*\
  !*** ./blocks/control/scripts/menu/abstract-classes/_external-items.js ***!
  \*************************************************************************/
/*! exports provided: ExternalItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalItems", function() { return ExternalItems; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ExternalItems = /*#__PURE__*/function () {
  function ExternalItems(id, hideStyleClass) {
    _classCallCheck(this, ExternalItems);

    this.element = document.querySelector("#".concat(id));
    this.hideStyleClass = hideStyleClass;
  }

  _createClass(ExternalItems, [{
    key: "show",
    value: function show() {
      this.element.classList.remove(this.hideStyleClass);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.element.classList.add(this.hideStyleClass);
    }
  }]);

  return ExternalItems;
}();

/***/ }),

/***/ "./blocks/control/scripts/menu/abstract-classes/_game-init-item.js":
/*!*************************************************************************!*\
  !*** ./blocks/control/scripts/menu/abstract-classes/_game-init-item.js ***!
  \*************************************************************************/
/*! exports provided: GameInitItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInitItem", function() { return GameInitItem; });
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_menu-item */ "./blocks/control/scripts/menu/abstract-classes/_menu-item.js");
/* harmony import */ var _concrete_classes_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../concrete-classes/_game */ "./blocks/control/scripts/menu/concrete-classes/_game.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var GameInitItem = /*#__PURE__*/function (_MenuItem) {
  _inherits(GameInitItem, _MenuItem);

  var _super = _createSuper(GameInitItem);

  function GameInitItem() {
    var _this;

    _classCallCheck(this, GameInitItem);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(props));
    _this.formEl = _this.element.querySelector('form');
    _this.clearInputValueShim = _this.clearInputValue.bind(_assertThisInitialized(_this));
    _this.addInputValueShim = _this.addInputValue.bind(_assertThisInitialized(_this));

    _this.saveDefaultInputsValue();

    return _this;
  }

  _createClass(GameInitItem, [{
    key: "listen",
    value: function listen(enable) {
      var _this2 = this;

      _get(_getPrototypeOf(GameInitItem.prototype), "listen", this).call(this, enable);

      if (enable) {
        this.inputs.forEach(function (input) {
          input.element.addEventListener('focus', _this2.clearInputValueShim);
          input.element.addEventListener('blur', _this2.addInputValueShim);
        });
      } else {
        this.inputs.forEach(function (input) {
          input.element.removeEventListener('focus', _this2.clearInputValueShim);
          input.element.removeEventListener('blur', _this2.addInputValueShim);
        });
      }
    }
  }, {
    key: "switch",
    value: function _switch(btn) {
      if (btn.linkedItem instanceof _concrete_classes_game__WEBPACK_IMPORTED_MODULE_1__["Game"]) {
        var isValid = true;
        if (this.validate) isValid = this.validate();

        if (isValid) {
          _get(_getPrototypeOf(GameInitItem.prototype), "switch", this).call(this, btn);

          this.menu.menuWindow.hide();
          this.gameInit(btn);
        }
      } else {
        _get(_getPrototypeOf(GameInitItem.prototype), "switch", this).call(this, btn);
      }
    }
  }, {
    key: "btnSearch",
    value: function btnSearch(e) {
      if (this.buttons.some(function (btn) {
        return btn.element.contains(e.target);
      })) e.preventDefault();

      _get(_getPrototypeOf(GameInitItem.prototype), "btnSearch", this).call(this, e);
    }
  }, {
    key: "gameInit",
    value: function gameInit() {
      var gameProps = this.gamePropsInit();
      this.menu.game.play(gameProps);
    }
  }, {
    key: "gamePropsInit",
    value: function gamePropsInit() {
      var props = {};
      props.playerNames = [];
      props.gameMode = this.formEl.getAttribute('name');
      var gameItem = this.menu.items.find(function (item) {
        return item instanceof _concrete_classes_game__WEBPACK_IMPORTED_MODULE_1__["Game"];
      });
      props.gameItem = gameItem;
      this.inputs.forEach(function (input) {
        if (input.name === 'player-name') {
          props.playerNames.push(input.element.value);
        }
      });
      return props;
    }
  }, {
    key: "saveDefaultInputsValue",
    value: function saveDefaultInputsValue() {
      var _this3 = this;

      var inputElements = this.element.querySelectorAll('input[type=text]');
      this.inputs = [];
      inputElements.forEach(function (inputEl) {
        _this3.inputs.push({
          element: inputEl,
          defaultValue: inputEl.value,
          name: inputEl.getAttribute('name')
        });
      });
    }
  }, {
    key: "clearInputValue",
    value: function clearInputValue(e) {
      this.inputs.forEach(function (input) {
        if (input.element === e.target && e.target.value === input.defaultValue) {
          e.target.value = '';
        }
      });
    }
  }, {
    key: "addInputValue",
    value: function addInputValue(e) {
      this.inputs.forEach(function (input) {
        if (input.element === e.target && e.target.value === '') {
          e.target.value = input.defaultValue;
        }
      });
    }
  }]);

  return GameInitItem;
}(_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/abstract-classes/_menu-item.js":
/*!********************************************************************!*\
  !*** ./blocks/control/scripts/menu/abstract-classes/_menu-item.js ***!
  \********************************************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _external_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_external-items */ "./blocks/control/scripts/menu/abstract-classes/_external-items.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var MenuItem = /*#__PURE__*/function (_ExternalItems) {
  _inherits(MenuItem, _ExternalItems);

  var _super = _createSuper(MenuItem);

  function MenuItem(menu, id) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _super.call(this, id, 'control__block--hide');
    _this.menu = menu;
    _this.btnSearchShim = _this.btnSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuItem, [{
    key: "buttonsInit",
    value: function buttonsInit() {
      var _this2 = this;

      this.buttons = [];
      var btnElements = this.element.querySelectorAll('button');

      var linkedItemSearch = function linkedItemSearch(btnId) {
        var targetItem;

        _this2.menu.itemsPaths.forEach(function (buttonsId, item) {
          buttonsId.forEach(function (id) {
            if (id === btnId) {
              targetItem = item;
            }
          });
        });

        return targetItem;
      };

      btnElements.forEach(function (btnEl) {
        var linkedItem = linkedItemSearch(btnEl.id);

        _this2.buttons.push({
          element: btnEl,
          linkedItem: linkedItem
        });
      });
    }
  }, {
    key: "listen",
    value: function listen(enable) {
      if (enable) {
        this.element.addEventListener('click', this.btnSearchShim);
      } else {
        this.element.removeEventListener('click', this.btnSearchShim);
      }
    }
  }, {
    key: "switch",
    value: function _switch(btn) {
      var targetItem = btn.linkedItem;
      this.hide();
      targetItem.show();
    }
  }, {
    key: "btnSearch",
    value: function btnSearch(e) {
      var _this3 = this;

      this.buttons.forEach(function (btn) {
        if (btn.element.contains(e.target)) {
          _this3.switch(btn);
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      _get(_getPrototypeOf(MenuItem.prototype), "show", this).call(this);

      this.listen(true);
    }
  }, {
    key: "hide",
    value: function hide() {
      _get(_getPrototypeOf(MenuItem.prototype), "hide", this).call(this);

      this.listen(false);
    }
  }]);

  return MenuItem;
}(_external_items__WEBPACK_IMPORTED_MODULE_0__["ExternalItems"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_end-game-window.js":
/*!**************************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_end-game-window.js ***!
  \**************************************************************************/
/*! exports provided: EndGameWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGameWindow", function() { return EndGameWindow; });
/* harmony import */ var _abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_game-init-item */ "./blocks/control/scripts/menu/abstract-classes/_game-init-item.js");
/* harmony import */ var _select_game_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_select-game-mode */ "./blocks/control/scripts/menu/concrete-classes/_select-game-mode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var EndGameWindow = /*#__PURE__*/function (_GameInitItem) {
  _inherits(EndGameWindow, _GameInitItem);

  var _super = _createSuper(EndGameWindow);

  function EndGameWindow() {
    var _this;

    _classCallCheck(this, EndGameWindow);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(props));
    _this.winnerAlertEl = _this.element.querySelector('#winner-alert');
    return _this;
  }

  _createClass(EndGameWindow, [{
    key: "switch",
    value: function _switch(btn) {
      _get(_getPrototypeOf(EndGameWindow.prototype), "switch", this).call(this, btn);

      if (btn.linkedItem instanceof _select_game_mode__WEBPACK_IMPORTED_MODULE_1__["SelectGameMode"]) {
        this.menu.game.exit();
      }
    }
  }, {
    key: "setWinnerMessage",
    value: function setWinnerMessage(message) {
      this.winnerAlertEl.textContent = message;
    }
  }, {
    key: "gameInit",
    value: function gameInit() {
      this.menu.game.replay();
    }
  }]);

  return EndGameWindow;
}(_abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__["GameInitItem"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_game.js":
/*!***************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_game.js ***!
  \***************************************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_external-items */ "./blocks/control/scripts/menu/abstract-classes/_external-items.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Game = /*#__PURE__*/function (_ExternalItems) {
  _inherits(Game, _ExternalItems);

  var _super = _createSuper(Game);

  function Game(id, hideStyleClass, GameClass, menuWindow, endGameWindow, stats) {
    var _this;

    _classCallCheck(this, Game);

    _this = _super.call(this, id, hideStyleClass);
    _this.GameClass = GameClass;
    _this.menuWindow = menuWindow;
    _this.endGameWindow = endGameWindow;
    _this.stats = stats;
    return _this;
  }

  _createClass(Game, [{
    key: "play",
    value: function play(props) {
      var Game = this.GameClass;
      this.game = new Game(props);
    }
  }, {
    key: "replay",
    value: function replay() {
      this.game.restart();
    }
  }, {
    key: "exit",
    value: function exit() {
      this.game.destroy();
    }
  }, {
    key: "close",
    value: function close() {
      this.stats.update();
      this.hide();
      this.menuWindow.show();
      this.endGameWindow.show();
    }
  }]);

  return Game;
}(_abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__["ExternalItems"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_menu-window.js":
/*!**********************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_menu-window.js ***!
  \**********************************************************************/
/*! exports provided: MenuWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWindow", function() { return MenuWindow; });
/* harmony import */ var _abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_external-items */ "./blocks/control/scripts/menu/abstract-classes/_external-items.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var MenuWindow = /*#__PURE__*/function (_ExternalItems) {
  _inherits(MenuWindow, _ExternalItems);

  var _super = _createSuper(MenuWindow);

  function MenuWindow() {
    _classCallCheck(this, MenuWindow);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _super.call.apply(_super, [this].concat(props));
  }

  return MenuWindow;
}(_abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__["ExternalItems"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_multiplayer-options.js":
/*!******************************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_multiplayer-options.js ***!
  \******************************************************************************/
/*! exports provided: MultiplayerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerOptions", function() { return MultiplayerOptions; });
/* harmony import */ var _abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_game-init-item */ "./blocks/control/scripts/menu/abstract-classes/_game-init-item.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var MultiplayerOptions = /*#__PURE__*/function (_GameInitItem) {
  _inherits(MultiplayerOptions, _GameInitItem);

  var _super = _createSuper(MultiplayerOptions);

  function MultiplayerOptions() {
    var _this;

    _classCallCheck(this, MultiplayerOptions);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(props));
    _this.errAlert = _this.element.querySelector('.control__form-err-alert');
    return _this;
  }

  _createClass(MultiplayerOptions, [{
    key: "validate",
    value: function validate() {
      var hasDuplicates = function hasDuplicates(arr) {
        return arr.some(function (item) {
          return arr.indexOf(item) !== arr.lastIndexOf(item);
        });
      };

      var inputNames = [];
      this.inputs.forEach(function (input) {
        return inputNames.push(input.element.value);
      });
      var hasDuplicateName = hasDuplicates(inputNames);

      if (hasDuplicateName) {
        this.errAlert.classList.remove('control__form-err-alert--hide');
      } else {
        this.errAlert.classList.add('control__form-err-alert--hide');
      }

      return !hasDuplicateName;
    }
  }]);

  return MultiplayerOptions;
}(_abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__["GameInitItem"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_select-game-mode.js":
/*!***************************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_select-game-mode.js ***!
  \***************************************************************************/
/*! exports provided: SelectGameMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGameMode", function() { return SelectGameMode; });
/* harmony import */ var _abstract_classes_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_menu-item */ "./blocks/control/scripts/menu/abstract-classes/_menu-item.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SelectGameMode = /*#__PURE__*/function (_MenuItem) {
  _inherits(SelectGameMode, _MenuItem);

  var _super = _createSuper(SelectGameMode);

  function SelectGameMode() {
    var _this;

    _classCallCheck(this, SelectGameMode);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(props));

    _this.listen(true);

    return _this;
  }

  return SelectGameMode;
}(_abstract_classes_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_singleplayer-options.js":
/*!*******************************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_singleplayer-options.js ***!
  \*******************************************************************************/
/*! exports provided: SingleplayerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleplayerOptions", function() { return SingleplayerOptions; });
/* harmony import */ var _abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_game-init-item */ "./blocks/control/scripts/menu/abstract-classes/_game-init-item.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SingleplayerOptions = /*#__PURE__*/function (_GameInitItem) {
  _inherits(SingleplayerOptions, _GameInitItem);

  var _super = _createSuper(SingleplayerOptions);

  function SingleplayerOptions() {
    _classCallCheck(this, SingleplayerOptions);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return _super.call.apply(_super, [this].concat(props));
  }

  _createClass(SingleplayerOptions, [{
    key: "gamePropsInit",
    value: function gamePropsInit() {
      var props = _get(_getPrototypeOf(SingleplayerOptions.prototype), "gamePropsInit", this).call(this);

      var getCheckElValue = function getCheckElValue(name) {
        return document.querySelector('input[name="' + name + '"]:checked').value;
      };

      props.playerSide = getCheckElValue('side');
      return props;
    }
  }]);

  return SingleplayerOptions;
}(_abstract_classes_game_init_item__WEBPACK_IMPORTED_MODULE_0__["GameInitItem"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_stats-table.js":
/*!**********************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_stats-table.js ***!
  \**********************************************************************/
/*! exports provided: StatsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsTable", function() { return StatsTable; });
/* harmony import */ var _abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_external-items */ "./blocks/control/scripts/menu/abstract-classes/_external-items.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var StatsTable = /*#__PURE__*/function (_ExternalItems) {
  _inherits(StatsTable, _ExternalItems);

  var _super = _createSuper(StatsTable);

  function StatsTable(id, hideStyleClass, statsType) {
    var _this;

    _classCallCheck(this, StatsTable);

    _this = _super.call(this, id, hideStyleClass);
    _this.statsType = statsType;
    _this.statElements = [];
    return _this;
  }

  _createClass(StatsTable, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      this.clear();
      var stats = JSON.parse(localStorage.getItem('stats'));

      if (this.emptyCheck(stats[this.statsType])) {
        this.hide();
      } else {
        this.show();
      }

      stats[this.statsType].forEach(function (stat) {
        if (stat) {
          _this2.insertStat(stat);
        }
      });
    }
  }, {
    key: "insertStat",
    value: function insertStat(stat) {
      var statHtml = "<th class=\"stats__table-value\">".concat(stat.name, "</th>\n                            <th class=\"stats__table-value\">").concat(stat.win, "</th>\n                            <th class=\"stats__table-value\">").concat(stat.draw, "</th>\n                            <th class=\"stats__table-value\">").concat(stat.lose, "</th>");
      var tableRowEl = document.createElement('tr');
      tableRowEl.className = 'stats__table-row';
      tableRowEl.innerHTML = statHtml;
      this.statElements.push(tableRowEl);
      this.element.append(tableRowEl);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.statElements.forEach(function (statEl) {
        statEl.remove();
      });
    }
  }, {
    key: "emptyCheck",
    value: function emptyCheck(statsObj) {
      return Object.keys(statsObj).length === 0;
    }
  }]);

  return StatsTable;
}(_abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__["ExternalItems"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/concrete-classes/_stats.js":
/*!****************************************************************!*\
  !*** ./blocks/control/scripts/menu/concrete-classes/_stats.js ***!
  \****************************************************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
/* harmony import */ var _abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-classes/_external-items */ "./blocks/control/scripts/menu/abstract-classes/_external-items.js");
/* harmony import */ var _stats_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stats-table */ "./blocks/control/scripts/menu/concrete-classes/_stats-table.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Stats = /*#__PURE__*/function (_ExternalItems) {
  _inherits(Stats, _ExternalItems);

  var _super = _createSuper(Stats);

  function Stats() {
    var _this;

    _classCallCheck(this, Stats);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(props));
    _this.singleplayerStats = new _stats_table__WEBPACK_IMPORTED_MODULE_1__["StatsTable"]('singleplayer-stats-table', 'stats__table--hide', 'singleplayer');
    _this.multiplayerStats = new _stats_table__WEBPACK_IMPORTED_MODULE_1__["StatsTable"]('multiplayer-stats-table', 'stats__table--hide', 'multiplayer');
    return _this;
  }

  _createClass(Stats, [{
    key: "update",
    value: function update() {
      var stats = JSON.parse(localStorage.getItem('stats'));

      if (!stats) {
        this.hide();
      } else {
        this.singleplayerStats.update();
        this.multiplayerStats.update();
        this.show();
      }
    }
  }]);

  return Stats;
}(_abstract_classes_external_items__WEBPACK_IMPORTED_MODULE_0__["ExternalItems"]);

/***/ }),

/***/ "./blocks/control/scripts/menu/menu.js":
/*!*********************************************!*\
  !*** ./blocks/control/scripts/menu/menu.js ***!
  \*********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _concrete_classes_select_game_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concrete-classes/_select-game-mode */ "./blocks/control/scripts/menu/concrete-classes/_select-game-mode.js");
/* harmony import */ var _concrete_classes_singleplayer_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concrete-classes/_singleplayer-options */ "./blocks/control/scripts/menu/concrete-classes/_singleplayer-options.js");
/* harmony import */ var _concrete_classes_multiplayer_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concrete-classes/_multiplayer-options */ "./blocks/control/scripts/menu/concrete-classes/_multiplayer-options.js");
/* harmony import */ var _concrete_classes_end_game_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concrete-classes/_end-game-window */ "./blocks/control/scripts/menu/concrete-classes/_end-game-window.js");
/* harmony import */ var _concrete_classes_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concrete-classes/_game */ "./blocks/control/scripts/menu/concrete-classes/_game.js");
/* harmony import */ var _concrete_classes_menu_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concrete-classes/_menu-window */ "./blocks/control/scripts/menu/concrete-classes/_menu-window.js");
/* harmony import */ var _concrete_classes_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concrete-classes/_stats */ "./blocks/control/scripts/menu/concrete-classes/_stats.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Menu = /*#__PURE__*/function () {
  function Menu(GameClass) {
    _classCallCheck(this, Menu);

    this.element = document.querySelector('#control');
    this.items = [];
    this.init(GameClass);
  }

  _createClass(Menu, [{
    key: "init",
    value: function init(GameClass) {
      this.items.push(new _concrete_classes_select_game_mode__WEBPACK_IMPORTED_MODULE_0__["SelectGameMode"](this, 'select-game-mode'));
      this.items.push(new _concrete_classes_singleplayer_options__WEBPACK_IMPORTED_MODULE_1__["SingleplayerOptions"](this, 'singleplayer-options'));
      this.items.push(new _concrete_classes_multiplayer_options__WEBPACK_IMPORTED_MODULE_2__["MultiplayerOptions"](this, 'multiplayer-options'));
      var endGameWindow = new _concrete_classes_end_game_window__WEBPACK_IMPORTED_MODULE_3__["EndGameWindow"](this, 'end-game-window');
      this.items.push(endGameWindow);
      this.menuWindow = new _concrete_classes_menu_window__WEBPACK_IMPORTED_MODULE_5__["MenuWindow"]('menu-window', 'menu-window--hide');
      this.items.push(this.menuWindow);
      var stats = new _concrete_classes_stats__WEBPACK_IMPORTED_MODULE_6__["Stats"]('stats', 'stats--hide');
      this.items.push(stats);
      this.game = new _concrete_classes_game__WEBPACK_IMPORTED_MODULE_4__["Game"]('tic-tac-toe', 'tic-tac-toe--hide', GameClass, this.menuWindow, endGameWindow, stats);
      this.items.push(this.game);
      this.itemsPathsInit();
      this.items.forEach(function (item) {
        if (item.buttonsInit) item.buttonsInit();
      });
      stats.update();
    }
  }, {
    key: "itemsPathsInit",
    value: function itemsPathsInit() {
      var _this = this;

      var itemsDependencies = {
        'select-game-mode': ['back-btn', 'exit-btn'],
        'singleplayer-options': ['singleplayer-btn'],
        'multiplayer-options': ['multiplayer-btn'],
        'tic-tac-toe': ['play-btn', 'play-more-btn']
      };
      this.itemsPaths = new Map();

      var itemSearch = function itemSearch(id) {
        for (var i = 0; i < _this.items.length; i++) {
          if (id === _this.items[i].element.id) {
            return _this.items[i];
          }
        }
      };

      for (var itemId in itemsDependencies) {
        var item = itemSearch(itemId);
        this.itemsPaths.set(item, itemsDependencies[itemId]);
      }
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_ai.js":
/*!*******************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_ai.js ***!
  \*******************************************/
/*! exports provided: Ai */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ai", function() { return Ai; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ai = /*#__PURE__*/function () {
  function Ai(ticTacToe, player) {
    _classCallCheck(this, Ai);

    this.board = ticTacToe.board;
    this.player = player;
    this.methodsWeightsInit();
  }

  _createClass(Ai, [{
    key: "methodsWeightsInit",
    value: function methodsWeightsInit() {
      this.moveCalculationMethods = [{
        method: this.getRandomCell.bind(this),
        weight: 10
      }, {
        method: this.getBlockEnemyComb.bind(this),
        weight: 40,
        useEnemyWinComb: true
      }, {
        method: this.getCollectSelfComb.bind(this),
        weight: 50,
        useSelfWinComb: true
      }, {
        method: this.preWinMove.bind(this),
        weight: 0,
        isPreWin: true
      }];
    }
  }, {
    key: "getRandomMethod",
    value: function getRandomMethod(methods) {
      var initialValue = 0;
      var weightSum = methods.reduce(function (acc, curMethod) {
        return acc + curMethod.weight;
      }, initialValue);
      var num = this.generateRandomInteger(1, weightSum);
      var n = 0;

      for (var i = 0; i < methods.length; i++) {
        n += methods[i].weight;

        if (n >= num) {
          return methods[i];
        }
      }
    }
  }, {
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
  }, {
    key: "methodFind",
    value: function methodFind(flag) {
      var foundMethod = this.moveCalculationMethods.find(function (method) {
        return method[flag] === true;
      });
      return foundMethod;
    }
  }, {
    key: "calculationMove",
    value: function calculationMove() {
      var isPreWin = this.preWinCheck(this.player.winCombinations) || this.preWinCheck(this.player.enemyPlayer.winCombinations);
      var preWinMethod;

      if (isPreWin) {
        preWinMethod = this.methodFind('isPreWin');
        preWinMethod.weight = 200;
      }

      var winIsImpossible = this.player.winCombinations.length === 0;

      if (!this.winIsImpossible && winIsImpossible) {
        var winMethod = this.methodFind('useSelfWinComb');
        winMethod.weight = 0;
        this.winIsImpossible = true;
      }

      var winEnemyIsImpossible = this.player.enemyPlayer.winCombinations.length === 0;

      if (!this.winEnemyIsImpossible && winEnemyIsImpossible) {
        var blockMethod = this.methodFind('useEnemyWinComb');
        blockMethod.weight = 0;
        this.winEnemyIsImpossible = true;
      }

      var randomMethod = this.getRandomMethod(this.moveCalculationMethods);
      var cell = randomMethod.method();
      this.player.makeMove(cell);
      if (isPreWin) preWinMethod.weight = 0;
    }
  }, {
    key: "empty\u0421ellsSearch",
    value: function emptyEllsSearch() {
      var emptyСells = [];
      this.board.rows.forEach(function (row) {
        row.forEach(function (cell) {
          if (!cell.figure) {
            emptyСells.push(cell);
          }
        });
      });
      return emptyСells;
    }
  }, {
    key: "getMaxRank",
    value: function getMaxRank(winCombinations) {
      var maxRank = 0;
      winCombinations.forEach(function (combination) {
        var curRank = combination.rank;

        if (curRank > maxRank) {
          maxRank = curRank;
        }
      });
      return maxRank;
    }
  }, {
    key: "getRandomMaxRankComb",
    value: function getRandomMaxRankComb(winCombinations) {
      var maxRank = this.getMaxRank(winCombinations);
      var maxRankCombinations = winCombinations.filter(function (combination) {
        return combination.rank === maxRank;
      });
      var randomCellIndex = this.generateRandomInteger(0, maxRankCombinations.length - 1);
      return maxRankCombinations[randomCellIndex];
    }
  }, {
    key: "getRandomCell",
    value: function getRandomCell() {
      var emptyСells = this.emptyСellsSearch();
      var randomCellIndex = this.generateRandomInteger(0, emptyСells.length - 1);
      return emptyСells[randomCellIndex];
    }
  }, {
    key: "getBlockEnemyComb",
    value: function getBlockEnemyComb() {
      var enemyComb = this.getRandomMaxRankComb(this.player.enemyPlayer.winCombinations);
      return this.getMoveOnCombination(enemyComb);
    }
  }, {
    key: "getCollectSelfComb",
    value: function getCollectSelfComb() {
      var selfComb = this.getRandomMaxRankComb(this.player.winCombinations);
      return this.getMoveOnCombination(selfComb);
    }
  }, {
    key: "preWinMove",
    value: function preWinMove() {
      var isSelfPreWin = this.preWinCheck(this.player.winCombinations);

      if (isSelfPreWin) {
        return this.getCollectSelfComb();
      }

      var isEnemyPreWin = this.preWinCheck(this.player.enemyPlayer.winCombinations);

      if (isEnemyPreWin) {
        return this.getBlockEnemyComb();
      }
    }
  }, {
    key: "preWinCheck",
    value: function preWinCheck(winCombinations) {
      var maxComb = this.getMaxRank(winCombinations);
      return maxComb === this.board.rows.length - 1;
    }
  }, {
    key: "getMoveOnCombination",
    value: function getMoveOnCombination(combination) {
      var emptyСells = combination.cells.filter(function (cell) {
        return !cell.figure;
      });
      var randomCellIndex = this.generateRandomInteger(0, emptyСells.length - 1);
      return emptyСells[randomCellIndex];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.winIsImpossible = false;
      this.winEnemyIsImpossible = false;
      this.methodsWeightsInit();
    }
  }]);

  return Ai;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_board.js":
/*!**********************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_board.js ***!
  \**********************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cell */ "./blocks/tic-tac-toe/scripts/_cell.js");
/* harmony import */ var _combination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_combination */ "./blocks/tic-tac-toe/scripts/_combination.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board = /*#__PURE__*/function () {
  function Board(ticTacToe) {
    _classCallCheck(this, Board);

    this.ticTacToe = ticTacToe;
    this.element = this.ticTacToe.element.querySelector('.tic-tac-toe__board');
    this.rows = [];
    this.winCombinations = [];
    this.clickedCellSearchShim = this.clickedCellSearch.bind(this);
    this.init();
  }

  _createClass(Board, [{
    key: "init",
    value: function init() {
      this.cellsInit();
      this.winCombinationsInit();
      if (this.ticTacToe.gameMode === 'multiplayer') this.listen(true);
    }
  }, {
    key: "cellsInit",
    value: function cellsInit() {
      this.cellsCount = 0;

      for (var i = 0; i < 3; i++) {
        this.rows[i] = new Array(3);

        for (var j = 0; j < 3; j++) {
          this.cellsCount++;
          this.rows[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](this, this.cellsCount);
        }
      }
    }
  }, {
    key: "winCombinationsInit",
    value: function winCombinationsInit() {
      var _this = this;

      this.winCombinations = [];
      var isSingleplayer = this.ticTacToe.gameMode === 'singleplayer';

      var _loop = function _loop(i) {
        var combination = new _combination__WEBPACK_IMPORTED_MODULE_1__["Combination"](isSingleplayer);

        for (var _j3 = 0; _j3 < _this.rows.length; _j3++) {
          combination.cells.push(_this.rows[i][_j3]);
        }

        combination.winLineCoords = _this.winLineCoordsCalculate(i);

        _this.winCombinations.push(combination);

        combination.cells.forEach(function (cell) {
          return cell.winCombinations.push(combination);
        });
      };

      for (var i = 0; i < this.rows.length; i++) {
        _loop(i);
      }

      var _loop2 = function _loop2(_j) {
        var combination = new _combination__WEBPACK_IMPORTED_MODULE_1__["Combination"](isSingleplayer);

        for (var _i3 = 0; _i3 < _this.rows.length; _i3++) {
          combination.cells.push(_this.rows[_i3][_j]);
        }

        combination.winLineCoords = _this.winLineCoordsCalculate(_j, 'columns');

        _this.winCombinations.push(combination);

        combination.cells.forEach(function (cell) {
          return cell.winCombinations.push(combination);
        });
      };

      for (var _j = 0; _j < this.rows.length; _j++) {
        _loop2(_j);
      }

      var combination = new _combination__WEBPACK_IMPORTED_MODULE_1__["Combination"](isSingleplayer);

      for (var _i = 0; _i < this.rows.length; _i++) {
        var _j2 = _i;
        combination.cells.push(this.rows[_i][_j2]);
      }

      combination.winLineCoords = this.winLineCoordsCalculate(null, 'secondary-diagonal');
      combination.isDiagonal = true;
      this.winCombinations.push(combination);
      combination.cells.forEach(function (cell) {
        return cell.winCombinations.push(combination);
      });
      combination = new _combination__WEBPACK_IMPORTED_MODULE_1__["Combination"](isSingleplayer);
      var j = 0;

      for (var _i2 = 2; _i2 > -1; _i2--) {
        combination.cells.push(this.rows[_i2][j]);
        j++;
      }

      combination.winLineCoords = this.winLineCoordsCalculate(null, 'main-diagonal');
      combination.isDiagonal = true;
      this.winCombinations.push(combination);
      combination.cells.forEach(function (cell) {
        return cell.winCombinations.push(combination);
      });
    }
  }, {
    key: "listen",
    value: function listen(enable) {
      if (enable) {
        this.element.addEventListener('click', this.clickedCellSearchShim);
      } else {
        this.element.removeEventListener('click', this.clickedCellSearchShim);
      }
    }
  }, {
    key: "clickedCellSearch",
    value: function clickedCellSearch(e) {
      var clickedCell;

      for (var i = 0; i < this.rows.length; i++) {
        for (var j = 0; j < this.rows.length; j++) {
          if (this.rows[i][j].element.contains(e.target)) {
            clickedCell = this.rows[i][j];
            break;
          }
        }
      }

      if (clickedCell) {
        if (!clickedCell.figure) {
          this.ticTacToe.curPlayer.makeMove(clickedCell);
        }
      }
    }
  }, {
    key: "winLineCoordsCalculate",
    value: function winLineCoordsCalculate(count, combinationType) {
      var coordSteps = [16.6, 50, 83.4];
      var x1 = 5;
      var x2 = 100 - x1;
      var y1 = coordSteps[count];
      var y2 = y1;

      if (combinationType === 'columns') {
        var _ref = [y1, x1];
        x1 = _ref[0];
        y1 = _ref[1];
        var _ref2 = [y2, x2];
        x2 = _ref2[0];
        y2 = _ref2[1];
      }

      if (combinationType === 'main-diagonal') {
        y1 = x2;
        y2 = x1;
      }

      if (combinationType === 'secondary-diagonal') {
        y1 = x1;
        y2 = x2;
      }

      var coords = {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
      };
      return coords;
    }
  }, {
    key: "winCombinationsCheck",
    value: function winCombinationsCheck(cell) {
      var _this2 = this;

      var winCombination;
      cell.winCombinations.forEach(function (combination) {
        if (_this2.onlyDuplicatesCheck(combination.cells)) {
          winCombination = combination;
        }
      });
      return winCombination;
    }
  }, {
    key: "onlyDuplicatesCheck",
    value: function onlyDuplicatesCheck(arr) {
      var firstVal = arr[0].figure;

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].figure !== firstVal || !arr[i].figure) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "endGameCheck",
    value: function endGameCheck(cell) {
      var enemyPlayerWinComb = this.ticTacToe.curPlayer.enemyPlayer.winCombinations;
      var filteredEnemyPlayerWinComb = this.winCombinationsFilter(cell.winCombinations, enemyPlayerWinComb);
      this.ticTacToe.curPlayer.enemyPlayer.winCombinations = filteredEnemyPlayerWinComb;
      var isSingleplayer = this.ticTacToe.gameMode === 'singleplayer';

      if (isSingleplayer) {
        this.winCombinationsRankUp(cell.winCombinations);
      }

      var winCombination = this.winCombinationsCheck(cell);
      var gameOver = false;

      if (winCombination || this.ticTacToe.moveCounter === this.cellsCount) {
        this.ticTacToe.gameOver(winCombination);
        gameOver = true;
      }

      if (gameOver) this.listen(false);
      return gameOver;
    }
  }, {
    key: "winCombinationsRankUp",
    value: function winCombinationsRankUp(winCombinations) {
      winCombinations.forEach(function (combination) {
        return combination.rank++;
      });
    }
  }, {
    key: "winCombinationsFilter",
    value: function winCombinationsFilter(excludedCombinations, filtrationСombinations) {
      var filteredComb = filtrationСombinations.filter(function (combination) {
        return !excludedCombinations.includes(combination);
      });
      return filteredComb;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.rows.forEach(function (row) {
        row.forEach(function (cell) {
          if (cell.figure) {
            cell.destroy();
          }
        });
      });
    }
  }]);

  return Board;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_cell.js":
/*!*********************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_cell.js ***!
  \*********************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cell = /*#__PURE__*/function () {
  function Cell(board, elNumber) {
    _classCallCheck(this, Cell);

    this.containerEl = board.element;
    this.element = this.containerEl.querySelector(".tic-tac-toe__board > :nth-child(".concat(elNumber, ")"));
    this.winCombinations = [];
    this.figure = null;
  }

  _createClass(Cell, [{
    key: "draw",
    value: function draw() {
      var figureClass = this.figureStyleClasses.class;
      var hideClass = this.figureStyleClasses.hideClass;
      var figureEl = this.element.querySelector(".".concat(figureClass));
      figureEl.classList.toggle(hideClass);
      this.element.classList.toggle('tic-tac-toe__cell--active');
    }
  }, {
    key: "clear",
    value: function clear() {
      var figureClass = this.figureStyleClasses.class;
      var hideClass = this.figureStyleClasses.hideClass;
      var figureEl = this.element.querySelector(".".concat(figureClass));
      figureEl.classList.add(hideClass);
      this.element.classList.remove('tic-tac-toe__cell--active');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clear();
      this.winCombinations = [];
      this.figureStyleClasses = null;
      this.figure = null;
    }
  }]);

  return Cell;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_combination.js":
/*!****************************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_combination.js ***!
  \****************************************************/
/*! exports provided: Combination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combination", function() { return Combination; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Combination = function Combination(isSingleplayer) {
  _classCallCheck(this, Combination);

  this.cells = [];
  this.winLineCoords;
  if (isSingleplayer) this.rank = 0;
};

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_player-stats.js":
/*!*****************************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_player-stats.js ***!
  \*****************************************************/
/*! exports provided: PlayerStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStats", function() { return PlayerStats; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerStats = function PlayerStats(name) {
  _classCallCheck(this, PlayerStats);

  this.name = name;
  this.win = 0;
  this.draw = 0;
  this.lose = 0;
};

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_player.js":
/*!***********************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_player.js ***!
  \***********************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_score */ "./blocks/tic-tac-toe/scripts/_score.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Player = /*#__PURE__*/function () {
  function Player(ticTacToe, name, side, isAi, winCombinations) {
    _classCallCheck(this, Player);

    this.ticTacToe = ticTacToe;
    this.board = this.ticTacToe.board;
    this.name = name;
    this.side = side;
    this.figure = {
      figureStyleClasses: {
        class: this.side,
        hideClass: "".concat(this.side, "--hide")
      },
      drawAnimationTime: 1000
    };
    this.isAi = isAi || false;
    this.activeStyle = 'score__block--active';
    this.setWinCombinations(winCombinations);
    var scoreEl = this.ticTacToe.element.querySelector("[name=".concat(this.side, "]"));
    this.score = new _score__WEBPACK_IMPORTED_MODULE_0__["Score"](scoreEl, this.name);
  }

  _createClass(Player, [{
    key: "setWinCombinations",
    value: function setWinCombinations(winCombinations) {
      this.winCombinations = winCombinations;
    }
  }, {
    key: "makeMove",
    value: function makeMove(cell) {
      cell.figure = this.side;
      cell.figureStyleClasses = this.figure.figureStyleClasses;
      var gameOver = this.board.endGameCheck(cell);
      var enemyFigureDrawTime = this.enemyPlayer.figure.drawAnimationTime;
      var delayedDrawMove = this.ticTacToe.setDelay(this.drawMove, enemyFigureDrawTime, this);

      if (!this.isAi) {
        this.drawMove(cell, gameOver);
      } else {
        if (this.ticTacToe.moveCounter !== 1) {
          delayedDrawMove(cell, gameOver);
        } else {
          var delayedDrawFirstMove = this.ticTacToe.setDelay(this.drawMove, 500, this);
          delayedDrawFirstMove(cell, gameOver);
        }
      }
    }
  }, {
    key: "drawMove",
    value: function drawMove(cell, gameOver) {
      cell.draw();

      if (!gameOver) {
        this.toggleActiveStyle();
        this.ticTacToe.changeMove();
      }
    }
  }, {
    key: "toggleActiveStyle",
    value: function toggleActiveStyle() {
      this.score.element.classList.toggle(this.activeStyle);
    }
  }, {
    key: "removeActiveStyle",
    value: function removeActiveStyle() {
      this.score.element.classList.remove(this.activeStyle);
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/_score.js":
/*!**********************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/_score.js ***!
  \**********************************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score = /*#__PURE__*/function () {
  function Score(element, name) {
    _classCallCheck(this, Score);

    this.count = 0;
    this.element = element;
    this.valueEl = this.element.querySelector('[name=value]');
    this.valueEl.textContent = this.count;

    if (name) {
      this.nameEl = this.element.querySelector('[name=name]');
      this.nameEl.textContent = name;
    }
  }

  _createClass(Score, [{
    key: "addPoint",
    value: function addPoint() {
      this.count++;
      this.valueEl.textContent = this.count;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.count = 0;
    }
  }]);

  return Score;
}();

/***/ }),

/***/ "./blocks/tic-tac-toe/scripts/tic-tac-toe.js":
/*!***************************************************!*\
  !*** ./blocks/tic-tac-toe/scripts/tic-tac-toe.js ***!
  \***************************************************/
/*! exports provided: TicTacToe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToe", function() { return TicTacToe; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_board */ "./blocks/tic-tac-toe/scripts/_board.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_player */ "./blocks/tic-tac-toe/scripts/_player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ai */ "./blocks/tic-tac-toe/scripts/_ai.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_score */ "./blocks/tic-tac-toe/scripts/_score.js");
/* harmony import */ var _player_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_player-stats */ "./blocks/tic-tac-toe/scripts/_player-stats.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe(props) {
    _classCallCheck(this, TicTacToe);

    this.gameItem = props.gameItem;
    this.element = document.querySelector('#tic-tac-toe');
    this.gameMode = props.gameMode;
    this.moveCounter = 0;
    this.players = [];
    this.activeStyle = "score__block--active";
    this.gameOverAlertDelay = 2000;
    this.winLineAnimationTime = 2000;
    var scoreEl = this.element.querySelector("[name=draw]");
    this.score = new _score__WEBPACK_IMPORTED_MODULE_3__["Score"](scoreEl);
    this.init(props);
  }

  _createClass(TicTacToe, [{
    key: "init",
    value: function init(props) {
      var _this = this;

      this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["Board"](this);
      props.playerNames.forEach(function (playerName, sideNumber) {
        if (_this.gameMode === 'singleplayer') {
          var aiSide = props.playerSide === 'cross' ? 'zero' : 'cross';
          var aiPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](_this, 'AI', aiSide, true, _toConsumableArray(_this.board.winCombinations));
          var peoplePlayer = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](_this, playerName, props.playerSide, false, _toConsumableArray(_this.board.winCombinations));

          _this.players.push(peoplePlayer);

          _this.players.push(aiPlayer);

          _this.ai = new _ai__WEBPACK_IMPORTED_MODULE_2__["Ai"](_this, aiPlayer);
        } else {
          _this.players.push(new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](_this, playerName, sideNumber === 0 ? 'cross' : 'zero', false, _toConsumableArray(_this.board.winCombinations)));
        }
      });
      this.players[0].enemyPlayer = this.players[1];
      this.players[1].enemyPlayer = this.players[0];
      this.curPlayer = this.players[0];
      this.changeMove();
    }
  }, {
    key: "winLineInit",
    value: function winLineInit(winCombination) {
      var lineImgHtml = "<svg class=\"win-img\">\n        <line class=\"win-img__line\" x1=\"".concat(winCombination.winLineCoords.x1, "%\" y1=\"").concat(winCombination.winLineCoords.y1, "%\" x2=\"").concat(winCombination.winLineCoords.x2, "%\" y2=\"").concat(winCombination.winLineCoords.y2, "%\" stroke=\"black\" stroke-width=\"40\" stroke-linecap=\"round\"></line>\n        </svg>");
      this.winLineAreaEl = document.createElement('div');
      this.winLineAreaEl.className = 'tic-tac-toe__win-line-area';
      this.winLineAreaEl.innerHTML = lineImgHtml;
      this.board.element.append(this.winLineAreaEl);
      var winLineImgEl = this.winLineAreaEl.querySelector('.win-img');
      var figureDrawTime = this.curPlayer.figure.drawAnimationTime;
      var enemyFigureDrawTime = this.curPlayer.enemyPlayer.figure.drawAnimationTime;
      var delay = this.curPlayer.isAi ? enemyFigureDrawTime + figureDrawTime : figureDrawTime;
      var delayedWinLineDraw = this.setDelay(this.winLineDraw, delay, this);
      delayedWinLineDraw(winLineImgEl, winCombination.isDiagonal);
    }
  }, {
    key: "winLineDraw",
    value: function winLineDraw(winLineImgEl, isDiagonal) {
      winLineImgEl.classList.add("win-img--draw".concat(isDiagonal === true ? '-diagonal' : ''));
    }
  }, {
    key: "setDelay",
    value: function setDelay(f, ms, context) {
      return function () {
        var _arguments = arguments;
        setTimeout(function () {
          return f.apply(context, _arguments);
        }, ms);
      };
    }
  }, {
    key: "changeMove",
    value: function changeMove() {
      this.moveCounter++;

      if (this.moveCounter % 2 === 0) {
        this.curPlayer = this.curPlayerSearch('zero');
      } else {
        this.curPlayer = this.curPlayerSearch('cross');
      }

      this.curPlayer.toggleActiveStyle();

      if (this.gameMode === 'singleplayer') {
        if (this.curPlayer.isAi) {
          this.board.listen(false);
          this.ai.calculationMove();
        } else {
          this.board.listen(true);
        }
      }
    }
  }, {
    key: "curPlayerSearch",
    value: function curPlayerSearch(side) {
      var foundPlayer;
      this.players.forEach(function (player) {
        if (player.side === side) {
          foundPlayer = player;
        }
      });
      return foundPlayer;
    }
  }, {
    key: "gameOver",
    value: function gameOver(winCombination) {
      var delay = this.gameOverAlertDelay + this.winLineAnimationTime;

      if (winCombination) {
        this.winLineInit(winCombination);
        this.setDelay(this.winAlertShow, delay, this)(winCombination);
        this.curPlayer.score.addPoint();
        this.saveStats();
      } else {
        this.setDelay(this.drawAlertShow, delay, this)();
        this.curPlayer.toggleActiveStyle();
        this.score.element.classList.toggle(this.activeStyle);
        this.score.addPoint();
        this.saveStats(true);
      }
    }
  }, {
    key: "winAlertShow",
    value: function winAlertShow() {
      this.gameItem.endGameWindow.setWinnerMessage("".concat(this.curPlayer.name, " is winner by playing on the ").concat(this.curPlayer.side, " side!"));
      this.gameItem.close();
    }
  }, {
    key: "drawAlertShow",
    value: function drawAlertShow() {
      this.gameItem.endGameWindow.setWinnerMessage('Draw!');
      this.gameItem.close();
    }
  }, {
    key: "destroyScoreBoard",
    value: function destroyScoreBoard() {
      this.score.destroy();
      this.players.forEach(function (player) {
        player.score.destroy();
      });
    }
  }, {
    key: "destroy",
    value: function destroy(isRestart) {
      this.board.destroy();
      if (this.winLineAreaEl) this.winLineAreaEl.remove();
      this.score.element.classList.remove(this.activeStyle);
      this.players.forEach(function (player) {
        return player.removeActiveStyle();
      });
      if (!isRestart) this.destroyScoreBoard();
    }
  }, {
    key: "restart",
    value: function restart() {
      var _this2 = this;

      this.destroy(true);
      this.moveCounter = 0;
      this.board.winCombinationsInit();
      if (this.ai) this.ai.reset();
      this.players.forEach(function (player) {
        return player.setWinCombinations(_toConsumableArray(_this2.board.winCombinations));
      });
      this.curPlayer = this.players[0];
      this.changeMove();
      if (this.gameMode === 'multiplayer') this.board.listen(true);
    }
  }, {
    key: "saveStats",
    value: function saveStats(isDraw) {
      var _this3 = this;

      var stats = JSON.parse(localStorage.getItem('stats'));
      var playerName1 = this.curPlayer.name;
      var playerName2 = this.curPlayer.enemyPlayer.name;

      if (isDraw) {
        if (stats === null) {
          this.players.forEach(function (player) {
            var playerStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](player);
            playerStat.draw++;
          });
        } else {
          this.players.forEach(function (player) {
            var playerStat = _this3.playerStatsSearch(player.name, stats);

            if (!playerStat) {
              playerStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](player.name);

              stats[_this3.gameMode].push(playerStat);
            }

            playerStat.draw++;
          });
        }
      } else {
        if (stats === null) {
          stats = this.createStorage();
          var winnerStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](playerName1);
          var loserStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](playerName2);
          winnerStat.win++;
          loserStat.lose++;
          stats[this.gameMode].push(winnerStat);
          stats[this.gameMode].push(loserStat);
        } else {
          var _winnerStat = this.playerStatsSearch(playerName1, stats);

          var _loserStat = this.playerStatsSearch(playerName2, stats);

          if (!_winnerStat) {
            _winnerStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](playerName1);
            stats[this.gameMode].push(_winnerStat);
          }

          if (!_loserStat) {
            _loserStat = new _player_stats__WEBPACK_IMPORTED_MODULE_4__["PlayerStats"](playerName2);
            stats[this.gameMode].push(_loserStat);
          }

          _winnerStat.win++;
          _loserStat.lose++;
        }
      }

      this.statsSort(stats[this.gameMode]);
      localStorage.setItem('stats', JSON.stringify(stats));
    }
  }, {
    key: "statsSort",
    value: function statsSort(stats) {
      stats.sort(function (a, b) {
        return b.win - a.win;
      });
    }
  }, {
    key: "playerStatsSearch",
    value: function playerStatsSearch(name, stats) {
      var requiredPlayer;

      for (var player in stats[this.gameMode]) {
        var playerName = stats[this.gameMode][player].name;

        if (playerName === name) {
          requiredPlayer = stats[this.gameMode][player];
          break;
        }
      }

      return requiredPlayer;
    }
  }, {
    key: "createStorage",
    value: function createStorage() {
      var stats = {
        singleplayer: [],
        multiplayer: []
      };
      localStorage.setItem('stats', JSON.stringify(stats));
      return stats;
    }
  }]);

  return TicTacToe;
}();

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_control_scripts_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/control/scripts/control */ "./blocks/control/scripts/control.js");
/* harmony import */ var _blocks_tic_tac_toe_scripts_tic_tac_toe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/tic-tac-toe/scripts/tic-tac-toe */ "./blocks/tic-tac-toe/scripts/tic-tac-toe.js");




/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map