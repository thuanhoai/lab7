// src/components/AdminHome.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminHome() {
    const [adminName, setAdminName] = useState('Admin');

    useEffect(() => {
        const fetchAdminData = async() => {
            const token = localStorage.getItem('x-access-token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:3000/api/admin/token', {
                        headers: {
                            'x-access-token': token,
                        },
                    });
                    setAdminName(response.data.username || 'Admin');
                } catch (err) {
                    console.error('Token validation failed');
                }
            }
        };

        fetchAdminData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('x-access-token');
        window.location.href = '/login';
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
        a href = "/orders" > Orders < /a> <
        span > Hello, { adminName } < /span> <
        button onClick = { handleLogout } > Logout < /button> <
        /nav> <
        /header> <
        main >
        <
        h2 > ADMIN HOME < /h2> <
        div className = "welcome-emoji" > 😊 < /div> <
        /main> <
        /div>
    );
}

export default AdminHome;