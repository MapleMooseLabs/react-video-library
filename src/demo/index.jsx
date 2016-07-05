import React from 'react';
import ReactDOM from 'react-dom';
import { Library, Video } from '../';
import classNames from 'classnames/bind';

import s from './scss/app.scss';
const cx = classNames.bind(s);

class App extends React.Component {
  render() {
    return (
      <div>
      <Library className={ cx('video-library') }>
        <Video
          title="Elephants Dream"
          description=""
          videoSrc="http://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
          poster="http://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png" />
        <Video
          title="Oceans"
          description=""
          videoSrc="http://vjs.zencdn.net/v/oceans.mp4"
          poster="http://vjs.zencdn.net/v/oceans.png" />
      </Library>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
