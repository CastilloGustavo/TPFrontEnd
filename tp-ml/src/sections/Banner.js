import React, { Component } from 'react';
import ResultSeacher from './ResultSeacher';

class Banner  extends Component {

  handlerClick = (e) =>{
    this.setState({seacher:this.inputSeacher.value});
  }
  _viewItemsSeacher = () =>{
    if(this.state.seacher !== "")
    {
      return   <ResultSeacher param={this.state.seacher} />
    }
  }

  constructor(props){
      super(props)
      this.state = {seacher : ""};
  }
  render() {

    const {
          logo,
          imgBtn
        } = this.props;

    return(
    <div className="container-fluid">
      <div className="row BannerHeader ">
        <div className="col-sm-1" >
        </div>
        <div>
        <div className="col-sm-2" >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>
        <div className="col-sm-8" >
          <div className="input-group">
              <input className="form-control" id='seacher' type="text" name='seacher'
               ref={inputElement => this.inputSeacher  = inputElement}
               placeholder='Sigue Buscando'
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.handlerClick} >
                  <img src={imgBtn} width="20" alt="Buscar"/>
                </button>
              </div>
          </div>
        </div>
        <div className="col-sm-1" >
        </div>
      </div>
      <div>
        {this._viewItemsSeacher()}
      </div>
    </div>
    )
  }
}
//{this.props.children}
export default Banner;
