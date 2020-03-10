import React from 'react';
import '../styles/home.css'
import { NavLink, Link, Switch } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa';
import '../styles/header.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Header = (props) => {


  function handleFadeOut(e) {
    e.target.style.color = 'black';
  }

  function removeChange(e) {
    e.target.style.color = 'gray';
  }

  return(
    <div>
    <div className='navbar-wrapper'>
    <FaRegHandshake className='left-hand-icon'/>

    <Switch>
      <NavLink  className='navbar-about-text' onClick={props.onFadeOut} onMouseOut={removeChange} style={{ textDecoration: 'none', fontSize: '1.3rem', marginBottom: '90px', marginRight: '5rem',fontWeight: 'bold' }} to="/">Home</NavLink>
    </Switch>

    <NavLink  className='navbar-about-text' onMouseOut={removeChange} className='navbar-about-text' style={{ textDecoration: 'none', fontSize: '1.3rem',marginBottom: '90px', marginRight: '3rem',fontWeight: 'bold' }}  to="/about">About</NavLink>

    <FaRegHandshake className='hand-icon'/>
    </div>

    </div>

  )

}

Header.propTypes = {
  onFadeOut: PropTypes.func

};

export default Header
