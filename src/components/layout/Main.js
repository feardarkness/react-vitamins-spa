import React, { Component } from 'react';
import './Main.css';
import AppRoutes from '../../AppRoutes'
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <AppRoutes></AppRoutes>
        <Link to='/Vitamins'>Vitamins</Link>
      </main>
    );
  }
}

export default Main;