'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library(props) {
    _classCallCheck(this, Library);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Library).call(this, props));

    _this.state = {
      activeVideoIndex: null,
      activeVideoTitle: null
    };
    return _this;
  }

  _createClass(Library, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.activeVideoIndex !== nextState.activeVideoIndex;
    }
  }, {
    key: 'playVideo',
    value: function playVideo(index) {
      var video = this.refs['video-' + index];
      this.setState({ activeVideoIndex: index, activeVideoTitle: video.props.title });
    }
  }, {
    key: 'closePlayer',
    value: function closePlayer() {
      this.setState({ activeVideoIndex: null });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var children = this.props.children;
      return _react2.default.Children.map(children, function (child, index) {
        // if (child.type.displayName === 'Video') {

        return _react2.default.cloneElement(child, {
          onClick: _this2.playVideo.bind(_this2, index),
          isActive: index === _this2.state.activeVideoIndex,
          index: index,
          ref: 'video-' + index
        });
        // }

        // return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var activeVideoIndex = _state.activeVideoIndex;
      var activeVideoTitle = _state.activeVideoTitle;

      var activeVideo = this.refs['video-' + activeVideoIndex];

      var playerProps = {
        isActive: activeVideoIndex !== null,
        onClose: this.closePlayer.bind(this)

      };

      if (activeVideoTitle !== null) {
        playerProps.title = activeVideoTitle;
      }

      if (activeVideo) {
        playerProps.activeVideo = activeVideo;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'library ' + this.props.className },
          this.renderChildren()
        ),
        _react2.default.createElement(_Player2.default, playerProps)
      );
    }
  }]);

  return Library;
}(_react2.default.Component);

exports.default = Library;