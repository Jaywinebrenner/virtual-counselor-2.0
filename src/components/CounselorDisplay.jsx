import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Reggie from '../media/reggie.png';
import Lindsey from '../media/lindsey.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CounselorDisplay = (props) => {
  function handleGlow(e) {
  e.preventDefault();
  console.log('The link was hovered.');
}

  return (
    <div>

<script jsx>{`

    `}</script>

    <Container className='meet-your-counselor-div'>
      <Row>
        <Col xs='6'className='counselor-column'>
        <Link to="/TVideo1">
        <img  onMouseOver={handleGlow} src={ Lindsey } onClick={props.onMusicToggle} alt="Counselor named Lindsey" className="lindsey-image"/>
        </Link>

        <p className='credentials-lindsey'>Dr. Lindsey Stanfield</p>
        <p className='credentials-lindsey'>Psy.D.</p>
        </Col>
      <Col className='counselor-column' xs='6'>
        <Link to="/Video1">
        <img src={ Reggie } onClick={props.onMusicToggle} className="reggie-image" alt='Counselor named Reggie'/>
        </Link>
        <p className='credentials-reggie'>Dr. Reggie Gunderson</p>
        <p className='credentials-reggie'>LPC, MSEd</p>
        </Col>
      </Row>
    </Container>
    <div className='please-choose-div'>
      <h4 className='please-choose-text'>Please choose from one of our professionally trained counseling experts</h4>
    </div>
</div>
  )
}

CounselorDisplay.propTypes = {
onMusicToggle: PropTypes.func
};

export default CounselorDisplay
