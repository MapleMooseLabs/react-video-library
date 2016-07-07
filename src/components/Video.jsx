import React from 'react';
import classNames from 'classnames';

export default class Video extends React.Component {
  static displayName = 'Video';

  renderPoster() {
    const { poster, title } = this.props;

    if (poster.length && poster.length > 0) {
      return (
         <img src={ poster } alt={ title } className='video__poster' />
      );
    }

    return null;
  }

  renderDescription() {
    const { description } = this.props;

    if (description.length > 0) {
      return (
        <p dangerouslySetInnerHTML={{ __html: description }} />
      );
    }

    return null;
  }

  render() {
    const { onClick, isActive, index, poster, title, videoSrc } = this.props;
    return (
      <div
        className={ classNames('video', { 'video--active': isActive }) }
        onClick={ onClick }>
        <div className={ classNames('video__inner', { 'video__inner--has-poster':  poster.length > 0}) }>
          <h3>{ title  }</h3>
          { this.renderDescription() }
          <span className='video__index'>{ (index + 1 < 10 ? '0' : '') + (index + 1) }</span>
        </div>
        { this.renderPoster() }
      </div>
    );
  }
}

Video.defaultProps = {
  title: 'Video Title',
  description: 'Video description',
  videoSrc: '',
  poster: ''
}
