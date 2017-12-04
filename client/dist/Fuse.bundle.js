webpackJsonp([1],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _Homepage = __webpack_require__(65);

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
(0, _reactDom.render)(_react2.default.createElement(_Homepage2.default, null), document.getElementById('root'));

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Calendar = __webpack_require__(66);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _AskQuestion = __webpack_require__(67);

var _AskQuestion2 = _interopRequireDefault(_AskQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AskQuestion2.default, null),
    _react2.default.createElement(_Calendar2.default, null)
  );
};

exports.default = HomePage;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar() {
  return _react2.default.createElement(
    'div',
    null,
    'This is the calendar component. More work is to be done.'
  );
};

exports.default = Calendar;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AskQuestion = function AskQuestion() {
  return _react2.default.createElement(
    'div',
    null,
    'This is the question component. Build will start asap.'
  );
};

exports.default = AskQuestion;

/***/ })

},[35]);