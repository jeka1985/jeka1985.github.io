webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _Countdown = __webpack_require__(178);

	var _Countdown2 = _interopRequireDefault(_Countdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_Countdown2.default, {
	    stop: new Date("Mon Nov 30 2016 12:36:45 GMT+0300 (MSK)")
	}), document.getElementById('application-wrapper'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Flipper = __webpack_require__(179);

	var _Flipper2 = _interopRequireDefault(_Flipper);

	var _schema = __webpack_require__(183);

	var _schema2 = _interopRequireDefault(_schema);

	__webpack_require__(184);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Countdown = function (_React$PureComponent) {
	  _inherits(Countdown, _React$PureComponent);

	  function Countdown(props) {
	    _classCallCheck(this, Countdown);

	    /**
	     * @type {object}
	     * @property {object} diff - initial diff object
	     */
	    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));

	    _this.state = {
	      diff: _this.getDiffObject()
	    };
	    return _this;
	  }

	  /**
	   * Create second interval
	   */


	  _createClass(Countdown, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.interval = window.setInterval(function () {
	        return _this2.updateTime();
	      }, 1000);
	    }

	    /**
	     * Destroy second interval
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.clearInterval(this.interval);
	    }

	    /**
	     * Calculate diff object between stop and current date
	     * @return {Object} formatted value
	     */

	  }, {
	    key: 'getDiffObject',
	    value: function getDiffObject() {
	      var ms = Math.abs(this.props.stop - new Date().getTime()),
	          s = Math.floor(ms / 1000),
	          m = Math.floor(s / 60),
	          h = Math.floor(m / 60),
	          d = Math.floor(h / 24);

	      return {
	        days: Math.floor(h / 24),
	        hours: h % 24,
	        minutes: m % 60,
	        seconds: s % 60
	      };
	    }

	    /**
	     * Update state with calcualted diff object
	     */

	  }, {
	    key: 'updateTime',
	    value: function updateTime() {
	      this.setState({ diff: this.getDiffObject() });
	    }

	    /**
	     * Returns formated to 2 digits string
	     * @param {Number} data - raw value
	     * @return {String} formatted value
	     */

	  }, {
	    key: 'getFormattedVal',
	    value: function getFormattedVal(data) {
	      return (data < 10 ? '0' + data : data) + '';
	    }

	    /**
	     * Render Flipper component for each digit of diff object vals
	     * @return {ReactElement} markup
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var forks = {
	        days: [[0, 9], [0, 9]],
	        hours: [[0, 2], [0, 4]],
	        minutes: [[0, 5], [0, 9]],
	        seconds: [[0, 5], [0, 9]]
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'countdown' },
	        Object.keys(this.state.diff).map(function (key) {
	          return _react2.default.createElement(
	            'div',
	            {
	              key: key,
	              className: 'countdown-' + key },
	            Array(2).fill(0).map(function (_, i) {
	              return _react2.default.createElement(_Flipper2.default, {
	                key: '' + key + i,
	                reverse: true,
	                now: +_this3.getFormattedVal(_this3.state.diff[key])[i],
	                min: forks[key][i][0],
	                max: forks[key][i][1]
	              });
	            })
	          );
	        })
	      );
	    }
	  }]);

	  return Countdown;
	}(_react2.default.PureComponent);

	;

	Countdown.propTypes = _schema2.default.types;

	Countdown.defaultProps = _schema2.default.defaults;

	exports.default = Countdown;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _schema = __webpack_require__(180);

	var _schema2 = _interopRequireDefault(_schema);

	__webpack_require__(181);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Flipper = function (_React$PureComponent) {
	  _inherits(Flipper, _React$PureComponent);

	  function Flipper(props) {
	    _classCallCheck(this, Flipper);

	    /**
	     * @type {object}
	     * @property {object} toggle - flag for switching index of current digit index
	     */
	    var _this = _possibleConstructorReturn(this, (Flipper.__proto__ || Object.getPrototypeOf(Flipper)).call(this, props));

	    _this.state = { toggle: false };
	    return _this;
	  }

	  /**
	   * Inverse state.toggle flag
	   */


	  _createClass(Flipper, [{
	    key: 'tick',
	    value: function tick() {
	      this.setState({ toggle: !this.state.toggle });
	    }

	    /**
	     * Returns next/prev value of digits linked list
	     * @param {number} current - currently active value
	     * @param {string} direction - list move direction
	     * @return {number} linked list value
	     */

	  }, {
	    key: 'getCount',
	    value: function getCount(current, direction) {
	      var isRev = this.props.reverse,
	          isNext = direction == 'next',
	          head = this.props[isRev ? 'min' : 'max'],
	          tail = this.props[isRev ? 'max' : 'min'];

	      return isNext ? current == head ? tail : current + (isRev ? -1 : 1) : current == tail ? head : current + (isRev ? 1 : -1);
	    }

	    /**
	     * Execute flip action in 'props.now' value has been changed
	     * @param {object} newProps - next props object
	     */

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      newProps.now !== this.props.now && this.tick();
	    }

	    /**
	     * Generate semi linked list structure with siblings of active number
	     * Index of active number depends of 'state.toggle' flag
	     * @param {object} newProps - next props object
	     * @return {array} linked list slice
	     */

	  }, {
	    key: 'getRange',
	    value: function getRange(initial) {
	      var prev = this.getCount(initial, 'prev'),
	          arr = [initial, prev, this.getCount(prev, 'prev')];

	      arr[!this.state.toggle ? 'unshift' : 'push'](!this.state.toggle ? this.getCount(initial, 'next') : this.getCount(prev, 'prev'));

	      return arr;
	    }

	    /**
	     * Render card sets for number
	     * @return {ReactElement} markup
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'cards' },
	        this.getRange(this.props.now).map(function (val, i) {
	          return _react2.default.createElement(
	            'div',
	            {
	              key: 'flip-card' + i,
	              className: 'card' + (val == _this2.props.now ? ' now' : '') },
	            _react2.default.createElement(
	              'div',
	              { className: 'sides' },
	              ['front', 'back'].map(function (key) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: 'side' + key, className: 'side ' + key },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'side-num' },
	                    key == 'front' ? val : _this2.getCount(val, 'next')
	                  )
	                );
	              })
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return Flipper;
	}(_react2.default.PureComponent);

	;

	Flipper.propTypes = _schema2.default.types;

	Flipper.defaultProps = _schema2.default.defaults;

	exports.default = Flipper;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	exports.default = {
	  types: {
	    reverse: _react.PropTypes.bool,
	    now: _react.PropTypes.number.isRequired,
	    min: _react.PropTypes.number,
	    max: _react.PropTypes.number
	  },

	  defaults: {
	    reverse: false,
	    now: 0,
	    min: 0,
	    max: 9
	  }
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	exports.default = {

	  types: {
	    stop: _react.PropTypes.instanceOf(Date),
	    onStart: _react.PropTypes.func,
	    onStop: _react.PropTypes.func
	  },

	  defaults: {
	    stop: new Date("Mon Nov 30 2020 00:00:00 GMT+0300 (MSK)")
	  }
	};

/***/ },

/***/ 184:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});