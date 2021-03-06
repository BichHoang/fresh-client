import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import NotFoundError from '../components/pages/NotFoundError';
import Index from '../components/pages/Index';
import Login from '../components/pages/Login';
import AboutUs from '../components/pages/AboutUs';
import BlogSinglePost from '../components/pages/BlogSinglePost';
import Dashboard from '../components/dashboard/Dashboard';
import Categories from '../components/dashboard/categories/Categories';

class RouterURL extends Component {
	render() {
		return (
		      <div>
		      	<Switch>
					<Route path="/index" component={Index} />
					<Route path="/login" component={Login} />
					<Route path="/about" component={AboutUs} />
					<Route path="/blog-single-post" component={BlogSinglePost} />
					<Route path="/not-found" component={NotFoundError} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/admin/categories" exact component={Categories} />
		        </Switch>
		      </div>
			
		);
	}
}
export default RouterURL;
