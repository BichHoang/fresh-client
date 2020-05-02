import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Categories from './components/dashboard/categories/Categories';
import NewCategory from './components/dashboard/categories/NewCategory';
import EditCategory from './components/dashboard/categories/EditCategory';
import NewUser from './components/dashboard/users/NewUser';
import EditUser from './components/dashboard/users/EditUser';
import User from './components/dashboard/users/User';
import Product from './components/dashboard/products/Product';
import ProductAction from './components/dashboard/products/ProductAction';
import Test from './components/dashboard/Test';
import Orders from './components/dashboard/orders/Orders';
import OrdersAction from './components/dashboard/orders/OrdersAction';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <Dashboard match = {match} />
    },
    {
        path: '/dashboard',
        exact: true,
        main: ({match}) => <Dashboard match = {match} />
    },
    {
        path: '/admin/categories',
        exact: false,
        main: ({match}) => <Categories match = {match} />
    },
    {
        path: '/admin/category/add',
        exact: false,
        main: ({history}) => <NewCategory history= {history} />
    },
    {
        path: '/admin/category/:id/edit',
        exact: false,
        main: ({match, history}) => <EditCategory match = {match} history= {history} />
    },
    {
        path: '/admin/users',
        exact: false,
        main: ({match}) => <User match = {match} />
    },
    {
        path: '/admin/user/add',
        exact: false,
        main: ({history}) => <NewUser history= {history} />
    },
    {
        path: '/admin/user/:id/edit',
        exact: false,
        main: ({match, history}) => <EditUser match = {match} history= {history} />
    },
    {
        path: '/admin/products',
        exact: false,
        main: ({match}) => <Product match = {match} />
    },
    {
        path: '/admin/product/add',
        exact: false,
        main: ({history}) => <ProductAction history= {history} />
    },
    {
        path: '/admin/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductAction match = {match} history= {history} />
    },
    {
        path: '/admin/orders',
        exact: false,
        main: ({match}) => <Orders match = {match} />
    },
    {
        path: '/admin/order/add',
        exact: false,
        main: ({history}) => <OrdersAction history= {history} />
    },
    {
        path: '/admin/order/:id/show',
        exact: false,
        main: ({match, history}) => <OrdersAction match = {match} history= {history} />
    },
    {
        path: '/test',
        exact: false,
        main: ({match}) => <Test match = {match} />
    }
];
export default routes;