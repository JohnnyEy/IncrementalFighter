import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import ModalLogin from './components/pages/modalLogin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
  }
  render() {
    return (
        <div className="App">
          <h1 className="App-title">Incremental Fighter</h1>
          <GameContainer ref={(GameContainer) => { window.GameContainer = GameContainer }} />
          <ModalLogin ref={(ModalLogin) => { window.ModalLogin = ModalLogin }} />
        </div>
    );
  }
}

export default App;
