import React, { Component } from 'react';
class Beadcrumb extends Component {
  constructor(props){
    super(props)
    const {categories = []} = this.props;
    const category = categories.find(x=> x.id === "category")
    this.state = {
      category : category
    }
  }
  _renderBeadcrumd(){    
    const {category = []} =this.state;
    if(category.values.length > 0 )
    {
      const {path_from_root} = category.values[0];
      var firtsLoop = true;
      var labelCategories = "";
      path_from_root.forEach((item)=>{
        if(!firtsLoop)
          labelCategories += " > ";
        labelCategories += item.name;
        firtsLoop = false;
      },this);
      return <p>{labelCategories}</p>
    }else {
      return <p>Sin Categorias</p>
    }
  }

  render(){
    return(
      <div className="row">
        {this._renderBeadcrumd()}
      </div>
    )
  }
}
export default Beadcrumb
