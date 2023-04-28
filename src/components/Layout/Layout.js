import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
  render() {
    const { children, footer } = this.props;
    return (
      <>
        <Navbar />
        {children}
        {footer === true && <Footer />}
      </>
    );
  }
}

export default Layout;
