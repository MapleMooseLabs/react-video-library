import React from 'react';
import classNames from 'classnames';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videojsPlayer: null,
      isActive: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.isActive !== nextProps.isActive
    );
  }

  componentDidUpdate(prevProps) {
    this.initializePlayer();
  }

  initializePlayer() {
    const videojsPlayer = this.state.videojsPlayer;
    const activeVideo = this.props.activeVideo;
    const videoProps = activeVideo ? activeVideo.props : {};

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

  renderVideo() {
    const activeVideo = this.props.activeVideo;
    const videoProps = activeVideo ? activeVideo.props : {};

    return (
      <video
        id="react-video-player"
        className='video-js vjs-default-skin player__video'>
        <source src={ activeVideo ? videoProps.videoSrc : '' } type="video/mp4" />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser
          that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
      </video>
    )

    return null;
  }

  render() {
    const { isActive, onClose, title } = this.props;

    return (
      <div id="modal" className={ classNames('player', { 'player--active': isActive }) }>
        <span className='player__bg' onClick={ onClose } />
        <div className='player__dialog'>
          <div className={ 'player__content ' + (isActive ? 'player__content--active' : '') }>
            <header className='player__header'>
              <div className='player__title'>
                <h2 className='player__title-text'>{ title }</h2>
              </div>

              <span
                className='player__close'
                onClick={ onClose } />
            </header>


            <div className='player__video-container'>
              { this.renderVideo() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Player.defaultProps = {
  title: 'Video Title',
  activeVideo: null
};
