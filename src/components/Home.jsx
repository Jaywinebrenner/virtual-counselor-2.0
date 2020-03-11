import React from 'react';
import { Link } from 'react-router-dom';
import sky1 from '../media/sky1.jpg';

import '../styles/home.css';
import Header from './Header';
import PropTypes from 'prop-types';
import CounselorDisplay from './CounselorDisplay';


function Home(props){

  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className={props.fadeOut ?'fadeOut':'home-body'}>
    <style jsx>{`

      `}</style>
    <Header/>
      <div className='middle-div'>
        <h1 className='welcome'>Welcome to</h1>
        <h1 className='vc-header'>Virtual Counselor</h1>
        <p className='tagline'>A place to receive counseling. Virtually.</p>
      </div>
      <CounselorDisplay onMusicToggle = {props.onMusicToggle}/>

      <div className='footer'>
      </div>


      </div>
    );
  }

  Home.propTypes = {
  onMusicToggle: PropTypes.func,
};

  export default Home;
