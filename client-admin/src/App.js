import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import AdminCategories from './components/AdminCategories';
import AdminAddProduct from './components/AdminAddProduct';
import './App.css';

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/admin/login"
        element = { < AdminLogin / > }
        /> <
        Route path = "/admin/home"
        element = { < AdminHome / > }
        /> <
        Route path = "/admin/categories"
        element = { < AdminCategories / > }
        /> <
        Route path = "/admin/products"
        element = { < AdminAddProduct / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;