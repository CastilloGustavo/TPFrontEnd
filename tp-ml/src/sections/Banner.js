import React, { Component } from 'react';
class Banner  extends Component {

  handlerClick = (e) =>{
      console.log(this.state);
  }
  constructor(){
      super()
      this.state = {seacher : ""};
  }
  render() {

    const {
          logo
        } = this.props;

    return(
    <div className="container-fluid BannerHeader">
      <div className="row">
        <div className="col-sm-1" >
        </div>
        <div>
        <div className="col-sm-2" >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>
        <div className="col-sm-8" >
            <div className="inputContainer input-group mb-3">
              <input className="form-control" id='seacher' type="text" name='seacher'
               value={this.state.seacher}
               placeholder='Sigue Buscando' onChange = {e=> this.setState({seacher : e.target.value})}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.handlerClick} >Buscar</button>
              </div>
          </div>
        </div>
        <div className="col-sm-1" >
        </div>
      </div>
    </div>
    )
  }
}

export default Banner;
