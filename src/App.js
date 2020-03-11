import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Import from './components/Import'
import Home from './components/Home';
import Cured from './components/Cured';
import About from './components/About';
import Login from './components/Login';
import Video1 from './components/videos/Video1';
import TVideo1 from './components/videos/TVideo1';
import Landing from './components/Landing';
import ReactHowler from 'react-howler';
import choir from './media/choir.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.handleMusicOn = this.handleMusicOn.bind(this);
    this.handleMusicOff = this.handleMusicOff.bind(this);
  }

  handleMusicOn() {
    this.state.playing = true;
    console.log(this.state.playing)
  }

  handleMusicOff() {
    this.state.playing = false;
    console.log(this.state.playing)
  }

  render(){
    return (
      <div>


          <Route
            exact path='/'
            render={(props) => <Landing {...props} onMusicOn={this.handleMusicOn}
            />}
            />
          <Route
            path='/home'
            render={(props) => <Home {...props} onMusicOn={this.handleMusicOn}
            onMusicOff={this.handleMusicOff}
            />}
            />


            <Route
              exact path='/cured'
              render={(props) => <Cured {...props} onMusicOn={this.handleMusicOn}
              />}
              />


            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/video1" component={ Video1 } />
            <Route path="/tvideo1" component={ TVideo1 } />
            <Import/>

          <ReactHowler
            src={choir}
            playing={this.state.playing}
            loop={true}
            volume={.2}
            />



      </div>
    );
  }
}

export default App;
