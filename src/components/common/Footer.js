import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="newsletter-block">
          <div className="container">
            <div className="newsletter-wrap">
              <h4>Sign up for emails</h4>
              <form id="newsletter-validate-detail" method="post" action="#">
                <div id="container_form_news">
                  <div id="container_form_news2">
                    <input type="text" className="input-text required-entry validate-email" defaultValue="Enter your email address" onfocus=" this.value='' " title="Sign up for our newsletter" id="newsletter" name="email" />
                    <button className="button subscribe" title="Subscribe" type="submit"><span>Subscribe</span> </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-lg-8">
                <div className="footer-column pull-left">
                  <h4>My Account</h4>
                  <ul className="links">
                    <li className="first"><a title="Login" href="login.html">Login</a> </li>
                    <li><a title="About us" href="about_us.html">About us</a> </li>
                    <li><a title="Wishlist" href="wishlist.html">Wishlist</a> </li>
                    <li><a title="Checkout" href="checkout.html">Checkout</a> </li>
                    <li><a title="FAQs" href="faq.html">FAQs</a> </li>
                    <li className="last"><a title="Contact Us" href="contact_us.html">Contact Us</a> </li>
                  </ul>
                </div>
                <div className="footer-column pull-left">
                  <h4>Style Advisor</h4>
                  <ul className="links">
                    <li className="first"><a title="Your Account" href="#">Your Account</a> </li>
                    <li><a title="Information" href="#">Information</a> </li>
                    <li><a title="Addresses" href="#">Addresses</a> </li>
                    <li><a title="Addresses" href="#">Discount</a> </li>
                    <li><a title="Orders History" href="#">Orders History</a> </li>
                    <li className="last"><a title=" Additional Information" href="#">Additional Information</a> </li>
                  </ul>
                </div>
                <div className="footer-column pull-left">
                  <h4>Information</h4>
                  <ul className="links">
                    <li className="first"><a href="sitemap.html" title="Site Map">Site Map</a> </li>
                    <li><a href="#" title="Search Terms">Search Terms</a> </li>
                    <li><a href="#" title="Advanced Search">Advanced Search</a> </li>
                    <li><a href="contact-us.html" title="Contact Us">Privacy Policy</a> </li>
                    <li><a href="#" title="Suppliers">Suppliers</a> </li>
                    <li className=" last"><a href="#" title="Our stores" className="link-rss">Our stores</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-lg-4">
                <div className="footer-column-last">
                  <div className="social">
                    <h4>Follow Us</h4>
                    <ul className="link">
                      <li className="fb pull-left"> <a href="#" /> </li>
                      <li className="tw pull-left"> <a href="#" /> </li>
                      <li className="googleplus pull-left"> <a href="#" /> </li>
                      <li className="rss pull-left"> <a href="#" /> </li>
                      <li className="pintrest pull-left"> <a href="#" /> </li>
                      <li className="linkedin pull-left"> <a href="#" /> </li>
                      <li className="youtube pull-left"> <a href="#" /> </li>
                    </ul>
                  </div>
                  <div className="payment-accept">
                    <h4>Payment Option</h4>
                    <div><img src="images/payment-1.png" alt="payment1" /> <img src="images/payment-2.png" alt="payment2" /> <img src="images/payment-3.png" alt="payment3" /> <img src="images/payment-4.png" alt="payment4" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div style={{textAlign: 'center'}}>
                <a href="index-2.html"><img src="images/footer-logo.png" alt="logo" /> </a>
              </div>
              <address>
                      <i className="fa fa-map-marker" /> ABC Town Luton Street, New York 226688 <i className="fa fa-mobile" /><span> +0800 567 345</span> <i className="fa fa-envelope" /><span> support@themessoft.com</span>
                    </address>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-xs-12 coppyright">© 2018 themessoft. All Rights Reserved.</div>
              <div className="col-sm-7 col-xs-12 company-links">
                <ul className="links">
                  <li><a href="#" title="Magento Themes">Magento Themes</a> </li>
                  <li><a href="#" title="Opencart Themes">Opencart Themes</a> </li>
                  <li><a href="#" title="Woocommerce Themes">Woocommerce Themes</a> </li>
                  <li className="last"><a href="#" title="Shopify Themes">Shopify Themes</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;