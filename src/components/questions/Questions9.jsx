import React from 'react';
import { NavLink } from 'react-router-dom';

// conintue being VC , VC is not for me

const Questions8 = () => {

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

          @media screen and (max-width: 950px) , screen and (max-height: 950px) {
          .react-player {
            position: absolute;
          top:9vh;
          left: 0;
          position: fixed;
          bottom: 0;
          margin-bottom: 0;
      }   
          }


@media screen and (max-width: 1050px) , screen and (max-height: 950px) {
    .react-player {
      position: absolute;
    top:12vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}
@media screen and (max-width: 1250px) , screen and (max-height: 950px) {
    .react-player {
      position: absolute;
    top:17vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 820px) {
    .react-player {
      position: absolute;
    top:28vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 490px) {
    .react-player {
      position: absolute;
    top:36vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

@media screen and (max-width: 415px) {
    .react-player {
      position: absolute;
    top:37vh;
    left: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
}
}

          `}</style>

        <div className='question-div'>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video14">1 - 3 days a week</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video15">2 - 3 days a week</NavLink>
          <br></br>
          <NavLink className='question-text' style={{ textDecoration: 'none', fontSize: '1.3rem', color: '#8A0303', marginBottom: '90px' }} to="/Video16">4 - 7 days a week</NavLink>


        </div>
      </div>
    );
  }

  export default Questions8;
