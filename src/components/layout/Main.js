import React, { Component } from 'react';
import './Main.css';
import AppRoutes from '../../AppRoutes';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <AppRoutes></AppRoutes>
      </main>
    );
  }
}

export default Main;