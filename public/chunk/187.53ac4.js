"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[187],{1187:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ MessagePopup)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8674);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2165);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3948);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5666);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar MessagePopup = /*#__PURE__*/function (_ui$view$MessagePopup) {\n  _inherits(MessagePopup, _ui$view$MessagePopup);\n\n  var _super = _createSuper(MessagePopup);\n\n  function MessagePopup() {\n    var _this;\n\n    _classCallCheck(this, MessagePopup);\n\n    _this = _super.call(this);\n    _this.left = _this.right = 0;\n    _this.boxBg.defaultColor = "#000000";\n    _this.boxBg.hoverColor = "#000000";\n    _this.boxBg.radius = 20;\n    return _this;\n  }\n\n  _createClass(MessagePopup, [{\n    key: "popup",\n    value: function () {\n      var _popup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, parent) {\n        var message;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                message = _ref.message;\n                Laya.Tween.clearAll(this);\n                this.alpha = 0;\n                this.y = -2 * this.height;\n                this.message.text = message;\n                _context.next = 7;\n                return Laya.promises.Tween.to(this, {\n                  y: 0,\n                  alpha: 1\n                }, 300, Laya.Ease.backOut);\n\n              case 7:\n                _context.next = 9;\n                return Laya.promises.Tween.to(this, {\n                  alpha: 0\n                }, 300, Laya.Ease.strongIn, 3000);\n\n              case 9:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function popup(_x, _x2) {\n        return _popup.apply(this, arguments);\n      }\n\n      return popup;\n    }()\n  }]);\n\n  return MessagePopup;\n}(ui.view.MessagePopupUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE4Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUtBO0FBQUE7QUFBQTs7QUFMQTtBQUFBO0FBQUE7QUFNQTtBQUFBOztBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZV9yZXN0YXJ0Ly4vc3JjL3VpL3RoZW1lcy9tZXNzYWdlLmpzPzcxNGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVBvcHVwIGV4dGVuZHMgdWkudmlldy5NZXNzYWdlUG9wdXBVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuYm94QmcuZGVmYXVsdENvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5ib3hCZy5ob3ZlckNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgdGhpcy5ib3hCZy5yYWRpdXMgPSAyMDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwb3B1cCh7bWVzc2FnZX0sIHBhcmVudCkge1xyXG4gICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gLSAyICogdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRleHQgPSBtZXNzYWdlO1xyXG4gICAgICAgIGF3YWl0IExheWEucHJvbWlzZXMuVHdlZW4udG8odGhpcywgeyB5OiAwLCBhbHBoYTogMSB9LCAzMDAsIExheWEuRWFzZS5iYWNrT3V0KSxcclxuICAgICAgICBhd2FpdCBMYXlhLnByb21pc2VzLlR3ZWVuLnRvKHRoaXMsIHsgYWxwaGE6IDB9LCAzMDAsIExheWEuRWFzZS5zdHJvbmdJbiwgMzAwMCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1187\n')}}]);