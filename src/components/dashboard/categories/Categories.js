import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            countQuantity: []
        }
    }

    componentDidMount() {
        callApi('admin/categories', 'GET', null).then(res => {
            const categories = res.data;
            this.setState({ categories });
            if(categories){
                console.log(categories.length)
                categories.forEach((category, index) => {
                    this.countQuantityProduct(category.idCat)
                });
            }
        })
    }

    countQuantityProduct = (idCat) => {
        callApi(`admin/product_of_category/${idCat}`, 'GET', null).then(res => {
            console.log(res.data)
            var countQuantity = this.state.countQuantity;
            this.setState({
                countQuantity: countQuantity.concat(res.data)
            })
        })
    }

    onChangeStatus = (id) => {
        var { categories } = this.state;
        if (confirm('Bạn chắc chắn muốn thay đổi trạng thái?')) { //eslint-disable-line
            callApi(`admin/cat_status/${id}`, 'PUT', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(categories, id);

                    if (index !== -1) {
                        var status = categories[index].enable;
                        categories[index].enable = !status;
                        this.setState({
                            categories: categories
                        });
                    }
                }
            })
        }
    }

    onDelete = (id) => {
        var { categories } = this.state;
        if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
            callApi(`admin/category/${id}`, 'DELETE', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(categories, id);
                    if (index !== -1) {
                        categories.splice(index, 1);
                        this.setState({
                            categories: categories
                        });
                    }
                }
            })
        }
    }

    findIndex = (categories, id) => {
        var result = -1;
        categories.forEach((category, index) => {
            if (category.idCat === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        let { categories, countQuantity } = this.state
        let result = categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{countQuantity[index]}</td>
                    <td>
                        <button
                            type="button"
                            className={(category.enable) ? "btn btn-success btn-fw" : "btn btn-danger btn-fw"}
                            onClick={() => this.onChangeStatus(category.idCat)}>
                            {(category.enable) ? "True" : "False"}
                        </button>
                    </td>
                    <td>
                        <Link to={`/admin/category/${category.idCat}/edit`} className="btn btn-gradient-warning btn-icon-text">Edit</Link>
                    </td>
                    <td>
                        <button type="button" className="btn btn-gradient-danger btn-icon-text" onClick={() => this.onDelete(category.idCat)}>Delete</button>
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
                                    <div className="col-lg-10 offset-md-1 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-auto mr-auto">
                                                        <h1>Manager Categories</h1>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="/admin/category/add" className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a category</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '3%' }}>STT</th>
                                                            <th>Tên</th>
                                                            <th style={{ width: '15%' }}>Số lượng sản phẩm</th>
                                                            <th style={{ width: '5%' }}>Trạng thái</th>
                                                            <th colSpan="2" style={{ width: '25%' }}>Hành động</th>
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

export default Categories;