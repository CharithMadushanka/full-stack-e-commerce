import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Product from '../product/product.component'

function Women() {

    const [women, setWomen] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/list?gender=Women`)
        .then(response => setWomen(response.data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    women.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Women
