import React, { Component } from 'react';
import Beadcrumb from './Beadcrumb';
import ResultSeacherItem from './ResultSeacherItem';

class ResultSeacher  extends Component {

  componentDidMount(){
/*    debugger;
    const url = "http://api.mercadolibre.com/sites/MLA/search";
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });*/
  }
  _renderItemsSeacher = () =>{
    const {
          logo
        } = this.props;
    const items = [{
      id:0,
      title:"Soy la Descripcion del Producto",
      price:"15266.6",
      picture :{},
      condition : {},
      city:"Capital",
      free_shipping:"",
      logo : logo
    },{
      id:2,
      title:"Soy la Descripcion del Producto 2",
      price:"15266.6",
      picture :{},
      condition : {},
      city:"Capital",
      free_shipping:"",
      logo : logo
    }]
    //return (<div><h1>PEPE</h1></div>)
    //items.map(item =>(
      //<div><h1>PEPE</h1></div>
      //return (<div>item</div>)
      //return (<ResultSeacherItem key={item.id} item={item} logo={item.logo} />)
    //));
  }
//{this._renderItemsSeacher()}
  render(){
    const {
          logo
        } = this.props;

        const item = {
          id:0,
          title:"Soy la Descripcion del Producto",
          price:"15266.6",
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
          <ResultSeacherItem item={item} logo={logo}/>
          <ResultSeacherItem item={item} logo={logo}/>          
        </div>
        <div className='col-sm-1'>
        </div>
      </div>
    )
  }
}

export default ResultSeacher
