import { Component } from 'react'

   const fetchProducts = () => {
        fetch(`https://f7c4b4ae.ngrok.io/api/products`, {
            accept: "application/json"
        })
            .then((response) => {
                response.json()
                    .then((results) => {
                        let products = results
                        console.log(products);
                        return products;                       
                    })
            })
    }

    export default fetchProducts;

// function checkStatus(response) {
//     if (response.status >= 200 && response.status <= 300) {
//         return response
//     }
//     const error = new Error(`HTTP Error ${response.statusText}`);
//     error.status = response.statusText;
//     error.response = response;
//     console.log(error);
//     throw error;
// }

// function parseJSON(response) {
//     return response.json()
// }

// export default lowStock;