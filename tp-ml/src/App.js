import React, { Component } from 'react';
import './css/style.scss';
import Banner from './sections/Banner';
import logo from './css/image/Logo_ML.png';
import imgSearch from './css/image/ic_Search.png';



class App extends Component {
  render() {
    return (
      <div className='fill'>
        <Banner logo={logo} imgBtn={imgSearch} />
      </div>
    );
  }
}

export default App;
