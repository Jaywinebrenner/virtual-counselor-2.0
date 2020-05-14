import React from 'react';
import { NavLink } from 'react-router-dom';
import roomtone from '../../media/roomtone3.mp3';
import ReactHowler from 'react-howler';
import questions from '../../styles/questions.css'

//Continue being counseled / No

const Questions1 = () => {

return (
  <div className='entire-question-wrapper'>


      <div className='question-div'>
        <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video2">Continue being Virtually Counseled</NavLink>
        <br></br>
        <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303' }} to="/Video4">No. Virtual Counselor is not for me</NavLink>
      </div>

      <ReactHowler
  src={roomtone}
  playing={true}
  volume={.2}
  />
    </div>
  );
}

export default Questions1;
