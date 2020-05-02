import React, { Component } from 'react'
import Header from '../commons/Header'
import Sidebar from '../commons/Sidebar'
import Footer from '../commons/Footer'
import callApi from '../../../api/apiCaller';
import { Link } from 'react-router-dom';

class EditCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '',
            txtName: '',
            cbStatus: true
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`category/${id}`, 'GET', null).then(res => {
                var data = res.data;
                console.log(data)
                this.setState({
                    id : id,
                    txtName : data.name,
                    cbStatus : data.enable
                });
            })
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
        var {history} = this.props;
        callApi('admin/category/', 'PUT', {
            idCat : this.state.id,
            name : this.state.txtName,
            enable : this.state.cbStatus
        }).then(res => {
            history.goBack();
        })
    }

    render() {
        var { txtName, cbStatus } = this.state;
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
                                            <h4 className="card-title">Chỉnh sửa Danh mục</h4>
                                            <br />
                                            <form className="forms-sample" onSubmit={this.onSave}>
                                                <div className="form-group row">
                                                    <div className="col-sm-8 offset-2">
                                                        <input
                                                            name="txtName" type="text"
                                                            className="form-control"
                                                            id="exampleInputName1"
                                                            value={txtName}
                                                            onChange={this.onChange}
                                                            placeholder="Tên danh mục" />

                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-group row">
                                                        <div className="col-2 offset-2">
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input
                                                                        name="cbStatus" type="checkbox"
                                                                        className=""
                                                                        id="exampleInputName1"
                                                                        onChange={this.onChange}
                                                                        value={cbStatus}
                                                                        checked={cbStatus}
                                                                    />
                                                                    <i className="input-helper"></i>
                                                                    Enable
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 offset-4">
                                                        <br /><br /><br />
                                                        <button type="submit" className="btn btn-gradient-primary mr-2">Update</button>
                                                        <Link to="/admin/categories" className="btn btn-light">Cancel</Link>
                                                    </div>
                                                </div>
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

export default EditCategory;