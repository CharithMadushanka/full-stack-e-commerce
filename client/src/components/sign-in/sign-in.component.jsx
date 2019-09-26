import React, { useContext } from 'react'
import { withRouter,Redirect } from "react-router-dom"
import app from "../../firebase/firebase"
import "./sign-in.styles.css";

function SignIn({history}) {

    const handleLogin = async e => {
      e.preventDefault()
      const { email, password } = e.target.elements
      app.auth().signInWithEmailAndPassword(email.value, password.value).then((u)=>{
        var frm = document.getElementsByName('signin')[0];
        frm.reset();
        history.push('/')
      }).catch((error) => {
          alert(error.message);
        });
    }

    return (
        <div>
            <h5 className="mb-3">Sign In</h5>
            <form name="signin" onSubmit={handleLogin}>
                <input type="text" name="email" className="txt" required placeholder="Email address"/>
                <input type="password" name="password" className="txt mb-4" required placeholder="Password"/>
                <p>By logging in, you agree to Privacy Policy and Terms of Use</p>
                <button type="submit" className="btn btn-primary">SIGN IN</button>
            </form>
        </div>
    )
}

export default withRouter(SignIn)
