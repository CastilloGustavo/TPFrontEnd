import React, { Component } from 'react';
import './css/style.scss';
import Home from './Pages/Home';
import Detail from './Pages/Detail';

import {Switch,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:textSeacher' component={Home}/>
        <Route exact path='/items/:id' component={Detail}/>
      </Switch>
    );
  }
}

export default App;
