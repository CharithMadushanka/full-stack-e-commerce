import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Product from '../product/product.component'

function Men() {

    const [men, setMen] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/list?gender=Men`)
        .then(response => setMen(response.data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    men.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Men
