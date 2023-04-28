import React, { Component } from 'react';
import CardEnfant from './CardEnfant';

class Parent extends Component {
  render() {
    return (
      <div>
        <CardEnfant name="Elie" />
      </div>
    );
  }
}

export default Parent;
