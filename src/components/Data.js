import React from "react";


const url= 'https://e4adfd22.ngrok.io';
const token=  sessionStorage.getItem('token');

//https://small-shop.azurewebsites.net

const authorize = (user, pass) => {
   return fetch(`${url}/auth`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: `grant_type=password&UserName=${user}&password=${pass}`,
        credentials: "same-origin"
    });
}

const addProductToReorder = (sku) => {
    return fetch(`${url}/api/products/${sku}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const getAllProducts = () => {
   return fetch(`${url}/api/products/`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const getProductsOnOrder = () => {
    return fetch(`${url}/api/onOrder/`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const addReorder = (variantId, count) => {
    return fetch(`${url}/api/onOrder/${variantId}/${count}`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const receiveInventoryToStock = (id, count) => {
    return fetch(`${url}/api/onOrder/${id}/${count}`, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const getProducts = () => {
    return fetch(`${url}/api/products/variants`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
};

const updateProduct = (editedProduct) => {
   return fetch(`${url}/api/products/update`, {
        method: 'PUT',
        body: JSON.stringify(editedProduct),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

const deleteItem = (details) => {
    return fetch(`${url}/api/products/${details.variantId}`, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        })
    })
}

export { authorize, addProductToReorder, getAllProducts, getProductsOnOrder, addReorder, receiveInventoryToStock, getProducts, updateProduct, deleteItem }