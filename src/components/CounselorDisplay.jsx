import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Reggie from '../media/reggie.png';
import Lindsey from '../media/lindsey.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/counselorDisplay.css';
import lindseyAhh from './../media/lindsey-ahh.mp3';
import reggieAhh from './../media/reggie-ahh.mp3';
import ReactHowler from 'react-howler';

const CounselorDisplay = (props) => {

  const [hoveredLindsey, setHoveredLindsey] = useState(false);
  const [hoveredReggie, setHoveredReggie] = useState(false);
  const [playingReggie, setPlayingReggie] = useState(false);
  const [playingLindsey, setPlayingLindsey] = useState(false);

const toggleHoverLindsey = () => {
  startLindsey()
  setHoveredLindsey(!hoveredLindsey);
}

const toggleHoverReggie = () => {
  startReggie()
  setHoveredReggie(!hoveredReggie);
}

const startReggie = () => {
setPlayingReggie(true)
}

const startLindsey = () => {
  setPlayingLindsey(true)
}

return (
  <div>
      <Container className='meet-your-counselor-div'>
        <Row>
          <Col xs='6'className='counselor-column-lindsey'>
            <Link to="/TVideo1">
              <img
                onMouseEnter={toggleHoverLindsey} onMouseLeave={toggleHoverLindsey}
                src={ Lindsey } onClick={props.onMusicOff} alt="Counselor named Lindsey" className={hoveredLindsey ? 'lindsey-glow-onhover' : 'lindsey-image'}/>
            </Link>
            <p className='credentials-lindsey'>Dr. Lindsey Stanfield</p>
            <p className='credentials-lindsey'>Psy.D.</p>
          </Col>
          <Col className='counselor-column-reggie' xs='6'>
            <Link to="/Video1">
              <img src={ Reggie } onClick={props.onMusicOff} className={hoveredReggie ? 'reggie-glow-onhover' : 'reggie-image'}
              onMouseEnter={toggleHoverReggie} onMouseLeave={toggleHoverReggie}
              alt='Counselor named Reggie'/>
            </Link>
            <p className='credentials-reggie'>Dr. Reggie Gunderson</p>
            <p className='credentials-reggie'>LPC, MSEd</p>
          </Col>
        </Row>
      </Container>
        <div className='please-choose-div'>
          <h4 className='please-choose-text'>Please choose from one of our professionally trained counseling experts</h4>
        </div>

        <ReactHowler
          src={lindseyAhh}
          playing={playingLindsey}
          volume={.4}
          />
        <ReactHowler
          src={reggieAhh}
          playing={playingReggie}
          volume={.4}
          />
    </div>
  )
}

CounselorDisplay.propTypes = {
  onMusicOff: PropTypes.func
};

export default CounselorDisplay
