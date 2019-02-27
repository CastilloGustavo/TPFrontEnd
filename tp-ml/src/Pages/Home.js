import React, { Component } from 'react';
import Banner from '../sections/Banner';
import ResultSeacher from '../sections/ResultSeacher';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      seacher : "",
    }
  }
  componentDidMount(){
    const {textSeacher = ""} = this.props.match.params;
    this.setState({seacher:textSeacher});
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
        <Banner onClickSeacher={this._setTextSeacher}/>
        <div>
          {this._viewItemsSeacher()}
        </div>
      </div>
    )
  }
}
export default Home
