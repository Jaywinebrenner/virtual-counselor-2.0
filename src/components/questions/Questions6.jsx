import React from 'react';
import { NavLink } from 'react-router-dom';


// 1-3 / 3 - 6 ... in response do do you drink alcohol?

const Questions5 = () => {

  return (
    <div className='entire-question-wrapper'>
      <style jsx>{`

          .entire-question-wrapper{
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .question-div {
            text-align: center;
            margin: 0 auto 400px;
            width: 60%;
            padding: 10px;
            height: 50px;
          }

          .question-text{
            line-height: 3.5rem;
          }

          `}</style>

        <div className='question-div'>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303' }} to="/Video12">I don't drink alcohol</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video7">1 - 3 drinks a week</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video8">4 - 6 drinks a week</NavLink>
            <br></br>
            <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video9">7 - 10 drinks a week</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video10">11 - 20 drinks a week</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video11">20 + drinks a week</NavLink>

        </div>
      </div>
    );
  }

  export default Questions5;
