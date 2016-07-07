'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Video).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'renderPoster',
    value: function renderPoster() {
      var _props = this.props;
      var poster = _props.poster;
      var title = _props.title;


      if (poster.length && poster.length > 0) {
        return _react2.default.createElement('img', { src: poster, alt: title, className: 'video__poster' });
      }

      return null;
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var description = this.props.description;


      if (description.length > 0) {
        return _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: description } });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var onClick = _props2.onClick;
      var isActive = _props2.isActive;
      var index = _props2.index;
      var poster = _props2.poster;
      var title = _props2.title;
      var videoSrc = _props2.videoSrc;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('video', { 'video--active': isActive }),
          onClick: onClick },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('video__inner', { 'video__inner--has-poster': poster.length > 0 }) },
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          this.renderDescription(),
          _react2.default.createElement(
            'span',
            { className: 'video__index' },
            (index + 1 < 10 ? '0' : '') + (index + 1)
          )
        ),
        this.renderPoster()
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

Video.displayName = 'Video';
exports.default = Video;


Video.defaultProps = {
  title: 'Video Title',
  description: 'Video description',
  videoSrc: '',
  poster: ''
};