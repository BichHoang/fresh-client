import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{position: 'fixed'}}>
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <Link to="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="assets/images/faces/face1.jpg" alt="profile" />
                                <span className="login-status online" />
                                {/*change to offline or busy as needed*/}
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">David Grey. H</span>
                                <span className="text-secondary text-small">Project Manager</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            <span className="menu-title">DASHBOARD</span>
                            <i className="mdi mdi-home menu-icon" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-title">MANAGER</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-crosshairs-gps menu-icon" />
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><Link to="/admin/users" className="nav-link">USERS</Link></li>
                                <li className="nav-item"><Link to="/admin/categories" className="nav-link">CATEGORIES</Link></li>
                                <li className="nav-item"><Link to="/admin/products" className="nav-link">PRODUCTS</Link></li>
                                <li className="nav-item"><Link to="/admin/orders" className="nav-link">ODERS</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/test">
                            <span className="menu-title">Test</span>
                            <i className="mdi mdi-contacts menu-icon" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">Forms</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">Charts</span>
                            <i className="mdi mdi-chart-bar menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">Tables</span>
                            <i className="mdi mdi-table-large menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                            <span className="menu-title">Sample Pages</span>
                            <i className="menu-arrow" />
                            <i className="mdi mdi-medical-bag menu-icon" />
                        </a>
                        <div className="collapse" id="general-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Projects</h6>
                            </div>
                            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a product</button>
                        </span>
                    </li>
                </ul>
            </nav>
        )
    }
}
