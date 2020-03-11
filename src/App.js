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
import ReactHowler from 'react-howler';
import choir from './media/choir.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.handleMusicToggle = this.handleMusicToggle.bind(this);
  }

  handleMusicToggle() {
    this.state.playing = false;
  }

  render(){
    return (
      <div>
        <Route
          exact path='/'
          render={(props) => <Home {...props} onMusicToggle={this.handleMusicToggle}
          />}
          />
        <Route path="/cured" component={ Cured } />
        <Route path="/about" component={ About } />
        <Route path="/login" component={ Login } />
        <Route path="/video1" component={ Video1 } />
        <Route path="/tvideo1" component={ TVideo1 } />
        <Import/>
        <ReactHowler
          src={choir}
          playing={this.state.playing}
          loop='true'
          volume={.3}
          />

      </div>
    );
  }
}

export default App;
