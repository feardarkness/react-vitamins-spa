import React, { Component } from 'react';
import './Main.css';
import Routes from '../../routes/Routes'

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Routes></Routes>
      </main>
    );
  }
}

export default Main;