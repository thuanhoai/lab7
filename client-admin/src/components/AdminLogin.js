// src/components/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/admin/login', {
                username,
                password,
            });
            const { token } = response.data;
            localStorage.setItem('x-access-token', token);
            window.location.href = '/admin-home'; // Điều hướng sau khi đăng nhập thành công
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return ( <
        div className = "login-container" >
        <
        h2 > ADMIN LOGIN < /h2> <
        form onSubmit = { handleLogin } >
        <
        div >
        <
        label > Username: < /label> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label > Password: < /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        /div> {
            error && < p className = "error" > { error } < /p>} <
                button type = "submit" > Login < /button> <
                /form> <
                /div>
        );
    }

    export default AdminLogin;