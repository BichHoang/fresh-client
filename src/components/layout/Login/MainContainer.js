import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <section className="main-container top-space col1-layout">
        <div className="main container">
          <div className="account-login">
            <div className="page-title">
              <h2>Login or Create an Account</h2>
            </div>
            <fieldset className="col2-set">
              <div className="col-1 new-users"><strong>New Customers</strong>
                <div className="content">
                  <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  <div className="buttons-set">
                    <button onclick="window.location='http://demo.magentomagik.com/computerstore/customer/account/create/';" className="button create-account" type="button"><span>Create an Account</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2 registered-users"><strong>Registered Customers</strong>
                <div className="content">
                  <p>If you have an account with us, please log in.</p>
                  <ul className="form-list">
                    <li>
                      <label htmlFor="email">Email Address <span className="required">*</span>
                      </label>
                      <br />
                      <input type="text" title="Email Address" className="input-text required-entry" id="email" defaultValue name="login[username]" />
                    </li>
                    <li>
                      <label htmlFor="pass">Password <span className="required">*</span>
                      </label>
                      <br />
                      <input type="password" title="Password" id="pass" className="input-text required-entry validate-password" name="login[password]" />
                    </li>
                  </ul>
                  <p className="required">* Required Fields</p>
                  <div className="buttons-set">
                    <button id="send2" name="send" type="submit" className="button login"><span>Login</span>
                    </button>
                    <a className="forgot-word" href="http://demo.magentomagik.com/computerstore/customer/account/forgotpassword/">Forgot Your Password?</a> </div>
                </div>
              </div>
            </fieldset>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default MainContainer;