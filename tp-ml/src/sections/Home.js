import React, { Component } from 'react';
import logo from '../css/image/Logo_ML.png';
import imgSearch from '../css/image/ic_Search.png';
import Banner from '../sections/Banner';
import ResultSeacher from './ResultSeacher';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      seacher : "",
    }
  }  
  _viewItemsSeacher = () =>{
    const {seacher} = this.state;
    if(seacher !== "")
    {
      return   <ResultSeacher param={seacher} />
    }
  }
  _setTextSeacher = (text) =>{
    this.setState({seacher:text});
  }

  render(){
    return(
      <div>
        <Banner logo={logo} imgBtn={imgSearch} onClickSeacher={this._setTextSeacher}/>
        <div>
          {this._viewItemsSeacher()}
        </div>
      </div>
    )
  }
}
export default Home
