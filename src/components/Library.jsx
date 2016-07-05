import React from 'react';
import Player from './Player';

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideoIndex: null,
      activeVideoTitle: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.activeVideoIndex !== nextState.activeVideoIndex;
  }

  playVideo(index) {
    const video = this.refs['video-' + index];
    this.setState({ activeVideoIndex: index, activeVideoTitle: video.props.title });
  }

  closePlayer() {
    this.setState({ activeVideoIndex: null });
  }

  renderChildren() {

    const children = this.props.children;
    return React.Children.map(children, (child, index) => {
      // if (child.type.displayName === 'Video') {

        return React.cloneElement(child, {
          onClick: this.playVideo.bind(this, index),
          isActive: (index === this.state.activeVideoIndex),
          index: index,
          ref: 'video-' + index
        });
      // }

      // return child;
    });
  }

  render() {
    const { activeVideoIndex, activeVideoTitle } = this.state;
    const activeVideo = this.refs['video-' + activeVideoIndex];

    let playerProps = {
      isActive: activeVideoIndex !== null,
      onClose: this.closePlayer.bind(this)

    };

    if (activeVideoTitle !== null) {
      playerProps.title = activeVideoTitle;
    }

    if (activeVideo) {
      playerProps.activeVideo = activeVideo;
    }

    return (
      <div>
        <div className={ 'library ' + this.props.className } >
          { this.renderChildren() }
          {/*{ this.props.children }*/}
        </div>
        <Player { ...playerProps } />
      </div>
    );
  }
}
