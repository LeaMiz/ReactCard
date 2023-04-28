import React from 'react';
import responsiv from "../../assets/responsive.png";
import "./SectionPresentation.css";

class SectionPresentation extends React.Component {
  render() {
    return (
      <section id="slider">
        <img src={responsiv} alt="Responsive design" />
        <h1>Présentation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec iaculis mauris. Integer vel libero viverra, placerat justo et, commodo nulla. Sed non ex ut elit vehicula lacinia nec vel magna. Fusce vehicula dolor nec nisl imperdiet commodo.</p>
      </section>
    )
  }
}

export default SectionPresentation;
