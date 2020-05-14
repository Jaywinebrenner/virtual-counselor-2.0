import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/ResponsivePlayer.css';

const ResponsivePlayer = ({ url, onProgress }) => {

  return (
    <div className='player-wrapper'>

        <ReactPlayer
          className='react-player'
          id='react-player-for-badly-filmed-video'
          url={url}
          width='100%'
          height='100%'
          volume= '1'
          playing='true'
          onProgress={onProgress}
          />
      </div>
    )
  }


  export default ResponsivePlayer
