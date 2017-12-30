'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatWall = require('./ChatWall');

var _ChatWall2 = _interopRequireDefault(_ChatWall);

var _ChatBar = require('./ChatBar');

var _ChatBar2 = _interopRequireDefault(_ChatBar);

var _Robot = require('./Robot');

var _Robot2 = _interopRequireDefault(_Robot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conversation = function (_React$Component) {
	_inherits(Conversation, _React$Component);

	function Conversation(props) {
		_classCallCheck(this, Conversation);

		var _this = _possibleConstructorReturn(this, (Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call(this, props));

		_this.handleChatBarSubmit = _this.handleChatBarSubmit.bind(_this);

		var walls = [];
		for (var i = 0; i < _this.props.contacts; i++) {
			walls.push([]);
		}

		_this.state = {
			walls: walls
		};

		_this._timeout = null;
		return _this;
	}

	_createClass(Conversation, [{
		key: 'handleChatBarSubmit',
		value: function handleChatBarSubmit(value) {
			var _this2 = this;

			this.setState(function (prevState, props) {
				prevState.walls[props.index].push(value);

				return _this2.state;
			});

			clearTimeout(this._timeout);
			this.addBotMsg = this.addBotMsg.bind(this);
			this._timeout = setTimeout(this.addBotMsg, 350);
		}
	}, {
		key: 'addBotMsg',
		value: function addBotMsg() {
			var _this3 = this;

			var index = this.props.index;
			var msgLines = this.state.walls[index];
			var bot = new _Robot2.default();
			var botMsg = bot.getResponse(msgLines[msgLines.length - 1]);

			this.setState(function (prevState) {
				prevState.walls[index].push(botMsg);

				return _this3.state;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var index = this.props.index;

			return _react2.default.createElement(
				'section',
				{ className: 'Conversation' },
				this.props.index !== '' && [_react2.default.createElement(_ChatWall2.default, { key: index, index: index, wall: this.state.walls[index] }), _react2.default.createElement(_ChatBar2.default, { key: 'chatBar', onChatBarSubmit: this.handleChatBarSubmit })]
			);
		}
	}]);

	return Conversation;
}(_react2.default.Component);

;

exports.default = Conversation;