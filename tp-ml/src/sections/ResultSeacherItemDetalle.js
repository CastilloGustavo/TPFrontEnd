import React, { Component } from 'react';
import Price from './Price'
import DescriptionItem from './DescriptionItem'

class ResultSeacherItemDetalle extends Component {
  constructor() {
    super()
    this.state = {};
  }
  componentDidMount(){
    const {id} = this.props;
    this._callApiItemById(id);
  }
  _callApiItemById = (id) =>{
    var url = "https://api.mercadolibre.com/items/";
    if(id === "")
      return;

    fetch(url + id)
        .then(res => res.json())
        .then(data => {
          this._wrapperItemsForApi(data);
        });
  }
  _wrapperItemsForApi = (data)=>{
    var itemState = {};
    itemState.thumbnail = data.thumbnail;
    itemState.price =  data.price;
    itemState.title = data.title
    this.setState(itemState);
  }
  render(){
    const {id} = this.props;
    return(
      <div className="fill" >
        <div className="row RowItemSeacherDetalle">
          <div className="col-lg-8 col-md-8">
              <img src={this.state.thumbnail} className="ImageResultDetalle" alt="imagen" />
              <DescriptionItem idItem={id} />
          </div>
          <div className="col-lg-4 col-md-4">
              <Price symbol='$' value={this.state.price} />
              <button className="btn btn-outline-secondary">Comprar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultSeacherItemDetalle
