import React, { Component } from 'react';

class OurFeatures extends Component {
  render() {
    return (
      <div className="our-features-box">
        <div className="container">
          <ul>
            <li>
              <div className="feature-box free-shipping">
                <div className="icon-truck" />
                <div className="content">FREE SHIPPING on order over $99</div>
              </div>
            </li>
            <li>
              <div className="feature-box need-help">
                <div className="icon-support" />
                <div className="content">Need Help +1 800 123 1234</div>
              </div>
            </li>
            <li>
              <div className="feature-box money-back">
                <div className="icon-money" />
                <div className="content">Money Back Guarantee</div>
              </div>
            </li>
            <li className="last">
              <div className="feature-box return-policy">
                <div className="icon-return" />
                <div className="content">30 days return Service</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default OurFeatures;