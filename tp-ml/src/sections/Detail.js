import React, { Component } from 'react';
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
  _setTextSeacher =(text)=>{
    this.setState({redirectToReferrer:true,textSeacher:text});
  }

  _renderDetailsItem = () =>{
    const { redirectToReferrer,textSeacher } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/"+ textSeacher } };
     if (redirectToReferrer) {
       debugger;
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
        <Banner onClickSeacher={this._setTextSeacher}/>
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
