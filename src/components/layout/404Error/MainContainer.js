import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <section className="content-wrapper">
        <div className="container">
          <div className="std">
            <div className="page-not-found">
              <img src={process.env.PUBLIC_URL + 'images/404-img.jpg' } />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainContainer;