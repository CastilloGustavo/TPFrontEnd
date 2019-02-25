import React, { Component } from 'react';
import logo from '../css/image/Logo_ML.png';
import imgSearch from '../css/image/ic_Search.png';
import Banner from '../sections/Banner';
import Beadcrumb from './Beadcrumb';
import ResultSeacherItemDetalle from '../sections/ResultSeacherItemDetalle';
import {Redirect} from "react-router-dom";

class Detail extends Component {
  constructor(){
    super()
    this.state = {idDetails:""};
  }
  componentDidMount(){
    const {id = ""} = this.props.match.params;
    this.setState({
      idDetails:id,
      redirectToReferrer : false});
  }
  _setTextSeacher =()=>{
    this.setState({redirectToReferrer:true});
  }

  _renderDetailsItem = () =>{
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

     if (redirectToReferrer) {
       return <Redirect to={from} />;
     }

  return(
    <div>
      <div className='row RowBody'>
        <div className='col-sm-1'>
        </div>
        <div className='col-sm-10'>
          <Beadcrumb />
          <ResultSeacherItemDetalle id={this.state.idDetails} />
        </div>
        <div className='col-sm-1'>
        </div>
      </div>
      <div className='row RowFooter'>
      </div>
    </div>
    )
  }

  render(){
    return(
      <div>
        <Banner logo={logo} imgBtn={imgSearch} onClickSeacher={this._setTextSeacher}/>
        <div>
          {this.state.idDetails !== ""
           ? this._renderDetailsItem()
           : <h1>Identificador no reconocido</h1>
          }
        </div>
      </div>
    )
  }
}
export default Detail
