import React, { Component } from 'react';
import './css/style.scss';
import Banner from './sections/Banner';
import logo from './css/image/Logo_ML.png';

class App extends Component {
  render() {
    return (
      <Banner logo={logo}/>
    );
  }
}

export default App;
