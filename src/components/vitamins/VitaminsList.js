import React, { Component } from 'react'


class VitaminsList extends Component {
  render() {
    const { vitamins } = this.props;
    return (
      <ul>
        {vitamins.map(vitamin => <li key={vitamin}><a href={`#${vitamin}`}>{vitamin}</a></li>)}
      </ul>
    );
  }
}

export default VitaminsList;