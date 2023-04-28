import React, { Component } from 'react';

class ExempleState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Noa"
    };
  }

  handleClick = () => {
    this.setState({ name: "ou pas ?" });
  }

  render() {
    return (
      <div>
        <p>Bonjour, je m'appelle {this.state.name}</p>
        <button onClick={this.handleClick}>Hello</button>
      </div>
    );
  }
}

export default ExempleState;
