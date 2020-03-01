import React, { Component } from 'react';

class MobileMenu extends Component {
  render() {
    return (
      <div id="mobile-menu">
        <ul>
          <li>
            <div className="mm-search">
              <form id="search1" name="search">
                <div className="input-group">
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="fa fa-search" /> </button>
                  </div>
                  <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term" id="srch-term" />
                </div>
              </form>
            </div>
          </li>
          <li>
            <a href="index">Home</a>
            <ul>
              <li className="level1"><a href="index-2.html"><span>Fashion Store</span></a> </li>
              <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/digital/index.html"><span>Digital Store</span></a> </li>
              <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/furniture/index.html"><span>Furniture Store</span></a> </li>
              <li className="level1"><a href="http://htmldemo.themessoft.com/freshia/jewellery/index.html"><span>Jewellery Store</span></a> </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul>
              <li><a href="grid.html">Grid</a> </li>
              <li> <a href="list.html">List</a> </li>
              <li> <a href="product_detail.html">Product Detail</a> </li>
              <li> <a href="shopping_cart.html">Shopping Cart</a> </li>
              <li><a href="checkout.html">Checkout</a> </li>
              <li> <a href="wishlist.html">Wishlist</a> </li>
              <li> <a href="dashboard.html">Dashboard</a> </li>
              <li> <a href="multiple_addresses.html">Multiple Addresses</a> </li>
              <li> <a href="about_us.html">About us</a> </li>
              <li><a href="blog.html">Blog</a>
                <ul>
                  <li><a href="blog-detail.html">Blog Detail</a> </li>
                </ul>
              </li>
              <li><a href="contact_us.html">Contact us</a> </li>
              <li><a href="404error.html">404 Error Page</a> </li>
            </ul>
          </li>
          <li>
            <a href="#">Salads</a>
            <ul>
              <li> <a href="#" className>Bread Salads</a>
                <ul>
                  <li> <a href="grid.html" className>Cappon Magro</a> </li>
                  <li> <a href="grid.html" className>Dakos</a> </li>
                  <li> <a href="grid.html" className>Fattoush</a> </li>
                  <li> <a href="grid.html" className>Panzanella</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Fruit Salads</a>
                <ul>
                  <li> <a href="grid.html">Candle Salad</a> </li>
                  <li> <a href="grid.html">Frogeye Salad</a> </li>
                  <li> <a href="grid.html">Green Papaya Salad</a> </li>
                  <li> <a href="grid.html">Waldorf Salad</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Salad Dressings</a>
                <ul>
                  <li> <a href="grid.html">Louis Dressings</a> </li>
                  <li> <a href="grid.html">French Dressings</a> </li>
                  <li> <a href="grid.html">Gingner Dressings</a> </li>
                  <li> <a href="grid.html">Italian Dressings</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Leaf Vegetable</a>
                <ul>
                  <li> <a href="grid.html">Fenugreek</a> </li>
                  <li> <a href="grid.html">Spinach</a> </li>
                  <li> <a href="grid.html">Malva</a> </li>
                  <li> <a href="grid.html">Cabbage</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Stem Vegetables</a>
                <ul>
                  <li> <a href="grid.html">Crithmum</a> </li>
                  <li> <a href="grid.html">Fallopia Japonica</a> </li>
                  <li> <a href="grid.html">Celery</a> </li>
                  <li> <a href="grid.html">Cardoon</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Root Vegetables</a>
                <ul>
                  <li> <a href="grid.html">Garlic</a> </li>
                  <li> <a href="grid.html">Onion</a> </li>
                  <li> <a href="grid.html">Potato</a> </li>
                  <li> <a href="grid.html">Taros</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="grid.html">Soups‎</a>
            <ul>
              <li> <a href="grid.html" className>Cold Soups</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="grid.html">Red Bean Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Fruit Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Naengguk</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Borscht</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Cream Soups</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="grid.html">Chowder</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Asparagus Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Broccoli Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Mushroom Soup</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Vegitable Soups</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="grid.html">French Onion Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Leek Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Minestrone</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Spring Soup</a> </li>
                </ul>
              </li>
              <li> <a href="#.html">Bean Soups</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="grid.html">Bouneschlupp</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Jókai Bean Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Kwati Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Shorba Soup</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Chinese Soups</a>
                <ul className="level1">
                  <li className="level2 nav-6-1-1"><a href="grid.html">Hot &amp; Sour</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Noodle Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Corn Crab Soup</a> </li>
                  <li className="level2 nav-6-1-1"><a href="grid.html">Sago Soup</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="grid.html">Fast Food</a>
            <ul>
              <li> <a href="grid.html"><span>Indian</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Aloo Chaat</span></a> </li>
                  <li> <a href="grid.html"><span>Batata Vada</span></a> </li>
                  <li> <a href="grid.html"><span>Kachori</span></a> </li>
                  <li> <a href="grid.html"><span>Panipuri</span></a> </li>
                </ul>
              </li>
              <li> <a href="grid.html" className><span>Pizza</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Greek Pizza</span></a> </li>
                  <li> <a href="grid.html"><span>Pizza Rolls</span></a> </li>
                  <li> <a href="grid.html"><span>Grilled Pizza</span></a> </li>
                  <li> <a href="grid.html"><span>Pizza Strips</span></a> </li>
                </ul>
              </li>
              <li> <a href="grid.html"><span>McDonald's</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Kiwiburger</span></a> </li>
                  <li> <a href="grid.html"><span>Happy Meal</span></a> </li>
                  <li> <a href="grid.html"><span>McMuffin</span></a> </li>
                  <li> <a href="grid.html"><span>McGriddles</span></a> </li>
                </ul>
              </li>
              <li> <a href="grid.html"><span>Wendy's Foods</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Bacon Deluxe</span></a> </li>
                  <li> <a href="grid.html"><span>Baconator</span></a> </li>
                  <li> <a href="grid.html"><span>Frescata</span></a> </li>
                  <li> <a href="grid.html"><span>Frosty</span></a> </li>
                </ul>
              </li>
              <li> <a href="grid.html"><span>Burger King</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Big King</span></a> </li>
                  <li> <a href="grid.html"><span>TenderCrisp</span></a> </li>
                  <li> <a href="grid.html"><span>Whopper</span></a> </li>
                  <li> <a href="grid.html"><span>Kuro Burger</span></a> </li>
                </ul>
              </li>
              <li> <a href="grid.html"><span>Sandwiches</span></a>
                <ul>
                  <li> <a href="grid.html"><span>Hamburgers</span></a> </li>
                  <li> <a href="grid.html"><span>Hot Dogs</span></a> </li>
                  <li> <a href="grid.html"><span>American Sandwiches</span></a> </li>
                  <li> <a href="grid.html"><span>Chilean Sandwiches</span></a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="grid.html">Sandwiches‎</a>
            <ul>
              <li> <a href="grid.html">American</a>
                <ul>
                  <li> <a href="grid.html">American sub</a> </li>
                  <li> <a href="grid.html">Beef on weck</a> </li>
                  <li> <a href="grid.html">Bologna Sandwich</a> </li>
                  <li> <a href="grid.html">Cheese Dream</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html" className>Mexican</a>
                <ul>
                  <li> <a href="grid.html">Torta</a> </li>
                  <li> <a href="grid.html">Cemita</a> </li>
                  <li> <a href="grid.html">Toast</a> </li>
                  <li> <a href="grid.html">Chanclas</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Grilled</a>
                <ul>
                  <li> <a href="grid.html">Cheese</a> </li>
                  <li> <a href="grid.html">Chocolate</a> </li>
                  <li> <a href="grid.html">Garlic Cheese</a> </li>
                  <li> <a href="grid.html">Veg Cheese</a> </li>
                </ul>
              </li>
              <li> <a href="grid.html">Clubbed</a>
                <ul>
                  <li> <a href="grid.html">Triple Decker California</a> </li>
                  <li> <a href="grid.html">Tempeh Reuben</a> </li>
                  <li> <a href="grid.html">Mediterranean Veggie</a> </li>
                  <li> <a href="grid.html">Leftover Turkey</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="grid.html">Fruits</a> </li>
          <li><a href="contact-us.html">Contact Us</a> </li>
        </ul>
        <div className="top-links">
          <ul className="links">
            <li><a title="My Account" href="login.html">My Account</a> </li>
            <li><a title="Wishlist" href="wishlist.html">Wishlist</a> </li>
            <li><a title="Checkout" href="checkout.html">Checkout</a> </li>
            <li><a title="Blog" href="blog.html"><span>Blog</span></a> </li>
            <li className="last"><a title="Login" href="login.html"><span>Login</span></a> </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MobileMenu;