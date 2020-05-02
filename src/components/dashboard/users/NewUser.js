import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            status: '',
            role: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { fullname, email, address, status, role, phone, password } = this.state;
        var { history } = this.props;
        var isAdmin = role === true ? 1 : 0;
        console.log(this.state)
        callApi('user/', 'POST', {
            fullname: fullname,
            email: email,
            address: address,
            password: password,
            phone: phone,
            enable: status,
            role: isAdmin
        }).then(res => {
            history.goBack();
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="content-wrapper">
                                <div className="col-8 offset-2 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Thêm mới người dùng</h4>
                                            <br />
                                            <form className="forms-sample" onSubmit={this.onSave}>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Fullname</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control"
                                                            name="fullname" 
                                                            id="exampleInputUsername2"
                                                            onChange={this.onChange}
                                                            placeholder="Fullname" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                                                    <div className="col-sm-9">
                                                        <input type="email" className="form-control" 
                                                            id="exampleInputEmail2"
                                                            name="email"
                                                            onChange={this.onChange}
                                                            placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                                                    <div className="col-sm-9">
                                                        <input type="password" className="form-control"
                                                            id="exampleInputPassword2"
                                                            name="password"
                                                            onChange={this.onChange}
                                                            placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                                                    <div className="col-sm-9">
                                                        <input type="password" className="form-control"
                                                            id="exampleInputConfirmPassword2"
                                                            name="repassword"
                                                            onChange={this.onChange}
                                                            placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Phone</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" 
                                                            id="exampleInputMobile"
                                                            name="phone"
                                                            onChange={this.onChange}
                                                            placeholder="Mobile number" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" 
                                                            id="exampleInputPassword2"
                                                            name="address"
                                                            onChange={this.onChange}
                                                            placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-2 offset-3">
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input
                                                                    name="status" type="checkbox"
                                                                    className="form-check-input"
                                                                    id="exampleInputName1"
                                                                    onChange={this.onChange}
                                                                />
                                                                <i className="input-helper"></i>
                                                                    Active
                                                                </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 offset-1">
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input
                                                                    name="role" type="checkbox"
                                                                    className="form-check-input"
                                                                    id="exampleInputName1"
                                                                    onChange={this.onChange}
                                                                />
                                                                <i className="input-helper"></i>
                                                                    Admin
                                                                </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-gradient-primary mr-2">Create</button>
                                                <Link to="/admin/users" className="btn btn-light">Cancel</Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Footer />
                    </div>
                    {/* main-panel ends */}
                </div>
            </div >
        )
    }
}

export default NewUser;