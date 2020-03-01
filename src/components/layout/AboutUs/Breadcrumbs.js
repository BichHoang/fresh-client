import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul>
                <li className="home">
                  <a href="/index" title="Go to Home Page">
                    Home
                  </a>
                  <span>/</span> 
                </li>
                <li className="category1601"> <strong>About Us</strong> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;