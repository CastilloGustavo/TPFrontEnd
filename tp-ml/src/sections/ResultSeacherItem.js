import React, { Component } from 'react';
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
        <div className="col-sm-2">
            <img src={logo} className="ImageResult" alt="logo" />
        </div>
        <div className="col-sm-8">
          <div className="TitleResult" >
            <h1>{this.state.item.price}</h1>
            <p onClick={this._navegateToDetalle} >{this.state.item.title}</p>
          </div>
        </div>
        <div className="col-sm-2">
          <p className="CityResult">{this.state.item.city}</p>
        </div>
      </div>
    )
  }
}
export default ResultSeacherItem
