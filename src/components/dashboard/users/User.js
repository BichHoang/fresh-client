import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        callApi('admin/users', 'GET', null).then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    onChangeStatus = (id) => {
        var { users } = this.state;
        if (confirm('Bạn chắc chắn muốn thay đổi trạng thái?')) { //eslint-disable-line
            callApi(`admin/user_enable/${id}`, 'PUT', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(users, id);

                    if (index !== -1) {
                        var status = users[index].enable;
                        users[index].enable = !status;
                        this.setState({
                            users: users
                        });
                    }
                }
            })
        }
    }

    onDelete = (id) => {
        var { users } = this.state;
        if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
            callApi(`admin/user/${id}`, 'DELETE', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(users, id);
                    if (index !== -1) {
                        users.splice(index, 1);
                        this.setState({
                            users: users
                        });
                    }
                }
            })
        }
    }

    findIndex = (users, id) => {
        var result = -1;
        users.forEach((user, index) => {
            if (user.id_user === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        let { users } = this.state
        let result = users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                        <button
                            type="button"
                            className={(user.enable) ? "btn btn-success btn-fw" : "btn btn-danger btn-fw"}
                            onClick={() => this.onChangeStatus(user.id_user)}>
                            {(user.enable) ? "Active" : "Block"}
                        </button>
                    </td>
                    <td>{(user.role > 0) ? "Admin" : "User"}</td>
                    {/* <td>
                        <Link to={`/admin/user/${user.id_user}/edit`} className="btn btn-gradient-warning btn-icon-text">Edit</Link>
                    </td> */}
                    <td>
                        <button type="button" className="btn btn-gradient-danger btn-icon-text" onClick={() => this.onDelete(user.id_user)}>Delete</button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-auto mr-auto">
                                                        <h1>Manager Users</h1>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="/admin/user/add" className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a user</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '2%' }}>STT</th>
                                                            <th>Fullname</th>
                                                            <th style={{ width: '10%' }}>Email</th>
                                                            <th style={{ width: '10%' }}>Phone</th>
                                                            <th style={{ width: '25%' }}>Adress</th>
                                                            <th style={{ width: '5%' }}>Status</th>
                                                            <th style={{ width: '5%' }}>Role</th>
                                                            <th style={{ width: '10%' }}>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {result}
                                                    </tbody>
                                                </table>
                                            </div>
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

export default User;