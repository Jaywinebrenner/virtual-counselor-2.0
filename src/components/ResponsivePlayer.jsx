import React from 'react';
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({ url, onProgress }) => {

  return (
    <div className='player-wrapper'>
      <style jsx>{`
          .player-wrapper {
            position: relative;
            padding-top: 56%;
            margin-bottom: 0;
          }

          .react-player {
            position: absolute;
            top: 30vh;
            left: 0;
            position: fixed;
            bottom: 0;
            margin-bottom: 0;
          }

          `}</style>


        <ReactPlayer
          className='react-player'
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
