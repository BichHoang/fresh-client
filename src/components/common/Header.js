import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-top">
            <div className="container">
              <div className="row">
                {/* Header Language */}
                <div className="col-xs-12 col-sm-6">
                  <div className="dropdown block-language-wrapper">
                    <a role="button" data-toggle="dropdown" data-target="#" className="block-language dropdown-toggle" href="#"> <img src="images/english.png" alt="language" /> English <span className="caret" /> </a>
                    <ul className="dropdown-menu" role="menu">
                      <li role="presentation">
                        <a href="#"><img src="images/english.png" alt="language" /> English </a>
                      </li>
                      <li role="presentation">
                        <a href="#"><img src="images/francais.png" alt="language" /> French </a>
                      </li>
                      <li role="presentation">
                        <a href="#"><img src="images/german.png" alt="language" /> German </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Header Language */} {/* Header Currency */}
                  <div className="dropdown block-currency-wrapper"> <a role="button" data-toggle="dropdown" data-target="#" className="block-currency dropdown-toggle" href="#"> USD <span className="caret" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li role="presentation"><a href="#"> $ - Dollar </a> </li>
                      <li role="presentation"><a href="#"> £ - Pound </a> </li>
                      <li role="presentation"><a href="#"> € - Euro </a> </li>
                    </ul>
                  </div>
                  {/* End Header Currency */}
                  <div className="welcome-msg"> Default welcome msg! </div>
                </div>
                <div className="col-xs-6 hidden-xs">
                  {/* Header Top Links */}
                  <div className="toplinks">
                    <div className="links">
                      <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a> </div>
                      <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a> </div>
                      <div className="demo"><a title="Blog" href="blog.html"><span className="hidden-xs">Blog</span></a> </div>
                      {/* Header Company */}
                      <div className="dropdown block-company-wrapper hidden-xs"> <a role="button" data-toggle="dropdown" data-target="#" className="block-company dropdown-toggle" href="#"> Company <span className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li role="presentation"><a href="about_us.html"> About Us </a> </li>
                          <li role="presentation"><a href="#"> Customer Service </a> </li>
                          <li role="presentation"><a href="#"> Privacy Policy </a> </li>
                          <li role="presentation"><a href="sitemap.html">Site Map </a> </li>
                          <li role="presentation"><a href="#">Search Terms </a> </li>
                          <li role="presentation"><a href="#">Advanced Search </a> </li>
                        </ul>
                      </div>
                      {/* End Header Company */}
                      <div className="login"><a href="login.html"><span className="hidden-xs">Log In</span></a> </div>
                    </div>
                  </div>
                  {/* End Header Top Links */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 header-phone">
                <i className="fa fa-mobile" /> + 0800 567 345
              </div>
              <div className="col-lg-6 col-md-4 col-sm-4 col-xs-12 logo-block">
                {/* Header Logo */}
                <div className="logo">
                  <a title="Magento Commerce" href="index-2.html"><img alt="Freshia" src="images/logo1.png" /> </a>
                </div>
                {/* End Header Logo */}
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 hidden-xs">
                <div className="search-box">
                  <form action="http://htmldemo.themessoft.com/freshia/version1/cat" method="POST" id="search_mini_form" name="Categories">
                    <input type="text" placeholder="Search entire store here..." defaultValue="Search" maxLength={70} name="search" id="search" />
                    <button type="button" className="search-btn-bg"><span className="glyphicon glyphicon-search" />&nbsp;</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav>
          <div className="container">
            <div className="mm-toggle-wrap">
              <div className="mm-toggle"><i className="fa fa-align-justify" /><span className="mm-label">Menu</span> </div>
            </div>
            <div className="nav-inner">
              {/* BEGIN NAV */}
              <ul id="nav" className="hidden-xs">
                <li className="level0 parent drop-menu" id="nav-home">
                  <a href="index" className="level-top"><i className="fa fa-home" /><span className="hidden">Home</span>
                  </a>
                  <ul style={{display: 'none'}} className="level1">
                    <li className="level1"><a href="index-2.html"><span>Fashion Store</span></a> </li>
                    <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/digital/index.html"><span>Digital Store</span></a> </li>
                    <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/furniture/index.html"><span>Furniture Store</span></a> </li>
                    <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/jewellery/index.html"><span>Jewellery Store</span></a> </li>
                  </ul>
                </li>
                <li className="level0 nav-6 level-top drop-menu">
                  <a className="level-top" href="#"> <span>Pages</span> </a>
                  <ul className="level1">
                    <li className="level2 first"><a href="grid.html"><span>Grid</span></a> </li>
                    <li className="level2 nav-10-2">
                      <a href="list.html"> <span>List</span> </a>
                    </li>
                    <li className="level2 nav-10-3">
                      <a href="product_detail.html"> <span>Product Detail</span> </a>
                    </li>
                    <li className="level2 nav-10-4">
                      <a href="shopping_cart.html"> <span>Shopping Cart</span> </a>
                    </li>
                    <li className="level2 parent"><a href="checkout.html"><span>Checkout</span></a> </li>
                    <li className="level1 nav-10-4">
                      <a href="wishlist.html"> <span>Wishlist</span> </a>
                    </li>
                    <li className="level1">
                      <a href="dashboard.html"> <span>Dashboard</span> </a>
                    </li>
                    <li className="level1">
                      <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a>
                    </li>
                    <li className="level1"><a href="compare.html"><span>Compare</span></a> </li>
                    <li className="level1"><a href="quick_view.html"><span>Quick View</span></a> </li>
                    <li className="level1"><a href="newsletter.html"><span>Newsletter</span></a> </li>
                    <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                  </ul>
                </li>
                <li className="mega-menu"> <a className="level-top" href="grid.html"><span>Salads</span></a>
                  <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                      <div className="level0-wrapper2">
                        <div className="nav-block nav-block-center">
                          {/*mega menu*/}
                          <ul className="level0">
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bread Salads</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cappon Magro</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Dakos</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fattoush</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Panzanella</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Fruit Salads</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Candle Salad</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Frogeye Salad</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Green Papaya Salad</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Waldorf Salad</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img1.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Salad Dressings</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Louis Dressings</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>French Dressings</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Gingner Dressings</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Italian Dressings</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img2.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Leaf Vegetable</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fenugreek</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Spinach</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Malva</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cabbage</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img3.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Stem Vegetables</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Crithmum</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fallopia Japonica</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Celery</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cardoon</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img4.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Root Vegetables</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Garlic</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Onion</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Potato</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Taros</span></a> </li>
                                <li className="push_img">
                                  <a href="#"><img src="images/menu-img5.jpg" alt="" /> </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          {/*level0*/}
                        </div>
                        {/*nav-block nav-block-center*/} {/*nav-block nav-block-center*/}
                      </div>
                      {/*level0-wrapper2*/}
                    </div>
                    {/*container*/}
                  </div>
                  {/*level0-wrapper dropdown-6col*/} {/*mega menu*/}
                </li>
                <li className="mega-menu"> <a className="level-top" href="grid.html"><span>Soups‎</span></a>
                  <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                      <div className="level0-wrapper2">
                        <div className="nav-block nav-block-center">
                          {/*mega menu*/}
                          <div className="col-1">
                            <ul className="level0">
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Cold Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Red Bean Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fruit Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Naengguk</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Borscht</span></a> </li>
                                </ul>
                              </li>
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Cream Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chowder</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Asparagus Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Broccoli Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Mushroom Soup</span></a> </li>
                                </ul>
                              </li>
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Vegitable Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>French Onion Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leek Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Minestrone</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Spring Soup</span></a> </li>
                                </ul>
                              </li>
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bean Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bouneschlupp</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Jókai Bean Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Kwati Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Senate Bean</span></a> </li>
                                </ul>
                              </li>
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bread Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tomato Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Manchow Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sweet Corn Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Shorba Soup</span></a> </li>
                                </ul>
                              </li>
                              <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Chinese Soups</span></a>
                                <ul className="level1">
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hot &amp; Sour</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Noodle Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Corn Crab Soup</span></a> </li>
                                  <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sago Soup</span></a> </li>
                                </ul>
                              </li>
                            </ul>
                            {/*level0*/}
                          </div>
                          <div className="col-2">
                            <div className="menu_image1">
                              <a title href="#"><img alt="menu_image" src="images/menu-shoes.png" /> </a>
                            </div>
                          </div>
                        </div>
                        {/*nav-block nav-block-center*/}
                      </div>
                      {/*level0-wrapper2*/}
                    </div>
                    {/*container*/}
                  </div>
                  {/*level0-wrapper dropdown-6col*/} {/*mega menu*/}
                </li>
                <li className="mega-menu"> <a className="level-top" href="grid.html"><span>Fast Food</span></a>
                  <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                      <div className="level0-wrapper2">
                        <div className="nav-block nav-block-center">
                          {/*mega menu*/}
                          <ul className="level0">
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Indian</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Aloo Chaat</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Batata Vada</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Kachori</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Panipuri</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Pizza</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Greek Pizza</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pizza Rolls</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Grilled Pizza</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pizza Strips</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>McDonald's</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Kiwiburger</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Happy Meal</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>McMuffin</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>McGriddles</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Wendy's Foods</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bacon Deluxe</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Baconator</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Frescata</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Frosty</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Burger King</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Big King</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>TenderCrisp</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Whopper</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Kuro Burger</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Sandwiches</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hamburgers</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hot Dogs‎</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>American Sandwiches</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chilean Sandwiches</span></a> </li>
                              </ul>
                            </li>
                          </ul>
                          {/*level0*/}
                        </div>
                        {/*nav-block nav-block-center*/}
                      </div>
                      {/*level0-wrapper2*/}
                    </div>
                    {/*container*/}
                  </div>
                  {/*level0-wrapper dropdown-6col*/} {/*mega menu*/}
                </li>
                <li className="mega-menu"> <a className="level-top" href="grid.html"><span>Sandwiches‎</span></a>
                  <div className="level0-wrapper dropdown-6col">
                    <div className="container">
                      <div className="level0-wrapper2">
                        <div className="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">
                          {/*mega menu*/}
                          <ul className="level0">
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>American</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>American sub</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Beef on weck</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bologna sandwich</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cheese Dream</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Mexican</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Torta</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cemita</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Toast</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chanclas</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Grilled</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cheese</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chocolate</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Garlic Cheese</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Veg Cheese</span></a> </li>
                              </ul>
                            </li>
                            <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clubbed</span></a>
                              <ul className="level1">
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Triple Decker California</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tempeh Reuben</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Mediterranean Veggie</span></a> </li>
                                <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leftover Turkey</span></a> </li>
                              </ul>
                            </li>
                          </ul>
                          {/*level0*/}
                        </div>
                        {/*nav-block nav-block-center*/}
                        <div className="nav-block nav-block-right std grid12-4"><img src="images/menu-furniutre.png" alt="Furniture" /> </div>
                      </div>
                      {/*level0-wrapper2*/}
                    </div>
                    {/*container*/}
                  </div>
                  {/*level0-wrapper dropdown-6col*/} {/*mega menu*/}
                </li>
                <li className="mega-menu"> <a className="level-top" href="grid.html"><span>Fruits</span></a> </li>
                <li className="nav-custom-link mega-menu">
                  <a href="#" className="level-top"> <span>Custom</span> </a>
                  <div className="level0-wrapper custom-menu">
                    <div className="container">
                      <div className="header-nav-dropdown-wrapper clearer">
                        <div className="grid12-3">
                          <div><img src="images/custom-img1.jpg" alt="custom-image" /> </div>
                          <h4 className="heading">Hurry up only today!</h4>
                          <p>Consult our specialists for help with an order, customization, or design advice.</p>
                        </div>
                        <div className="grid12-3">
                          <div><img src="images/custom-img2.jpg" alt="custom-image" /> </div>
                          <h4 className="heading">Flat 30% on Fruits</h4>
                          <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                        </div>
                        <div className="grid12-3">
                          <div><img src="images/custom-img3.jpg" alt="custom-image" /> </div>
                          <h4 className="heading">Hot Deals!</h4>
                          <p>Our font delivery service is built upon a reliable, global network of servers.</p>
                        </div>
                        <div className="grid12-3">
                          <div><img src="images/custom-img4.jpg" alt="custom-image" /> </div>
                          <h4 className="heading">New Arrivals!</h4>
                          <p>Currently over 50 countries qualify for express international shipping.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/*nav*/}
              <div className="top-cart-contain pull-right">
                {/* Top Cart */}
                <div className="mini-cart">
                  <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle">
                    <a href="shopping_cart.html"> <span className="cart_count">2</span> </a>
                  </div>
                  <div>
                    <div className="top-cart-content">
                      {/*block-subtitle*/}
                      <ul className="mini-products-list" id="cart-sidebar">
                        <li className="item first">
                          <div className="item-inner">
                            <a className="product-image" title="Retis lapen casen" href="#l"><img alt="Retis lapen casen" src="products-images/product4.jpg" /> </a>
                            <div className="product-details">
                              <div className="access"><a className="btn-remove1" title="Remove This Item" href="#">Remove</a>
                                <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil" /><span className="hidden">Edit item</span>
                                </a>
                              </div>
                              {/*access*/}<strong>1</strong> x <span className="price">$179.99</span>
                              <p className="product-name"><a href="#">Retis lapen casen...</a> </p>
                            </div>
                          </div>
                        </li>
                        <li className="item last">
                          <div className="item-inner">
                            <a className="product-image" title="Retis lapen casen" href="product_detail.html"><img alt="Retis lapen casen" src="products-images/product3.jpg" /> </a>
                            <div className="product-details">
                              <div className="access"><a className="btn-remove1" title="Remove This Item" href="#">Remove</a>
                                <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil" /><span className="hidden">Edit item</span>
                                </a>
                              </div>
                              {/*access*/}<strong>1</strong> x <span className="price">$80.00</span>
                              <p className="product-name"><a href="#">Retis lapen casen...</a> </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/*actions*/}
                      <div className="actions">
                        <button className="btn-checkout" title="Checkout" type="button"><span>Checkout</span> </button>
                        <a href="shopping_cart.html" className="view-cart"><span>View Cart</span></a> </div>
                    </div>
                  </div>
                </div>
                {/* Top Cart */}
                <div id="ajaxconfig_info" style={{display: 'none'}}> <a href="#/" />
                  <input defaultValue type="hidden" />
                  <input id="enable_module" defaultValue={1} type="hidden" />
                  <input className="effect_to_cart" defaultValue={1} type="hidden" />
                  <input className="title_shopping_cart" defaultValue="Go to shopping cart" type="hidden" />
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* end nav */}
      </header>
    );
  }
}

export default Header;