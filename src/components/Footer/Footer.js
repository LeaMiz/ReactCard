import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: "gray"
    };
  }

  render() {
    const { name } = this.props;
    const { changeColor } = this.state;
    const StyleRed = { color: changeColor, fontSize: "15px" };

    return (
      <footer>
        <nav className="conteneur"><a href="informations.html" style={StyleRed}>Informations</a> - <a href="mentionslégales.html">Mentions légales</a> - <a href="Contact.html">Contact</a></nav>
        <p className="conteneur" style={StyleRed}>© 2023 Conception et réalisation par {name} Tous droits réservés.</p>
      </footer>
    );
  }
}

export default Footer;
