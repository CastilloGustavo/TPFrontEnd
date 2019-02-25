import React, { Component } from 'react';
class Banner  extends Component {

  handlerClick = (e) =>{
    this.props.onClickSeacher(this.inputSeacher.value);
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
    </div>
    )
  }
}
export default Banner;
