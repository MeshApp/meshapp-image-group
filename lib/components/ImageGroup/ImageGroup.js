'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images4 = ['https://images7.alphacoders.com/411/thumb-1920-411820.jpg', 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/490466/pexels-photo-490466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];

var data = void 0;

var ImageGroup = function (_Component) {
  _inherits(ImageGroup, _Component);

  function ImageGroup(props) {
    _classCallCheck(this, ImageGroup);

    var _this = _possibleConstructorReturn(this, (ImageGroup.__proto__ || Object.getPrototypeOf(ImageGroup)).call(this, props));

    _this.state = {
      data: props.data,
      width: props.width,
      height: props.height,
      borderRad: props.borderRad,
      activeImage: 'asd',
      activeImageIndex: 0
    };

    _this.imageClicked = _this.imageClicked.bind(_this);

    return _this;
  }

  _createClass(ImageGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (nextProps.data !== data) {
        data = nextProps.data;
      }
    }
  }, {
    key: 'imageClicked',
    value: function imageClicked(url, index) {
      if (this.props.imageClicked !== undefined) {
        this.props.imageClicked(url, index, this.state.data);
      }
    }
  }, {
    key: 'renderOne',
    value: function renderOne() {
      var _this2 = this;

      var str1 = this.state.data[0];

      var style = {
        width: '100%', height: '100%',
        backgroundImage: 'url(' + str1 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      return _react2.default.createElement('div', { style: style, onClick: function onClick() {
          return _this2.imageClicked(str1, 0);
        } });
    }
  }, {
    key: 'renderTwo',
    value: function renderTwo() {
      var _this3 = this;

      var str1 = this.state.data[0];
      var str2 = this.state.data[1];

      var style1 = {
        width: '50%', height: '100%',
        backgroundImage: 'url(' + str1 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style2 = {
        width: '50%', height: '100%',
        backgroundImage: 'url(' + str2 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'row' } },
        _react2.default.createElement('div', { style: style1, onClick: function onClick() {
            return _this3.imageClicked(str1, 0);
          } }),
        _react2.default.createElement('div', { style: style2, onClick: function onClick() {
            return _this3.imageClicked(str2, 1);
          } })
      );
    }
  }, {
    key: 'renderThree',
    value: function renderThree() {
      var _this4 = this;

      var str1 = this.state.data[0];
      var str2 = this.state.data[1];
      var str3 = this.state.data[2];

      var style1 = {
        width: '50%', height: '100%',
        backgroundImage: 'url(' + str1 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style2 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str2 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style3 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str3 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'row' } },
        _react2.default.createElement('div', { style: style1, onClick: function onClick() {
            return _this4.imageClicked(str1, 0);
          } }),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', width: '50%', height: '100%' } },
          _react2.default.createElement('div', { style: style2, onClick: function onClick() {
              return _this4.imageClicked(str2, 1);
            } }),
          _react2.default.createElement('div', { style: style3, onClick: function onClick() {
              return _this4.imageClicked(str3, 2);
            } })
        )
      );
    }
  }, {
    key: 'renderFour',
    value: function renderFour() {
      var _this5 = this;

      var str1 = this.state.data[0];
      var str2 = this.state.data[1];
      var str3 = this.state.data[2];
      var str4 = this.state.data[3];

      var style1 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str1 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style2 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str2 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style3 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str3 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      var style4 = {
        width: '100%', height: '50%',
        backgroundImage: 'url(' + str4 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
      };

      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'row' } },
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', width: '50%', height: '100%' } },
          _react2.default.createElement('div', { style: style1, onClick: function onClick() {
              return _this5.imageClicked(str1, 0);
            } }),
          _react2.default.createElement('div', { style: style2, onClick: function onClick() {
              return _this5.imageClicked(str2, 1);
            } })
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', width: '50%', height: '100%' } },
          _react2.default.createElement('div', { style: style3, onClick: function onClick() {
              return _this5.imageClicked(str3, 2);
            } }),
          _react2.default.createElement('div', { style: style4, onClick: function onClick() {
              return _this5.imageClicked(str4, 3);
            } })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var length = this.state.data.length;

      if (!length || length <= 0 || length > 4) {
        return '';
      }

      var mainStyle = {
        width: this.state.width, height: this.state.height,
        borderRadius: this.state.borderRad,
        overflow: 'hidden'
      };

      return _react2.default.createElement(
        'div',
        { className: 'App', style: mainStyle },
        length === 1 ? this.renderOne() : length === 2 ? this.renderTwo() : length === 3 ? this.renderThree() : length === 4 ? this.renderFour() : ''
      );
    }
  }]);

  return ImageGroup;
}(_react.Component);

ImageGroup.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  borderRad: _propTypes2.default.string,
  data: _propTypes2.default.array,
  imageClicked: _propTypes2.default.func
};

ImageGroup.defaultProps = {
  width: '200px',
  height: '200px',
  borderRad: '0px',
  data: images4,
  imageClicked: undefined
};

exports.default = ImageGroup;