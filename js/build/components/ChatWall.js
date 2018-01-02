'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatWall = function (_React$Component) {
	_inherits(ChatWall, _React$Component);

	function ChatWall() {
		_classCallCheck(this, ChatWall);

		return _possibleConstructorReturn(this, (ChatWall.__proto__ || Object.getPrototypeOf(ChatWall)).apply(this, arguments));
	}

	_createClass(ChatWall, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var wall = document.querySelector('.msgLines');
			wall.scrollTop = wall.scrollHeight;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var wall = document.querySelector('.msgLines');
			wall.scrollTop = wall.scrollHeight;
		}
	}, {
		key: 'render',
		value: function render() {
			var msgs = this.props.wall;
			var senders = this.props.senders;
			var msgLines = msgs.map(function (msg, index) {
				var msgSender = senders[index];

				return _react2.default.createElement(
					'p',
					{ className: msgSender, key: index },
					_react2.default.createElement(
						'span',
						null,
						msg
					)
				);
			});

			return _react2.default.createElement(
				'div',
				{ id: this.props.index, className: 'ChatWall' },
				_react2.default.createElement(
					'h1',
					null,
					'Contact ',
					this.props.index + 1
				),
				_react2.default.createElement(
					'div',
					{ className: 'msgLines' },
					_react2.default.createElement('div', { className: 'inner-block' }),
					_react2.default.createElement(
						'div',
						{ className: 'text' },
						msgLines
					)
				)
			);
		}
	}]);

	return ChatWall;
}(_react2.default.Component);

;

exports.default = ChatWall;