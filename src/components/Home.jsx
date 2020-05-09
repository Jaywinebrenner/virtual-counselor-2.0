import React from 'react';
import { Link } from 'react-router-dom';
import sky1 from '../media/sky1.jpg';

import '../styles/home.css';
import Header from './Header';
import PropTypes from 'prop-types';
import CounselorDisplay from './CounselorDisplay';


function Home(props){
  {console.log("PROPS", props)}

  return (
    <div id="homeContainer">
      
    <style jsx>{`

      `}</style>
    <Header onFadeOut = {props.onFadeOut}/>
      <div className='middle-div'>
        <h1 className='welcome'>Welcome to</h1>
        <h1 className='vc-header'>Virtual Counselor</h1>
        <p className='tagline'>A place to receive counseling. Virtually.</p>
      </div>
      <CounselorDisplay onMusicOff = {props.onMusicOff}/>

      <div className='footer'>
      </div>


      </div>
    );
  }

  Home.propTypes = {
  onMusicOff: PropTypes.func,
  onMusicOn: PropTypes.func,
};

  export default Home;
