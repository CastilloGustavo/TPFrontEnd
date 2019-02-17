import React, { Component } from 'react';
import Beadcrumb from './Beadcrumb';
class ResultSeacherItem extends Component {
  constructor(){
    super();
    this.state ={
      id:0,
      title:"Soy la Descripcion del Producto",
      price:"15266.9",
      picture :{},
      condition : {},
      city:"Capital",
      free_shipping:""
    }
  }
  render(){
    const {
          logo
        } = this.props;
    return(
      <div className="row">
        <div className="col-sm-2">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-sm-8">
            <h1>{this.state.price}</h1>
            <p>{this.state.title}</p>
        </div>
        <div className="col-sm-2">
          <p>{this.state.city}</p>
        </div>
      </div>
    )
  }
}
class ResultSeacher  extends Component {
  render(){
    const {
          logo
        } = this.props;
    return(
      <div className='row'>
        <div className='col-sm-1'>
        </div>
        <div className='col-sm-10'>
          <Beadcrumb />
          <ResultSeacherItem logo={logo} />
        </div>
        <div className='col-sm-1'>
        </div>
      </div>
    )
  }
}

export default ResultSeacher
