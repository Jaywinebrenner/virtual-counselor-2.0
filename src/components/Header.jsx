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

  return(

      <div className='navbar-wrapper'>

        <div className='col-1'>
           <FaRegHandshake className='left-hand-icon'/>
        </div>


        <div className='col-2'>
        <Switch>
          <NavLink  className='navbar-about-text' style={{ textDecoration: 'none', fontSize: '1.3rem', marginBottom: '90px', marginRight: '5rem',fontWeight: 'bold' }} to="/home">Home</NavLink>
          {/* <h3>HOME</h3> */}
        </Switch>
        </div>
          <div className='col-3'>
        <NavLink  className='navbar-about-text' className='navbar-about-text' style={{ textDecoration: 'none', fontSize: '1.3rem',marginBottom: '90px', marginRight: '3rem',fontWeight: 'bold' }}  to="/about">About</NavLink>
        </div>
            <div className='col-4'>
        <FaRegHandshake className='hand-icon'/>
        </div>
      </div>
   
  )
}

export default Header
