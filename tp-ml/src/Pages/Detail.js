import React, { Component } from 'react';
import Banner from '../sections/Banner';
import Beadcrumb from '../sections/Beadcrumb';
import ResultSeacherItemDetalle from '../sections/ResultSeacherItemDetalle';
import QueryString from 'query-string';
import {Redirect} from "react-router-dom";

class Detail extends Component {
  constructor(){
    super()
    this.state = {idDetails:""};
  }
  componentDidMount(){
    const {id = ""} = this.props.match.params;
    const parameters = QueryString.parse(this.props.location.search);
    if(parameters !== undefined)
    {
      var url = "https://api.mercadolibre.com/sites/MLA/search?q=";
      fetch(url+ "'"+parameters.c+ "'")
          .then(res => res.json())
          .then(data => {
            this.setState({
              idDetails:id,
              filters : data.filters,
              redirectToReferrer : false});
          });

    }else{
      this.setState({
        idDetails:id,
        redirectToReferrer : false});
    }
  }
  _setTextSeacher =(text)=>{
    this.setState({redirectToReferrer:true,textSeacher:text});
  }

  _renderDetailsItem = () =>{
    const { redirectToReferrer,textSeacher } = this.state;
    var { from } = textSeacher !== "" ?
        { from: { pathname: "/items/"+textSeacher} }
        : { from: { pathname: "/"} }

     if (redirectToReferrer) {
       return <Redirect to={from} />;
     }
      return(
        <div>
          <div className='row RowBody'>
            <div className='col-sm-1'>
            </div>
            <div className='col-sm-10'>
              <Beadcrumb categories={this.state.filters} />
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
           : <h1>El producto Solicitado no existe</h1>
          }
        </div>
      </div>
    )
  }
}
export default Detail
