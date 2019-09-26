import React, { useState,useEffect } from 'react'
// import { Context } from '../../ContextController'
import axios from 'axios'
import Product from '../product/product.component'

function TrendingNow() {

    const [trendingList, setTrendingList] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/sortedList?sortBy=sold&order=desc&limit=3`)
        .then(response => setTrendingList(response.data))
    },[])

    return (
        <div className="container mt-5">
            <h3>TRENDING NOW</h3>
            <p>From the runway to your wardrobe</p>
            <div className="row">
                {
                    trendingList.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingNow
