import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class OrdersAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
            users: [],
            detail_order: []
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`admin/order/${id}`, 'GET', null).then(res => {
                const order = res.data;
                this.setState({ order });
            })

            callApi('admin/users', 'GET', null).then(res => {
                const users = res.data;
                this.setState({ users });
            })

            callApi(`admin/detail_order/${id}`, 'GET', null).then(res => {
                const detail_order = res.data;
                this.setState({ detail_order });
            })
        }
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

    formatMoney = (money) => {
        var str = money.toString()
        var rs = [];
        while(str.length >3){
            rs.unshift(str.substring(str.length - 3, str.length));
            str = str.substring(0, str.length - 3)
        }
        rs.unshift(str)
        return rs.join(".");
    }

    render() {
        let { order, users, detail_order } = this.state
        let status = (statusCode) => {
            switch (statusCode) {
                case 0: {
                    return (<label className="badge badge-danger">Reject</label>)
                    break;
                }
                case 1: {
                    return (<label className="badge badge-warning">Pending</label>)
                    break;
                }
                case 2: {
                    return (<label className="badge badge-info">In progress</label>)
                    break;
                }
                case 3: {
                    return (<label className="badge badge-success">Completed</label>)
                    break;
                }
                default: {
                    return (<label className="badge badge-danger">Pending</label>)
                }
            }
        }

        let total = 0;

        let detail = detail_order.map((item, index) => {
            total += item.quantity * item.price;
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img src={`data:image/jpeg;base64,${item.product.pic}`} /></td>
                    <td>{item.product.name.length > 25 ? item.product.name.slice(0, 25) + "..." : item.product.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })

        return (
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <Link id="btnBack" to="/admin/orders" className="btn btn-light">Back</Link>
                        <div className="content-wrapper">
                            <div className="content-wrapper">
                                
                                <div className="row">
                                    <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body" style={{ 'overflow': 'auto' }}>
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr className="table-success"><th colSpan="5">Thông tin khách khàng</th></tr>
                                                        <tr>
                                                            {/* <th style={{ width: '5%' }}>Created</th> */}
                                                            <th style={{ width: '15%' }}>Customer</th>
                                                            <th style={{ width: '15%' }}>Email</th>
                                                            <th style={{ width: '5%' }}>Phone</th>
                                                            <th style={{ width: '25%' }}>Address</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            {/* <td>{new Date(order.created).toISOString().slice(0, 19).replace('T', ' ')}</td> */}
                                                            <td>{order.customer === null ? this.findUserById(users, order.id_user).fullname : order.customer}</td>
                                                            <td>{order.email === null ? this.findUserById(users, order.id_user).email : order.email}</td>
                                                            <td>{order.phone === null ? this.findUserById(users, order.id_user).phone : order.phone}</td>
                                                            <td>{order.address === null ? this.findUserById(users, order.id_user).address : order.address}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body" style={{ 'overflow': 'auto' }}>
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr className="table-info"><th colSpan="5">Chi Tiết Đơn Hàng</th></tr>
                                                        <tr>
                                                            <th>Status: {status(order.status)}</th>
                                                            <th>Created: {new Date(order.created).toLocaleTimeString()}</th>
                                                            <th>Phuong thuc TT: CK</th>
                                                            <th>Note: <label className="badge badge-danger">Giao hang gio hanh chinh</label></th>
                                                            <th>Action: <label className="badge badge-danger">Accept</label></th>
                                                        </tr>
                                                        <tr>
                                                            <th style={{ width: '5%' }}>STT</th>
                                                            <th>Image</th>
                                                            {/* <th style={{ width: '5%' }}>Created</th> */}
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {detail}
                                                    </tbody>
                                                    <thead>
                                                        <tr>
                                                            <th colSpan="3">Total</th>
                                                            <th colSpan="2">{this.formatMoney(total)} VND</th>
                                                        </tr>
                                                    </thead>
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

export default OrdersAction;