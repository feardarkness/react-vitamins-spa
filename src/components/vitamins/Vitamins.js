import React, { Component } from 'react';
import VitaminsList from './VitaminsList';
import VitaminsDetail from './VitaminDetail';

class Vitamins extends Component {
  render() {
    return (
      <div>
        <VitaminsList></VitaminsList>
        <VitaminsDetail></VitaminsDetail>
      </div>
    );
  }
}

export default Vitamins;