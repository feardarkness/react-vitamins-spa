import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Link to='/vitamins'>Vitamins</Link>
      </div>
    );
  }
}

export default App;
