import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Product from '../product/product.component'

function JacketsVests() {

    const [jacketsVests, setJacketsVests] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/list?type=Jackets%20%26%20Vests`)
        .then(response => setJacketsVests(response.data))
    },[])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    jacketsVests.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default JacketsVests
