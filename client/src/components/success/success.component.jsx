import React from 'react'
import { Link } from 'react-router-dom'

function Success({ newOrder }) {
    return (
        <div className="container">
            <center><img src="https://img.icons8.com/ios-filled/100/000000/nike.png" className="mt-4 mb-3" /></center>
            <center><h2 className="mb-5">Thank You For Your Purchase</h2></center>
            <div className="mt-3 ml-5">
                <p>Your order number is : <p style={{color : 'blue',display : 'inline'}}>{ newOrder._id }</p></p>
                <p>Billing and shipping information : </p>
                <p className="mb-5">{ newOrder.name }<br/>{ newOrder.shipping_address }<br/>{ newOrder.phone_number }</p>
                <p>We'll email you an order confirmation with details and tracking info</p>
                <Link to={`/`} style={{borderRadius : '0%'}} className="btn btn-dark btn-md mt-3 mb-5">Continue Shopping</Link>
            </div>
        </div>
    )
}

export default Success
