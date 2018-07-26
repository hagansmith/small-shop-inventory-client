const url= 'https://5754c0f8.ngrok.io';
//https://small-shop.azurewebsites.net
//


const authorize = (user, pass) => {
   return fetch(`${url}/auth`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: `grant_type=password&UserName=${user}&password=${pass}`,
        credentials: "same-origin"
    })
};

const addProductToReorder = (sku) => {
    return fetch(`${url}/api/products/${sku}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const getAllProducts = () => {
   return fetch(`${url}/api/products/`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const getProductsOnOrder = () => {
    return fetch(`${url}/api/onOrder/`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const addReorder = (variantId, count) => {
    return fetch(`${url}/api/onOrder/${variantId}/${count}`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const receiveInventoryToStock = (id, count) => {
    return fetch(`${url}/api/onOrder/${id}/${count}`, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const getProducts = () => {
    return fetch(`${url}/api/products/variants`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
};

const deactivateItem = (e, details) => {
    return fetch(`${url}/api/products/${details.id}/deactivate`, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const activateItem = (e, details) => {
    return fetch(`${url}/api/products/${details.id}/activate`, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const getCustomers = () => {
    return fetch(`${url}/api/customers`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

const logOut = () => {
    return fetch (`${url}/api/Account/Logout`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
};

export { authorize, addProductToReorder, getAllProducts, getProductsOnOrder, addReorder, receiveInventoryToStock, getProducts, updateProduct, deactivateItem, activateItem, getCustomers, logOut }