import React, { useState,useEffect } from 'react'
// import { Context } from '../../ContextController'
import axios from 'axios'
import Product from '../product/product.component'

function DiscoverNew() {

    const [newList, setNewList] = useState([])

    useEffect(() => {
        axios
        .get(`/api/products/sortedList?sortBy=createdAt&order=desc&limit=3`)
        .then(response => setNewList(response.data))
    },[])

    return (
        <div className="container mt-5">
            <h3>DISCOVER NEW</h3>
            <p>Stay updated on what's new</p>
            <div className="row">
                {
                    newList.map(product => (
                        <Product key={product._id} product={product} name={'DiscoverNew'}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DiscoverNew
