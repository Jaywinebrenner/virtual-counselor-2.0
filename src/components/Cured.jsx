import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sky1 from '../media/sky1.jpg';
import choir from '../media/choir.mp3';
import ReactHowler from 'react-howler';
import Linkify from 'react-linkify';
import '../styles/cured.css';

function Cured(props) {

  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className="cured-body">


      <style jsx>{`


          `}</style>


        <div className='cured-div' onClick={props.onMusicToggle}>
          <h1 className='you-are'>You are</h1>
      <NavLink style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} className='cured'  to="/">CURED</NavLink>
        </div>

        <ReactHowler
          src={choir}
          playing={true}
          loop={true}
          volume={.2}
          />


      </div>
    );
  }

  export default Cured;
