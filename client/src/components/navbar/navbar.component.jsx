import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../../ContextController"
import app from "../../firebase/firebase";
import "../../App.css"

function Navbar({ user }) {

  const { items } = useContext(Context)
  const amount = (items === 0) ? undefined : items
  const getStyle = () => {
    if(items !== 0)
    {
      return 'notification-icon'
    }
  }

  const handleLogOut = () => {
    app.auth().signOut()
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/men's">
                Men's <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/women's">
                Women's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sneakers">
                Sneakers
              </a>
            </li>
          </ul>
          {
            user ? <span role="button" style={{cursor: 'pointer'}} onClick={handleLogOut} className="navbar-text mr-4">Sign Out</span> 
            : <a href="/signin" style={{color: 'inherit',textDecoration: 'none'}}><span className="navbar-text mr-4">Sign In</span></a>              
          }
          <span className="navbar-text mr-4">
            <a href="/cart" className="notification" style={{color: 'inherit',textDecoration: 'none'}}>
              <i className="fas fa-shopping-cart"></i>
              <span className={getStyle()}>{ amount }</span>
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
