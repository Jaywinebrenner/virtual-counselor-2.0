import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import chime3 from '../../media/chime3.mp3';
import ReactHowler from 'react-howler';
import roomtone from '../../media/roomtone4.mp3';
import VideoHeader from '../VideoHeader';
import '../../styles/video.css';

const Video1 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='./Questions1' />
  }

  const handleWatchComplete = ({played}) =>  {
    if(played >= 0.99 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div className='lesson-wrapper'>
        <ResponsivePlayer
          url='https://virtual-counselor-video.s3-us-west-2.amazonaws.com/1.intro.1.mp4'
          onProgress={handleWatchComplete}
          />
      <VideoHeader />


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

  export default Video1;
