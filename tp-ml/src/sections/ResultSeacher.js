import React, { Component } from 'react';
import Beadcrumb from './Beadcrumb';
import ResultSeacherItem from './ResultSeacherItem';

class ResultSeacher  extends Component {
  constructor(props){
    super(props)
    this.state = {viewDTO :{
      autor :  "",
      items : [],
      categories : []
    }};
  }
  componentWillReceiveProps(nextProps) {
    const {param} = nextProps;
    this._callApiSearch(param);
   }
  _callApiSearch = (param) =>{
    var url = "https://api.mercadolibre.com/sites/MLA/search?q=";
    if(param === "")
      return;

    fetch(url+ "'"+param+ "'")
        .then(res => res.json())
        .then(data => {
          this._wrapperItemsForApi(data);
        });
  }
  _renderItemsSeacher = () =>{
    var itemStates = this.state.viewDTO.items;
    const listItems = itemStates.map(item =>(
      <ResultSeacherItem key={item.id} item={item} logo={item.thumbnail} />
    ));

    return listItems;
  }
  _wrapperItemsForApi = (data)=>{
    var itemResultWrapperList = [];
    data.results.forEach(function(item){
      var itemResultWrapper = {};
      itemResultWrapper.id = item.id;
      itemResultWrapper.price = item.price;
      itemResultWrapper.title = item.title;
      itemResultWrapper.city = item.address.city_name;
      itemResultWrapper.thumbnail = item.thumbnail;
      itemResultWrapperList.push(itemResultWrapper);
    });
    var viewDTO = {};
    viewDTO.autor = {name :"Gustavo",lastName : "Castillo"};
    viewDTO.items =itemResultWrapperList;
    this.setState({viewDTO:viewDTO});
  }


  componentDidMount(){
    const {param} = this.props;
    this._callApiSearch(param);
  }
  render(){
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
