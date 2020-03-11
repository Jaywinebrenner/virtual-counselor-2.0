import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import sky1 from '../media/sky1.jpg';
import choir from '../media/choir.mp3';
import ReactHowler from 'react-howler';
import Linkify from 'react-linkify';
import '../styles/landing.css';
import PropTypes from 'prop-types';

function Landing(props) {

  const [hoveredEnter, setHoveredEnter] = useState(false);


const toggleHoverEnter = () => {
  setHoveredEnter(!hoveredEnter);
}


  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className="landing-body">

        <div className='cured-div'                   onMouseEnter={toggleHoverEnter}
          onMouseLeave={toggleHoverEnter}
          onClick={props.onMusicToggle}>
          <h1 className='you-are'>Please click here to</h1>
          <NavLink style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} className={hoveredEnter ? 'landing-glow' : 'landing'} onClick={props.onMusicOn} to="/home">ENTER</NavLink>
        </div>

      </div>
    );
  }

  Landing.propTypes = {
    onMusicOn: PropTypes.func
  };


  export default Landing;
