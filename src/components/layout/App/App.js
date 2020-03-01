import React, { Component } from 'react';
import BrandLogo from '../../common/BrandLogo';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import MobileMenu from '../../common/MobileMenu';
import OurFeatures from '../../common/OurFeatures';
import RouterURL from '../../../routers/RouterURL';

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      
    <Router>
        <div id="page">
          <Header />

          <RouterURL />

          <BrandLogo />
          <OurFeatures />
          <Footer />
        </div>
        <MobileMenu />
    </Router>
    );
  }
}

export default App;