import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import chime3 from '../../media/chime3.mp3';
import ReactHowler from 'react-howler';
import roomtone from '../../media/roomtone4.mp3';
import VideoHeader from '../VideoHeader';

// 11 - 20 studies show

const Video10 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='/questions8' />
  }

  const handleWatchComplete = ({played}) =>  {
    if(played >= 0.99 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div className='lesson-wrapper'>
      <VideoHeader />

      <style jsx>{`

@media screen and (max-width: 950px) , screen and (max-height: 950px) {
    .react-player {
      position: absolute;
    top:12vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}   
    }


@media screen and (max-width: 1050px) , screen and (max-height: 950px) {
    .react-player {
      position: absolute;
    top:12vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}
@media screen and (max-width: 1250px) , screen and (max-height: 950px) {
    .react-player {
      position: absolute;
    top:17vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 820px) {
    .react-player {
      position: absolute;
    top:28vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 490px) {
    .react-player {
      position: absolute;
    top:36vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 415px) {
    .react-player {
      position: absolute;
    top:37vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

          `}</style>

        <ResponsivePlayer
          url='https://virtual-counselor-video.s3-us-west-2.amazonaws.com/3.anxiety.4.mp4'
          onProgress={handleWatchComplete}
          />

          <ReactHowler
      src={chime3}
      playing={true}
      volume={.2}
    />
    <ReactHowler
src={roomtone}
playing={true}
volume={.5}
loop={true}
/>

      </div>
    );
  }

  export default Video10;
