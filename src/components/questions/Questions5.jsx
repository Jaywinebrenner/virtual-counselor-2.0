import React from 'react';
import { NavLink } from 'react-router-dom';


// Yes / no in response to Trepedatious / shall we continue

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
            margin: auto;
            width: 60%;
            padding: 10px;
            height: 200px;
          }

          .question-text{
            line-height: 3.5rem;
          }

          `}</style>

        <div className='question-div'>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video3">Okay</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303' }} to="/Video4">I'm sorry, Virtual Counselor isn't for me</NavLink>
        </div>
      </div>
    );
  }

  export default Questions5;
