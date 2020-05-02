import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categories: []
        }
    }

    componentDidMount() {
        callApi('admin/products', 'GET', null).then(res => {
            const products = res.data;
            this.setState({ products });
        })
        callApi('admin/categories', 'GET', null).then(res => {
            const categories = res.data;
            this.setState({ categories });
        })
    }

    onChangeStatus = (id) => {
        var { products } = this.state;
        if (confirm('Bạn chắc chắn muốn thay đổi trạng thái?')) { //eslint-disable-line
            callApi(`admin/product_enable/${id}`, 'PUT', null).then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(products, id);

                    if (index !== -1) {
                        var status = products[index].enable;
                        products[index].enable = !status;
                        this.setState({
                            products: products
                        });
                    }
                }
            })
        }
    }

    onDelete = (id) => {
        var { products } = this.state;
        console.log(id)
        if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
            callApi(`admin/product/${id}`, 'DELETE', null).then(res => {
                console.log(res)
                if (res.status === 200) {
                    var index = this.findIndex(products, id);
                    if (index !== -1) {
                        products.splice(index, 1);
                        this.setState({
                            products: products
                        });
                    }
                }
            })
        }
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id_product === id) {
                result = index;
            }
        });
        return result;
    }

    findCategoryById = (categories, id) => {
        var result = "Category";
        categories.forEach((category) => {
            if(category.idCat === id){
                result = category.name;
            }
        })
        return result;
    }

    render() {
        let { products, categories } = this.state
        let result = products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img src={`data:image/jpeg;base64,${product.pic}`} /></td>
                    <td>{product.name.length > 25 ? product.name.slice(0, 25) + "..." : product.name}</td>
                    <td>{product.preview.length > 50 ? product.preview.slice(0, 45) + "..." : product.preview}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                    <td>{this.findCategoryById(categories, product.id_cat)}</td>
                    <td>{product.quantity}</td>
                    <td>
                        <button
                            type="button"
                            className={(product.enable) ? "btn btn-success btn-fw" : "btn btn-danger btn-fw"}
                            onClick={() => this.onChangeStatus(product.id_product)}>
                            {(product.enable) ? "Active" : "Block"}
                        </button>
                    </td>
                    
                    <td>
                        <Link to={`/admin/product/${product.id_product}/edit`} className="btn btn-gradient-warning btn-icon-text">Edit</Link>
                    </td>
                    <td>
                        <button type="button" className="btn btn-gradient-danger btn-icon-text" onClick={() => this.onDelete(product.id_product)}>Delete</button>
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
                                                        <h1>Manager Products</h1>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Link to="/admin/product/add" className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a product</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '2%' }}>STT</th>
                                                            <th>Image</th>
                                                            <th style={{ width: '10%' }}>Name</th>
                                                            <th>Preview</th>
                                                            <th style={{ width: '25%' }}>Price</th>
                                                            <th style={{ width: '5%' }}>Rating</th>
                                                            <th style={{ width: '5%' }}>Category</th>
                                                            <th style={{ width: '5%' }}>Quantity</th>
                                                            <th style={{ width: '5%' }}>Status</th>
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

export default Product;