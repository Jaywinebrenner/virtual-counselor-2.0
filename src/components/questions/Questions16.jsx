import React from 'react';
import { NavLink } from 'react-router-dom';

// From Noooo video 22


const Questions16 = () => {

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

          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video17">Okay</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video4">I'm finsihed with this</NavLink>

        </div>
      </div>
    );
  }

  export default Questions16;
