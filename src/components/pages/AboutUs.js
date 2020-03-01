import React, { Component } from 'react';

import Breadcrumbs from '../layout/AboutUs/Breadcrumbs'
import MainContainer from '../layout/AboutUs/MainContainer'

class AboutUs extends Component {
  render() {
    return (
        <div>
          <Breadcrumbs />
          <MainContainer />
        </div>
      );
    }
  }
  
  export default AboutUs;