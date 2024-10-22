// AdminAddProduct.js
import React, { useState, useEffect } from 'react';

const AdminAddProduct = () => {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    // Định nghĩa hàm fetchProducts
    const fetchProducts = async() => {
        const response = await fetch('/api/products'); // Thay thế với URL thực tế
        const data = await response.json();
        setProducts(data);
    };

    // Lấy danh sách sản phẩm khi component được mount
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        if (productImage) {
            formData.append('image', productImage);
        }

        if (productId) {
            // Cập nhật sản phẩm
            await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                body: formData,
            });
        } else {
            // Thêm sản phẩm mới
            await fetch('/api/products', {
                method: 'POST',
                body: formData,
            });
        }

        // Reset form và lấy danh sách sản phẩm mới
        resetForm();
        await fetchProducts(); // Gọi fetchProducts ở đây
    };

    const resetForm = () => {
        setProductId(null);
        setProductName('');
        setProductPrice('');
        setProductImage(null);
    };

    const handleEdit = (product) => {
        setProductId(product.id);
        setProductName(product.name);
        setProductPrice(product.price);
        setProductImage(null); // Không cần giữ ảnh cũ khi chỉnh sửa
    };

    const handleDelete = async(id) => {
        await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
        setProducts(products.filter(product => product.id !== id));
    };

    return ( <
        div className = "admin-home" >
        <
        header >
        <
        nav >
        <
        a href = "/users" > Users < /a> <
        a href = "/admin/categories" > Categories < /a> <
        a href = "/admin/products" > Products < /a> <
        a href = "/orders" > Orders < /a>

        <
        /nav> <
        /header> <
        h2 > Quản Lý Sản Phẩm < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Tên sản phẩm: < /label> <
        input type = "text"
        value = { productName }
        onChange = {
            (e) => setProductName(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label > Giá sản phẩm: < /label> <
        input type = "number"
        value = { productPrice }
        onChange = {
            (e) => setProductPrice(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label > Ảnh sản phẩm: < /label> <
        input type = "file"
        accept = "image/*"
        onChange = {
            (e) => setProductImage(e.target.files[0]) }
        /> <
        /div> <
        button type = "submit" > { productId ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm' } < /button> <
        button type = "button"
        onClick = { resetForm } > Hủy < /button> <
        /form>

        <
        h3 > Danh Sách Sản Phẩm < /h3> <
        ul > {
            products.map(product => ( <
                li key = { product.id } >
                <
                span > { product.name } - { product.price }
                VND < /span> <
                button onClick = {
                    () => handleEdit(product) } > Sửa < /button> <
                button onClick = {
                    () => handleDelete(product.id) } > Xóa < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default AdminAddProduct;