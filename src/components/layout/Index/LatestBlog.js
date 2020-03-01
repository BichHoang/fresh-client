import React, { Component } from 'react';

class LatestBlog extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="blog-outer-container">
              <div className="new_title">
                <h2>Latest Blog</h2>
              </div>
              <div className="blog-inner">
                <div className="col-lg-6 col-md-6 col-sm-6 blog-preview_item">
                  <div className="entry-thumb image-hover2">
                    <a href="blog_single_post.html"> <img alt="Blog" src="images/blog-img1.jpg" /> </a>
                  </div>
                  <div className="blog-preview_info">
                    <ul className="post-meta">
                      <li><i className="fa fa-user" />posted by <a href="#">admin</a> </li>
                      <li><i className="fa fa-comments" /><a href="#">8 comments</a> </li>
                      <li><i className="fa fa-calendar" />2018-02-24 12:25:18</li>
                    </ul>
                    <h4 className="blog-preview_title"><a href="blog_single_post.html">Standard blog post with photo</a></h4>
                    <div className="blog-preview_desc">Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips.</div>
                    <a className="blog-preview_btn" href="blog_single_post.html">READ MORE</a> </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 blog-preview_item">
                  <div className="entry-thumb image-hover2">
                    <a href="blog_single_post.html"> <img alt="Blog" src="images/blog-img2.jpg" /> </a>
                  </div>
                  <div className="blog-preview_info">
                    <ul className="post-meta">
                      <li><i className="fa fa-user" />posted by <a href="#">admin</a> </li>
                      <li><i className="fa fa-comments" /><a href="#">4 comments</a> </li>
                      <li><i className="fa fa-calendar" />2018-01-07 09:05:49</li>
                    </ul>
                    <h4 className="blog-preview_title"><a href="blog_single_post.html">Standard blog post with photo</a></h4>
                    <div className="blog-preview_desc">Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</div>
                    <a className="blog-preview_btn" href="blog_single_post.html">READ MORE</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestBlog;