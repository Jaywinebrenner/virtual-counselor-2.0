import React from 'react';
import sky1 from '../media/sky1.jpg';
import '../styles/login.css';
import Header from './Header';

function Login(){

  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className="home-body">

    <Header />

    <style jsx>{`


      .please-choose-text{
        font-size: 1.3rem;
        color: white;
        text-shadow: 2px 2px 15px #feffb3;
      }



      .login-box{
        background-color: white;
        opacity: .3;
        height: 30vh;
        width: 50vh;
        text-align: center;
        line-height: 55px;
        border-radius: 5px;
        display: inline-block;
        margin: 0 auto;
      }


      `}</style>

    <div className='login-middle-div'>
      <h1 className='welcome'>Welcome to</h1>
      <h1 className='vc-header'>Virtual Counselor</h1>
      </div>

      <div className='login-please-choose-div'>
      <h4 className='login-please-choose-text'>Please login into Virtual Counselor and recieve professional counciling from one our trained counseling experts</h4>
      </div>

      <div className='login-box'>
        <form>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>

      </div>

      <div className='footer'>
      </div>


      </div>
    );
  }

  export default Login;
