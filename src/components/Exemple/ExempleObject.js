import React, { useState } from 'react';

class ExempleObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      metier: "Fullstack developper",
      niveau: "en formation"
    }
  }

  handleClickJunior = () => {
    this.setState(prevState => ({ ...prevState, niveau: "Junior" }));
  }

  handleClickIntermediaire = () => {
    this.setState(prevState => ({ ...prevState, niveau: "Intermediaire" }));
  }

  handleClickSenior = () => {
    this.setState(prevState => ({ ...prevState, niveau: "Senior" }));
  }

  render() {
    return (
      <div>
        <h1>Je suis {this.state.metier} {" "} {this.state.niveau} </h1>
        <button onClick={this.handleClickJunior}>dans 3 mois je serais</button>
        <button onClick={this.handleClickIntermediaire}>dans 1 an je serais</button>
        <button onClick={this.handleClickSenior}>dans 5 ans je serais</button>
      </div>
    );
  }
}

export default ExempleObject;
