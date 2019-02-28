import React, { Component } from 'react';
import Beadcrumb from './Beadcrumb';
import ResultSeacherItem from './ResultSeacherItem';
import ResultSeacherItemDetalle from './ResultSeacherItemDetalle'

class ResultSeacher  extends Component {
  constructor(props){
    super(props)
    this.state = {viewDTO :{
                        autor :  "",
                        items : [],
                        filters : {}
                      },
                  idDetails : ""};
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
  _setIdItemDetalle = (id) =>{
    this.setState({idDetails:id});
  }
  _renderItemsSeacher = () =>{
    if(this.state.idDetails === "")
    {
      var itemStates = this.state.viewDTO.items;
      const listItems = itemStates.map(item =>(
        <ResultSeacherItem onClickViewDetails={this._setIdItemDetalle}
          key={item.id}
          itemId={item.id}
          textSeacher = {this.props.param}
          item={item} logo={item.thumbnail} />
      ));
        return listItems;
    }else {
      return <ResultSeacherItemDetalle id={this.state.idDetails}  />
    }
  }
  _wrapperItemsForApi = (data)=>{
    var itemResultWrapperList = [];
    const _autor = {name :"Gustavo",lastName : "Castillo"}
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
    viewDTO.autor = _autor;
    viewDTO.items = itemResultWrapperList;
    viewDTO.filters =  data.filters;
    this.setState({viewDTO:viewDTO,idDetails:""});
  }

  _renderBeadcrumd = ()=>{
    const {filters = [] }= this.state.viewDTO;
    if(filters.length > 0)
      return <Beadcrumb categories={filters} />
  }

  componentDidMount(){
    const {param} = this.props;
    this._callApiSearch(param);
  }
  render(){
    return(
      <div>
        <div className='row RowBody'>
          <div className='col-sm-1'>
          </div>
          <div className='col-sm-10'>
            {this._renderBeadcrumd()}
            {this._renderItemsSeacher()}
          </div>
          <div className='col-sm-1'>
          </div>
        </div>
        <div className='row RowFooter'>
        </div>
      </div>
    )
  }
}

export default ResultSeacher
