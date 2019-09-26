import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../ContextController";

function CartItem({ item, subtotal, updated, setUpdated, removed, setRemoved, selectedItems, setSelectedItems }) {
  const { removeItem } = useContext(Context)
  const [amount, setAmount] = useState(item.price)
  const [quantity, setQuantity] = useState(1)

  const updateQuantity = e => {
    setQuantity(e.target.value) 
    setAmount(item.price * e.target.value)
    setUpdated(!updated)
    subtotal.forEach(element => {
      if (element.id === item._id) {
        element.amount = item.price * e.target.value
      }
    })
    selectedItems.forEach(element => {
      if (element.id === item._id) {
        element.quantity = e.target.value
      }
    })

  }

  const removeEverything = item => {
    removeItem(item);
    setRemoved(!removed)
    subtotal.forEach((element,index) => {
      if (element.id === item._id) {
        subtotal.splice(index,1)
      }
    })
  }

  useEffect(() => {
    subtotal.push({ id : item._id,amount : amount })
  },[])

  useEffect(() => {
    selectedItems.push({ id : item._id,name : item.name,size : item.selectedSize,quantity : quantity })
  },[])

  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={item.image} alt="" width="136.6" height="170.75" />
        </div>
        <div className="col-6 mr-5">
          <h6 className="mb-5">{item.name}</h6>
          <div style={{ lineHeight: "0" }}>
            <p className="text-secondary">{item.gender}'s {item.category}</p>
            <p className="mr-5 text-secondary" style={{ display: "inline-block" }}>Size&emsp;{item.selectedSize}</p>
            <div className="form-group text-secondary" style={{ display: "inline-block" }}>
              <label for="quantity" className="mr-3">Quantity</label>
              <select onChange={e => updateQuantity(e)} name="quantity" id="quantity" class="browser-default custom-select text-secondary" style={{ width: "auto", borderRadius: "0px" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <br />
            <button className="text-secondary" onClick={() => removeEverything(item)} style={{ background: "none", border: "none", padding: "0" }}><u>Remove</u></button>
          </div>
        </div>
        <div className="col">
          <p>${amount}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
