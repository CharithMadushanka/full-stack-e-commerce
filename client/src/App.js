import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import ContextController from "./ContextController";
import HomePage from "./pages/homepage/homepage.component";
import JacketsVests from "./components/jackets&vests/jackets&vests.component";
import TopsTShirts from "./components/tops&t-shirts/tops&t-shirts.component";
import Men from "./components/men's/men's.component";
import Women from "./components/women's/women's.component";
import Sneakers from "./components/sneakers/sneakers.component";
import ProductDetail from "./components/product-detail/product-detail.component";
import Cart from "./components/cart/cart.component";
import Checkout from "./components/checkout/checkout.component";
import Success from "./components/success/success.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import app from "./firebase/firebase";

function App() {

  const [ user,setUser ] = useState(null)

  useEffect(() => {
    authListener()
  })

  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
        localStorage.setItem('user', user.uid);
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });
  }

  return (
    <div className="App">
        <ContextController>
          <BrowserRouter>
            <Navbar user={user}/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/jackets&vests" component={JacketsVests} />
              <Route exact path="/tops&t-shirts" component={TopsTShirts} />
              <Route exact path="/men's" component={Men} />
              <Route exact path="/women's" component={Women} />
              <Route exact path="/sneakers" component={Sneakers} />
              <Route exact path="/productdetail/product/:id" component={ProductDetail} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" render={total => user ? (<Checkout {...total}/>) : (<Redirect to='/signin'/>)} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/signin" component={SignInAndSignUp} />
            </Switch>
          </BrowserRouter>
        </ContextController>
    </div>
  );
}

export default App;
