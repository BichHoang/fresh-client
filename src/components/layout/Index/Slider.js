import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div id="thm-slideshow" className="thm-slideshow">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div id="rev_slider_4_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
                <div id="rev_slider_4" className="rev_slider fullwidthabanner">
                  <ul>
                    <li data-transition="random" data-slotamount={7} data-masterspeed={1000} data-thumb="images/slide-img1.jpg"><img src="images/slide-img1.jpg" alt="slide-img" data-bgposition="left top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                      <div className="info">
                        <div className="tp-caption ExtraLargeTitle sft  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1100} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"><span>Modern Design</span> </div>
                        <div className="tp-caption LargeTitle sfl  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1300} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"><span>Simply delicious</span> </div>
                        <div className="tp-caption Title sft  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1450} data-easing="Power2.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1">In augue urna, nunc, tincidunt, augue, augue facilisis facilisis.</div>
                        <div className="tp-caption sfb  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1500} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"><a href="#" className="buy-btn">Shop Now</a> </div>
                      </div>
                    </li>
                    <li data-transition="random" data-slotamount={7} data-masterspeed={1000} data-thumb="images/slide-img2.jpg"><img src="images/slide-img2.jpg" alt="slide-img" data-bgposition="left top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                      <div className="info">
                        <div className="tp-caption ExtraLargeTitle sft slide2  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1100} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"><span>Mega Sale</span> </div>
                        <div className="tp-caption LargeTitle sfl  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1300} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1">Season Sale </div>
                        <div className="tp-caption Title sft  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1500} data-easing="Power2.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div className="tp-caption sfb  tp-resizeme " data-endspeed={500} data-speed={500} data-start={1500} data-easing="Linear.easeNone" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1"><a href="#" className="buy-btn">Buy Now</a> </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 hot-deal">
              <ul className="products-grid">
                <li className="right-space two-height item">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info">
                        <a href="#" title="Retis lapen casen" className="product-image"> <img src="products-images/product16.jpg" alt="Retis lapen casen" /> </a>
                        <div className="hot-label hot-top-left">Hot</div>
                        <div className="box-hover">
                          <ul className="add-to-links">
                            <li><a className="link-quickview" href="quick_view.html">Quick View</a> </li>
                            <li><a className="link-wishlist" href="wishlist.html">Wishlist</a> </li>
                            <li><a className="link-compare" href="compare.html">Compare</a> </li>
                          </ul>
                        </div>
                        <div className="box-timer">
                          <div className="countbox_1 timer-grid" />
                        </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a href="product_detail.html" title="Retis lapen casen"> Retis lapen casen </a> </div>
                        <div className="item-content">
                          <div className="rating">
                            <div className="ratings">
                              <div className="rating-box">
                                <div className="rating" style={{width: '80%'}} />
                              </div>
                              <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                            </div>
                          </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span>
                            </div>
                          </div>
                          <div className="action">
                            <button data-original-title="Add to Cart" title type="button" className="button btn-cart"><span>Add to Cart</span> </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;