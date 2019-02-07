import React, { Component } from 'react';
import VitaminsList from './VitaminsList';
import VitaminsDetail from './VitaminDetail';
import axios from 'axios';

class Vitamins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      vitamins: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:6060/vitamins?resourceName=Calcium&readingLevel=Health Professional')
      .then((result) => {
        this.setState({
          isLoaded: true,
          vitamins: result.data.vitamins,
        });
      })
      .catch(console.log);
  }

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