"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact(props) {
		_classCallCheck(this, Contact);

		var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Contact, [{
		key: "handleClick",
		value: function handleClick() {
			this.props.onClick(this.props.indexNumber);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "contact", onClick: this.handleClick },
				_react2.default.createElement(
					"p",
					{ className: "name" },
					"Contact ",
					this.props.indexNumber + 1
				),
				_react2.default.createElement("img", { className: "photo", src: "images/avatar.png" })
			);
		}
	}]);

	return Contact;
}(_react2.default.Component);

;

exports.default = Contact;