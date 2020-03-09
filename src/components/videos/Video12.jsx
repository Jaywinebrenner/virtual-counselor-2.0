import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import JR_Fantastic from '../../media/joeclips/R.fantastic1.mp4';
import chime3 from '../../media/chime3.mp3';
import ReactHowler from 'react-howler';
import roomtone from '../../media/roomtone4.mp3';
import VideoHeader from '../VideoHeader';

// Your lack of self control..

const Video11 = () => {

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

          .lesson-wrapper{
            background-color: black;
            text-align: center;
            height: 250vh;
          }

          `}</style>

        <ResponsivePlayer
          url={JR_Fantastic}
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

  export default Video11;
