import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

class Price extends Component {
  render(){
    return(
      <div className="form-inline">
          <h2>
            <CurrencyFormat
             value={this.props.value}
             displayType={'text'}
             thousandSeparator={true}
             prefix={this.props.symbol} />
          </h2>
            <p>{this.props.icon}</p>
      </div>
    )
  }
}

Price.defaultProps = {
  symbol : "$",
  value : "0.00"
}

export default Price
