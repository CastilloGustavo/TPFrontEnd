import React, { Component } from 'react';
import './css/style.scss';
import Home from './sections/Home';
import Detail from './sections/Detail';

import {Switch,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:textSeacher' component={Home}/>        
        <Route exact path='/detail/:id' component={Detail}/>
      </Switch>
    );
  }
}

export default App;
