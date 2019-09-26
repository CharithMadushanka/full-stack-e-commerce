import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Product extends Component {
    render() {

        const {name} = this.props;
        const { product } = this.props;

        if(name === 'DiscoverNew' || name === 'TrendingNow')
        {
            return(
                <div className="col-md-4">
                    <Link to={`/productdetail/product/${product._id}`} style={{color: 'inherit',textDecoration: 'none'}}>
                        <img src={product.image} alt="" width="337.25" height="421.567" className="mb-2"/>
                        <h6 style={{textAlign:'left',float:'left'}}>{ product.name }</h6>
                        {/* <h6 className="mr-3" style={{textAlign:'right',float:'right'}}>{ product.price }$</h6> */}
                        <p style={{clear:'both'}}>{ product.gender }'s { product.category }</p>
                    </Link>
                </div>
            )
        }
        else
        {
            return (
                <div className="col-md-4">
                    <Link to={`/productdetail/product/${product._id}`} style={{color: 'inherit',textDecoration: 'none'}}>
                        <img src={product.image} alt="" width="337.25" height="421.567" className="mb-2"/>
                        <h6 style={{textAlign:'left',float:'left'}}>{ product.name }</h6>
                        <h6 className="mr-3" style={{textAlign:'right',float:'right'}}>${ product.price }</h6>
                        <p style={{clear:'both'}}>{ product.gender }'s { product.category }</p>
                    </Link>
                </div>
            )
        }
    }
}

export default Product
