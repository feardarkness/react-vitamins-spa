import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NoMatch from '../components/NoMatch';
import Vitamins from '../components/vitamins/Vitamins';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/vitamins" component={Vitamins}></Route>
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;