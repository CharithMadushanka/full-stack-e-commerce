import React, { useContext,useState,useEffect } from 'react'
import { Context } from "../../ContextController"
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom'

function Cart() {

    const { cartItems } = useContext(Context)
    const [ subtotal,setSubtotal ] = useState([])
    const [ updated,setUpdated ] = useState(false)
    const [ removed,setRemoved ] = useState(false)
    const [ total,setTotal ] = useState()
    const [ selectedItems,setSelectedItems ] = useState([])

    useEffect(() => {
        setTotal(subtotal.reduce((total, item) => total + item.amount, 0))
    })

    return (
        <div className="row mt-5 mx-5">
            <div className="col-md-8">
                <h3 className="mb-5">CART</h3>
                {
                    cartItems.map(item => (
                        <CartItem key={item._id} item={item} subtotal={subtotal} setSubtotal={setSubtotal} cartItems={cartItems} updated={updated} setUpdated={setUpdated} removed={removed} setRemoved={setRemoved} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
                    ))
                }
            </div>
            <div className="col-md-4">
                <h3 className="mb-5">SUMMARY</h3>
                <h6 className="mb-5">PRICE DETAILS</h6>
                <p style={{textAlign:'left',float:'left'}}>Subtotal</p>
                <p style={{textAlign:'right',float:'right'}}>${ total }</p>
                <p style={{clear:'both'}}>Estimated Shipping & Handling</p>
                <hr/>
                <p className="mb-5">Total</p>
                <Link to={{ pathname: `/checkout`, state : { total : total,selectedItems : selectedItems} }} style={{borderRadius : '0%'}} className="btn btn-dark btn-block mb-5">CHECKOUT</Link>
            </div>
        </div>
    )
}

export default Cart
