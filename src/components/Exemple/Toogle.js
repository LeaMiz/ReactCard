import React, { Component } from 'react';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: true
    };
  }

  handleClick = () => {
    this.setState({ toogle: !this.state.toogle });
  }

  render() {
    return (
      <div>
        <h1>Application Toogle</h1>
        <button onClick={this.handleClick}>Toogle</button>
        {this.state.toogle && (
          <div>
            <p>Coucou</p>
          </div>
        )}
      </div>
    );
  }
}

export default Toogle;
