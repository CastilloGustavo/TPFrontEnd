import React, { Component } from 'react';

class DescriptionItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      resultApi : {}
    }
  }

  componentDidMount(){
    const {idItem} = this.props;
    var url = "https://api.mercadolibre.com/items/";
    if(idItem === "")
      return;

    fetch(url + idItem +'/description')
        .then(res => res.json())
        .then(data => {
          this.setState({resultApi:data})
        });
  }
  render(){
    return(
      <div className="item-description-text">
        <p>{this.state.resultApi.plain_text}</p>
      </div>
    )
  }
}

DescriptionItem.defaultProps ={
  idItem : ""
}

export default DescriptionItem
