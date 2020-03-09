import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import TFive_Four from '../../media/tanyaclips/T5.4.mp4';
import chime3 from '../../media/chime3.mp3';
import roomtone from '../../media/roomtone4.mp3';
import ReactHowler from 'react-howler';
import VideoHeader from '../VideoHeader';

const TVideo26 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='./TQuestions18' />
  }

  const handleWatchComplete = ({played}) =>  {
    if(played >= 0.92 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div className='lesson-wrapper'>
        <VideoHeader />

      <style jsx>{`

          .lesson-wrapper{
            background-color: black;
            text-align: center;
            height: 250vh;
          }

          `}</style>

        <ResponsivePlayer
          url={TFive_Four}
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
volume={.6}
/>

      </div>
    );
  }

  export default TVideo26;
