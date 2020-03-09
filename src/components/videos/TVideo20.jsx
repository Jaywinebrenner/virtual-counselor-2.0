import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import TFour_Three from '../../media/tanyaclips/T4.3.mp4';
import chime3 from '../../media/chime3.mp3';
import roomtone from '../../media/roomtone4.mp3';
import ReactHowler from 'react-howler';
import VideoHeader from '../VideoHeader';

const TVideo20 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='./TQuestions13' />
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
          url={TFour_Three}
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

  export default TVideo20;
