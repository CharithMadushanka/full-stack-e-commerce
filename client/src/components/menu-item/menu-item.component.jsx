import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem() {
    return (
        <div className="container mt-3">
            <div className="row">
            <div className="col-md-6" style={{position: 'relative'}}>
                <img src="https://images.pexels.com/photos/2002825/pexels-photo-2002825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="555" height="369.9" alt=""/>
                <h4 className="text-light" style={{position: 'absolute',bottom: '80px',left: '50px',zIndex: '1'}}>Jackets & Vests</h4>
                <Link to={`/jackets&vests`}>
                    <button type="button" className="btn btn-light" style={{position: 'absolute',bottom: '35px',left: '50px',borderRadius: '20px',fontSize: '14px'}}>&nbsp;&nbsp;&nbsp;Shop&nbsp;&nbsp;&nbsp;</button> 
                </Link>
            </div>
            <div className="col-md-6" style={{position: 'relative'}}>
                <img src="https://weart.co/v2/wp-content/uploads/2016/05/WE_ART_DAVID_DAUB_7.jpg" width="555" height="370" alt=""/>
                <h4 className="text-light" style={{position: 'absolute',bottom: '80px',left: '50px',zIndex: '1'}}>Tops & T-Shirts</h4>
                <Link to={`/tops&t-shirts`}>
                    <button type="button" className="btn btn-light" style={{position: 'absolute',bottom: '35px',left: '50px',borderRadius: '20px',fontSize: '14px'}}>&nbsp;&nbsp;&nbsp;Shop&nbsp;&nbsp;&nbsp;</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default MenuItem
