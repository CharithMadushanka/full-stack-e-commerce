import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Product from '../product/product.component'

function TopsTShirts() {

    const [topsTShirts, setTopsTShirts] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/list?type=Tops%20%26%20T-Shirts`)
        .then(response => setTopsTShirts(response.data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    topsTShirts.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopsTShirts
