import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container col2-right-layout">
        <div className="main container">
          <div className="row">
            <section className="col-sm-9 wow bounceInUp animated">
              <div className="col-main">
                <div className="page-title">
                  <h2>About Us</h2>
                </div>
                <div className="static-contain">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <br />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <br />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
              </div>
            </section>
            <aside className="col-right sidebar col-sm-3 wow bounceInUp animated">
              <div className="block block-company">
                <div className="block-title">Company </div>
                <div className="block-content">
                  <ol id="recently-viewed-items">
                    <li className="item odd"><strong>About Us</strong>
                    </li>
                    <li className="item even"><a href="sitemap.html">Sitemap</a>
                    </li>
                    <li className="item  odd"><a href="#">Terms of Service</a>
                    </li>
                    <li className="item even"><a href="#">Search Terms</a>
                    </li>
                    <li className="item last"><a href="contact_us.html">Contact Us</a>
                    </li>
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;