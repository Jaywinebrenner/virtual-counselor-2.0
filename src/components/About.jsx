import React from 'react';
import sky1 from '../media/sky1.jpg';
import '../styles/home.css';
import Header from './Header';
import '../styles/about.css';

function Home(){

  return (
    <div className="about-body">
    <Header />

        <div className='about-middle-div'>
          <h1 className='about-text'>About</h1>
          <h1 className='vc-header'>Virtual Counselor</h1>
        </div>
        <div className='about-please-choose-div'>
          <h4 className='about-please-choose-text'>Virtual Counseler is an App that Jay Winebrenner made during his tenure studying software development at Epicodus in Portland, Oregon in an effort to incorporate his filmmaking past with his new found coding endeavors. He used React to make this. Email him if you want. About anything. Also, Virtual Counselor purports to be a counseling app, but it is not. Dr. Reggie Gunderson and Dr. Lindsey Stanfield are not even real doctors. Please don't take any advice they dole out with any modicum of sincerity. It is bad advice. Feel free to email Jay about anything. Anything at all. </h4>
          <h4 className='email'> jaywinebrenner@gmail.com</h4>
        </div>

      </div>
    );
  }

  export default Home;
