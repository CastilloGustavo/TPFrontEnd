import React, { Component } from 'react';
import Beadcrumb from './Beadcrumb';
import ResultSeacherItem from './ResultSeacherItem';

class ResultSeacher  extends Component {

  componentDidMount(){
    const url = "https://api.mercadolibre.com/sites/MLA/search?q='CPU'";
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
  }
  _renderItemsSeacher = () =>{
    const {
          logo
        } = this.props;
    const items = [{
      id:0,
      title:"Soy la Descripcion del Producto",
      price:"15234.6",
      picture :{},
      condition : {},
      city:"Capital",
      free_shipping:"",
      logo : logo
    },{
      id:2,
      title:"Soy la Descripcion del Producto 2",
      price:"1556.6",
      picture :{},
      condition : {},
      city:"Capital",
      free_shipping:"",
      logo : logo
    }]
    debugger;
    //return (<div><h1>PEPE</h1></div>)
    const listItems = items.map(item =>(
      //<div key={item.id + 2}><h1>PEPE</h1></div>
      <ResultSeacherItem key={item.id} item={item} logo={item.logo} />
    ));

    return listItems;
  }
//{this._renderItemsSeacher()}
  render(){
    const {
          logo
        } = this.props;

        const item = {
          id:0,
          title:"Soy la Descripcion del Producto",
          price:"152634.6",
          picture :{},
          condition : {},
          city:"Capital",
          free_shipping:"",
          logo : logo
        };
    return(
      <div className='row RowBody'>
        <div className='col-sm-1'>
        </div>
        <div className='col-sm-10'>
          <Beadcrumb />
          {this._renderItemsSeacher()}
        </div>
        <div className='col-sm-1'>
        </div>
      </div>
    )
  }
}

export default ResultSeacher
