import React, { Component } from 'react';

class BottomBannerSection extends Component {
  render() {
    return (
      <div className="bottom-banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="testi-slider">
                <div>
                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="avatar"><img src="images/member1.jpg" alt="slide3" />
                        </div>
                        <div>
                          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum."</p>
                          <div className="clients_author"><a href="#" target="_blank">
                                    Karla Anderson	<span>Happy Customer</span>     </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="avatar"><img src="images/member2.png" alt="slide3" />
                        </div>
                        <div>
                          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum."</p>
                          <div className="clients_author"><a href="#" target="_blank">
                                    John Smith	<span>Happy Customer</span>     </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="avatar"><img src="images/member3.png" alt="slide3" />
                        </div>
                        <div>
                          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum."</p>
                          <div className="clients_author"><a href="#" target="_blank">
                                    Stephen Doe	<span>Happy Customer</span>     </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ol className="carousel-indicators">
                      <li className="active" data-target="#carousel-example-generic" data-slide-to={0} />
                      <li data-target="#carousel-example-generic" data-slide-to={1} className />
                      <li data-target="#carousel-example-generic" data-slide-to={2} className />
                    </ol>
                    <a className="left carousel-control" href="#" data-slide="prev"> <span className="sr-only">Previous</span> </a>
                    <a className="right carousel-control" href="#" data-slide="next"> <span className="sr-only">Next</span> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="bottom-banner-img1">
                    <a href="#"> <img src="images/ads-02.jpg" alt="bottom banner" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="bottom-banner-img1">
                    <a href="#"> <img src="images/ads-03.jpg" alt="bottom banner" /><span className="banner-overly" />
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="bottom-banner-img1 last">
                    <a href="#"><img src="images/ads-05.jpg" alt="bottom banner" /> <span className="banner-overly" />
                      <div className="bottom-img-info last">
                        <h3>up to <span>25%</span> off</h3>
                        <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBannerSection;