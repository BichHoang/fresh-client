import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            custom: {
                customer: '',
                email: '',
                phone: '',
                address: ''
            },
            users: []
        }
    }

    componentDidMount() {
        callApi('admin/orders', 'GET', null).then(res => {
            const orders = res.data;
            this.setState({ orders });
        })

        callApi('admin/users', 'GET', null).then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    onChangeStatus = (id) => {
        var { orders } = this.state;
        if (confirm('Bạn chắc chắn muốn thay đổi trạng thái?')) { //eslint-disable-line
            callApi(`admin/order_enable/${id}`, 'PUT', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(orders, id);

                    if (index !== -1) {
                        var status = orders[index].enable;
                        orders[index].enable = !status;
                        this.setState({
                            orders: orders
                        });
                    }
                }
            })
        }
    }

    onDelete = (id) => {
        var { orders } = this.state;
        console.log(id)
        if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
            callApi(`admin/order/${id}`, 'DELETE', null).then(res => {
                console.log(res)
                if (res.status === 200) {
                    var index = this.findIndex(orders, id);
                    if (index !== -1) {
                        orders.splice(index, 1);
                        this.setState({
                            orders: orders
                        });
                    }
                }
            })
        }
    }

    findIndex = (orders, id) => {
        var result = -1;
        orders.forEach((order, index) => {
            if (order.id_order === id) {
                result = index;
            }
        });
        return result;
    }

    findUserById = (users, id) => {
        var result = [];
        users.forEach((user) => {
            if (user.id_user === id) {
                result = {
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    address: user.address
                };
            }
        })
        return result;
    }

    render() {
        let { orders, users } = this.state
        let result = orders.map((order, index) => {
            let status = (statusCode) => {
                switch (statusCode) {
                    case 0: {
                        return (<td><label className="badge badge-danger">Reject</label></td>)
                        break;
                    }
                    case 1: {
                        return (<td><label className="badge badge-warning">Pending</label></td>)
                        break;
                    }
                    case 2: {
                        return (<td><label className="badge badge-info">In progress</label></td>)
                        break;
                    }
                    case 3: {
                        return (<td><label className="badge badge-success">Completed</label></td>)
                        break;
                    }
                    default: {
                        return (<td><label className="badge badge-danger">Pending</label></td>)
                    }
                }
            }
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.customer === null ? this.findUserById(users, order.id_user).fullname : order.customer}</td>
                    <td>{order.email === null ? this.findUserById(users, order.id_user).email : order.email}</td>
                    <td>{order.phone === null ? this.findUserById(users, order.id_user).phone : order.phone}</td>
                    {/* <td>{order.address === null ? this.findUserById(users, order.id_user).address : order.address}</td> */}
                    <td>{order.note}</td>
                    {status(order.status)}
                    <td>{new Date(order.created).toISOString().slice(0, 19).replace('T', ' ')}</td>
                    <td>
                        <Link to={`/admin/order/${order.id_order}/show`} className="btn btn-gradient-warning btn-icon-text">Detail</Link>
                    </td>
                    <td>
                        <button type="button" className="btn btn-gradient-danger btn-icon-text" onClick={() => this.onDelete(order.id_order)}>Delete</button>
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
                                            <div className="card-body" style={{ 'overflow': 'auto' }}>
                                                <div className="row">
                                                    <div className="col-auto mr-auto">
                                                        <h1>Manager Orders</h1>
                                                    </div>
                                                </div>
                                                <br />
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '2%' }}>STT</th>
                                                            <th style={{ width: '15%' }}>Customer</th>
                                                            <th style={{ width: '15%' }}>Email</th>
                                                            <th style={{ width: '5%' }}>Phone</th>
                                                            {/* <th style={{ width: '25%' }}>Address</th> */}
                                                            <th>Note</th>
                                                            <th style={{ width: '5%' }}>Status</th>
                                                            <th style={{ width: '5%' }}>Created</th>
                                                            <th colSpan="2" style={{ width: '15%' }}>Hành động</th>
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

export default Orders;