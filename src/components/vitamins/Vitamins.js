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
    axios.get('http://127.0.0.1:6060/vitamins')
      .then((result) => {
        this.setState({
          isLoaded: true,
          vitamins: result.data.vitamins,
        });
      })
      .catch(err => {
        this.setState({
          isLoaded: true,
          error: err,
        });
      });
  }

  render() {
    const { isLoaded, error, vitamins } = this.state;
    if (!isLoaded) {
      return (
        <div><h2>Loading...</h2></div>
      );
    } else if (error) {
      return (
        <div>
          <h2 className="error">Some error happened // add some error here based on the API response</h2>
        </div>
      );
    }
    return (
      <div>
        <VitaminsList vitamins={vitamins}></VitaminsList>
        <VitaminsDetail></VitaminsDetail>
      </div>
    );
  }
}

export default Vitamins;