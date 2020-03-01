import React, { Component } from 'react';

import BestsellSlider from '../layout/Index/BestsellSlider'
import BottomBannerSection from '../layout/Index/BottomBannerSection'
import ContentPage from '../layout/Index/ContentPage'
import FeaturedSlider from '../layout/Index/FeaturedSlider'
import LatestBlog from '../layout/Index/LatestBlog'
import Slider from '../layout/Index/Slider'

class Index extends Component {
  render() {
    return (
        <div>
          <Slider />
          <ContentPage />
          <BestsellSlider />
          <BottomBannerSection />
          <FeaturedSlider />
          <LatestBlog />
        </div>
      );
    }
  }
  
  export default Index;