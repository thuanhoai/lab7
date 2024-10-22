// src/components/AdminCategories.js
import React from 'react';

function AdminCategories() {
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
        /header>

        <
        h2 > Category List < /h2> <
        table >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > Name < /th> <
        /tr> <
        /thead> <
        tbody >
        <
        tr >
        <
        td > 6288 b174708fabfab29ca0d < /td> <
        td > iPhone < /td> <
        /tr> <
        tr >
        <
        td > 6288 b164708fabfab29ca0a < /td> <
        td > iPad < /td> <
        /tr> <
        tr >
        <
        td > 6288 b180708fabfab29ca10 < /td> <
        td > Macbook < /td> <
        /tr> <
        /tbody> <
        /table> <
        h2 > Category Detail < /h2> <
        div >
        <
        label > ID: < /label> <
        input type = "text"
        value = "6288b174708fabfab8b26"
        readOnly / >
        <
        /div> <
        div >
        <
        label > Name: < /label> <
        input type = "text"
        value = "iPhone" / >
        <
        /div> <
        button > Add New < /button> <
        button > Update < /button> <
        button > Delete < /button> <
        /div>
    );
}

export default AdminCategories;