import React, { Component } from 'react';
import Price from './Price'
class ResultSeacherItem extends Component {
  constructor(props){
    super(props);
    const {item} = this.props;
    this.state ={item:item};
  }

    _navegateToDetalle = (e) =>{
      this.props.onClickViewDetails(this.state.item.id);
    }

  render(){
    const {
          logo
        } = this.props;
    return(
      <div className="row RowItemSeacher">
        <div className="col-lg-2 col-sm-4">
            <img src={logo} className="ImageResult" alt="logo" />
        </div>
        <div className="col-lg-8 col-sm-5">
          <div className="TitleResult" >
            <Price symbol='$' value={this.state.item.price} />
            <button type="button" onClick={this._navegateToDetalle}
              className="btn font-weight-normal">{this.state.item.title}</button>            
          </div>
        </div>
        <div className="col-lg-2 col-sm-3">
          <p className="CityResult">{this.state.item.city}</p>
        </div>
      </div>
    )
  }
}
export default ResultSeacherItem
