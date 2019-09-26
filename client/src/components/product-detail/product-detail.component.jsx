import React, { useState,useEffect,useContext } from 'react'
import { Context } from "../../ContextController"
import axios from 'axios'
import "../../App.css"

function ProductDetail({ match }) {

    const [product, setProduct] = useState([])
    const [selectedSize, setSelectedSize] = useState('')
    const { addItem } = useContext(Context)

    const getData = event => {
        setSelectedSize(event.target.innerText)
    }
    
    const setData = () => {
        if(selectedSize !== ''){
            product["selectedSize"] = selectedSize
            addItem(product)
        }
        else{
            var size = document.getElementById("size")
            size.className = "text-danger"
        }
    }

    useEffect(() => {
        axios
        .get(`/api/product/${match.params.id}`)
        .then(response => setProduct(response.data))
    },[])

    if( product === undefined || Object.keys(product).length === 0 )
    {
        return null
    }
    else
    {
        return (
            <div className="row mt-5 mb-5 mx-5">
                <div className="col-md-4">
                    <img src={product.image} alt="" width="388.5" height="485.617" />
                </div>
                <div className="col-md-4">
                    <img src={product.second_image} alt="" width="388.5" height="485.617" />
                </div>
                <div className="col-md-4">
                    <h6 style={{textAlign:'left',float:'left'}}>{ product.gender }'s {product.category}</h6>
                    <h6 className="mr-3" style={{textAlign:'right',float:'right'}}>${ product.price }</h6>
                    <h4 style={{clear:'both'}}>{ product.name }</h4>
                    <br/>
                    <p>{product.description}</p>
                    <p id="size">Select Size</p>
                        {
                            product.sizes.map((size,index) => (
                                <button key={index} onClick={(event) => getData(event)} className="btn btn-outline-dark btn-circle m-1">{size}</button>
                            ))
                        }
                    <br/>
                    <br/>
                    <br/>
                    <button className="btn btn-dark btn-block" onClick={() => setData()}>Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductDetail

