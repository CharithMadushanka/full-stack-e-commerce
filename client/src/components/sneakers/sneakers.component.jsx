import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Product from '../product/product.component'

function Sneakers() {

    const [sneakers, setSneakers] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/list?type=Sneakers`)
        .then(response => setSneakers(response.data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    sneakers.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sneakers
