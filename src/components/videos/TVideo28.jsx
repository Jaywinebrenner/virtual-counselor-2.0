import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import TFive_Six from '../../media/tanyaclips/T5.6.mp4';
import chime3 from '../../media/chime3.mp3';
import roomtone from '../../media/roomtone4.mp3';
import ReactHowler from 'react-howler';
import VideoHeader from '../VideoHeader';

const TVideo28 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='./TQuestions22' />
  }

  const handleWatchComplete = ({played}) =>  {
    if(played >= 0.98 && !watchComplete) {
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
          url={TFive_Six}
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

  export default TVideo28;
