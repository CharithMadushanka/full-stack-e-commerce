import React, { useState,useContext } from 'react'
import { Context } from "../../ContextController"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./checkout-form.styles.css";
import Spinner from '../spinner/spinner.component';

function CheckoutForm({props,setCompleted,newOrder,setNewOrder}) {

    var ObjectID = require("bson-objectid");

    const [ spinner,setSpinner ] = useState(false)
    const { setState } = useContext(Context)
    const publishableKey = 'pk_test_NxlRQCRCn8KTjYxlAn8Cp7L600n39XoJpv'

    let newRequest;
    
    const onSubmit = e => {
        e.preventDefault()
        newRequest = {
            _id: ObjectID().str,
            items: props.location.state.selectedItems,
            name: `${e.target.elements.firstName.value} ${e.target.elements.lastName.value}`,
            shipping_address: e.target.elements.address.value,
            email: e.target.elements.email.value,
            phone_number: e.target.elements.phoneNumber.value
        }
        setNewOrder(newRequest)
        // console.log(newRequest)
        // axios.post(`/api/orders`, newOrder);
    }

    const onToken = async (token) => {

        setSpinner(true)
        const product = 
        {
        price : props.location.state.total * 100,
        description : '5d76703b47d97d44947b5713'
        }
    
        const response = await axios.post(
        "/checkout",
        { token,product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            console.log("Success! Check email for details", { type: "success" })
            setCompleted(true)
            setState({ items : 0,cartItems : []})
            // console.log(newRequest)
            axios.post(`/api/orders`, newRequest)
        } else {
            console.log("Something went wrong", { type: "error" });
        }
  }

    if(spinner)
    {
        return <Spinner />
    }
    else
    {
        return (
            <div>
                <h2 style={{ textAlign: "center" }} className="mb-3">
                    CHECKOUT
                </h2>
                <form onSubmit={onSubmit}>
                    <h5>SHIPPING</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" required class="checkout-txt" name="firstName" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" required class="checkout-txt" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <input type="text" required class="checkout-txt" name="address" placeholder="Address" />
                    <input type="text" required class="checkout-txt" name="email" placeholder="Email" />
                    <input type="text" required class="checkout-txt" name="phoneNumber" placeholder="Phone Number" />
                    <p className="mt-3">
                        Your privacy is important to us. We will only contact you if there is
                        an issue with your order
                    </p>
                    <StripeCheckout
                        image='https://img.icons8.com/ios-filled/150/000000/nike.png'
                        amount={props.location.state.total * 100}
                        token={onToken}
                        stripeKey={publishableKey}
                    >
                        <button style={{borderRadius : '0%'}} type="submit" className="btn btn-dark btn-md mt-3 mb-5">Save & Continue</button>
                    </StripeCheckout>
                </form>
            </div>
        )
    }
}

export default CheckoutForm
