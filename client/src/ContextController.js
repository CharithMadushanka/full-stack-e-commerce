import React, { useState,useEffect } from 'react'

export const Context = React.createContext();

function ContextController({ children }) {

    const [ state,setState ] = useState({ items : Number(localStorage.getItem('items') || 0),cartItems : JSON.parse(localStorage.getItem('cartItems')) || [] })//Initialize state
    
    const increment = product => setState({ items : state.items + 1,cartItems : [...state.cartItems, product] })

    const remove = (item) => {
        setState({ items : state.items - 1,cartItems : state.cartItems.filter(product => product._id !== item._id)})
    }

    useEffect( () => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        localStorage.setItem('items', state.items)
    })

    return (
        <div>
            <Context.Provider value={{ addItem : increment,removeItem : remove,items : state.items,cartItems : state.cartItems,setState : setState }}>{children}</Context.Provider>
        </div>
    )
}

export default ContextController

