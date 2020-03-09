import React from 'react';
import sky1 from '../media/sky1.jpg';
import '../styles/home.css';
import Header from './Header';
import '../styles/about.css';

function Home(){

  return (
    <div style={{ backgroundImage:`url(${sky1})` }} className="about-body">
    <Header />

    <style jsx>{`

      `}</style>



      <div className='middle-div'>
      <h1 className='welcome'>About</h1>
      <h1 className='vc-header'>Virtual Counselor</h1>
      </div>



      <div className='about-please-choose-div'>
      <h4 className='please-choose-text'>Virtual Counselor purports to be a counseling app, but it is not. Dr. Reggie Gunderson and Dr. Lindsey Stanfield are not even real doctors. The person who made this app lied to you. Please forgive him. And speaking of please- please don't take any advice they dole out with any modicum of sincerity. It is bad advice. Virtual Counseler is an App that Jay Winebrenner made during his tenure studying software development at Epicodus in Portland, Oregon in an effort to incorporate his filmmaking past with his new found coding endeavors. He used React to make this. Email him if you want. About anything. </h4>

      <h4 className='email'> jaywinebrenner@gmail.com</h4>
      </div>

      </div>
    );
  }

  export default Home;
