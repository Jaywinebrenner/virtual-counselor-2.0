import React from 'react';
import '../styles/home.css'
import { NavLink, Link, Switch } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa';
import '../styles/header.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const Header = () => {

  function change(e) {
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
      <NavLink  onMouseOver={change} onMouseOut={removeChange} style={{ textDecoration: 'none', fontSize: '1.7rem', color: 'gray', marginBottom: '90px', marginRight: '5rem',fontWeight: 'bold' }} to="/">Home</NavLink>
    </Switch>

      <NavLink onMouseOver={change} onMouseOut={removeChange} className='navbar-text' style={{ textDecoration: 'none', fontSize: '1.7rem', color: 'gray', marginBottom: '90px', marginRight: '5rem',fontWeight: 'bold' }}  to="/about">About</NavLink>

      <FaRegHandshake className='hand-icon'/>
      </div>

    </div>

  )

}

export default Header
