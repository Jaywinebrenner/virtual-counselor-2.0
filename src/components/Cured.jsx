import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sky1 from '../media/sky1.jpg';
import cured from '../media/cured.mp3';
import ReactHowler from 'react-howler';
import Linkify from 'react-linkify';
import '../styles/cured.css';
import PropTypes from 'prop-types';

function Cured(props) {

  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className="cured-body">

        <div className='cured-div' onClick={props.onMusicOn}>
          <h1 className='you-are'>You are</h1>
      <NavLink style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} className='cured'  to="/home">CURED</NavLink>
        </div>

        <ReactHowler
          src={cured}
          playing={true}
          loop={false}
          volume={1}
          />

      </div>
    );
  }

  Cured.propTypes = {
    onMusicOn: PropTypes.func
  };


  export default Cured;
