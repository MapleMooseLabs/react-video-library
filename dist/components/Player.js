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

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player(props) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, props));

    _this.state = {
      videojsPlayer: null,
      isActive: false
    };
    return _this;
  }

  _createClass(Player, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.isActive !== nextProps.isActive;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.initializePlayer();
    }
  }, {
    key: 'initializePlayer',
    value: function initializePlayer() {
      var videojsPlayer = this.state.videojsPlayer;
      var activeVideo = this.props.activeVideo;
      var videoProps = activeVideo ? activeVideo.props : {};

      if (videojsPlayer) {
        videojsPlayer.src(videoProps.videoSrc);
        videojsPlayer.poster(videoProps.poster);
      } else if (activeVideo && videoProps.videoSrc.length > 0) {
        this.setState({
          videojsPlayer: videojs('react-video-player', {
            poster: videoProps.poster,
            controls: true,
            preload: 'auto'
          })
        });
      }
    }
  }, {
    key: 'renderVideo',
    value: function renderVideo() {
      var activeVideo = this.props.activeVideo;
      var videoProps = activeVideo ? activeVideo.props : {};

      return _react2.default.createElement(
        'video',
        {
          id: 'react-video-player',
          className: 'video-js vjs-default-skin player__video' },
        _react2.default.createElement('source', { src: activeVideo ? videoProps.videoSrc : '', type: 'video/mp4' }),
        _react2.default.createElement(
          'p',
          { className: 'vjs-no-js' },
          'To view this video please enable JavaScript, and consider upgrading to a web browser that ',
          _react2.default.createElement(
            'a',
            { href: 'http://videojs.com/html5-video-support/', target: '_blank' },
            'supports HTML5 video'
          )
        )
      );

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var isActive = _props.isActive;
      var onClose = _props.onClose;
      var title = _props.title;


      return _react2.default.createElement(
        'div',
        { id: 'modal', className: (0, _classnames2.default)('player', { 'player--active': isActive }) },
        _react2.default.createElement('span', { className: 'player__bg', onClick: onClose }),
        _react2.default.createElement(
          'div',
          { className: 'player__dialog' },
          _react2.default.createElement(
            'div',
            { className: 'player__content ' + (isActive ? 'player__content--active' : '') },
            _react2.default.createElement(
              'header',
              { className: 'player__header' },
              _react2.default.createElement(
                'div',
                { className: 'player__title' },
                _react2.default.createElement(
                  'h2',
                  { className: 'player__title-text' },
                  title
                )
              ),
              _react2.default.createElement('span', {
                className: 'player__close',
                onClick: onClose })
            ),
            _react2.default.createElement(
              'div',
              { className: 'player__video' },
              this.renderVideo()
            )
          )
        )
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;


Player.defaultProps = {
  title: 'Video Title',
  activeVideo: null
};