import React, { Component } from 'react';

class CardEnfant extends Component {
  render() {
    console.log(this.props);
    // result : { name : elie }
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default CardEnfant;
