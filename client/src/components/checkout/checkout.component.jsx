import React, { useState } from "react";
import Success from "../success/success.component";
import CheckoutForm from "../checkout-form/checkout-form.component";

function Checkout(props) {

  const [ completed,setCompleted ] = useState(false)
  const [ newOrder,setNewOrder ] = useState({})

  if (completed === false) {
    return (
      <div className="container mt-5">
        <CheckoutForm props={props} setCompleted={setCompleted} newOrder={newOrder} setNewOrder={setNewOrder} />
      </div>
    );
  }
  else{
    return(
      <Success newOrder={newOrder} />
    )
  }
}

export default Checkout;
