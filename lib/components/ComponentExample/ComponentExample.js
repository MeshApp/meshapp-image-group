'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
// This is an example
// You can duplicate it and develop over it
// In the root folder of every root component you must
// create a package.json file with the following information:
// {
//  "private": true,
//  "name": "ComponentExample",
//  "main": "./ComponentExample.js"
// }
//


var ComponentExample = function (_React$Component) {
  _inherits(ComponentExample, _React$Component);

  function ComponentExample() {
    _classCallCheck(this, ComponentExample);

    return _possibleConstructorReturn(this, (ComponentExample.__proto__ || Object.getPrototypeOf(ComponentExample)).apply(this, arguments));
  }

  _createClass(ComponentExample, [{
    key: 'render',

    //
    // Default props that every component receives
    // props.id - unique id
    // props.items - contains the content of the formula
    // Template related
    // props.row - fixed height size for the component
    // props.wrap - container or container-fluid wrapper (bootstrap based)
    // props.flow - if its display: fixed, null default behavior
    // props.columns - component width (bootstrap columns based)
    // Colors avaiable to be used and customizable
    // props.bgColor
    // props.bgColorAlt
    // props.firstColor
    // props.secondColor
    // ---
    // NOTE: Any props avaiable here except the id can happen to be send null
    // the component must handle this situations itself
    // if the props items doesnt have any content the component must
    // display some default information warning the user about missing info
    //
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'component-example' },
        _react2.default.createElement('img', { src: 'https://cdn.meshapp.tech/meshapp/meshapp.svg', alt: 'meshapp logo' }),
        _react2.default.createElement(
          'p',
          null,
          'MeshApp Component ExampleLALALA'
        )
      );
    }
  }]);

  return ComponentExample;
}(_react2.default.Component);

exports.default = ComponentExample;