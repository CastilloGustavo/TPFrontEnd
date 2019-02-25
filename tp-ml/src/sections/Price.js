import React, { Component } from 'react';
class Price extends Component {
  render(){
    return(
      <div className="form-inline">
          <h1>{this.props.symbol}</h1>          
          <h1>{this.props.value}</h1>
          <p>{this.props.icon}</p>
      </div>
    )
  }
}
export default Price
