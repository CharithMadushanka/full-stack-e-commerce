import React, { useContext } from 'react'
import { withRouter } from "react-router-dom"
import app from "../../firebase/firebase";
import "../sign-in/sign-in.styles.css";

function SignUp({history}) {

    const handleSignUp = async e => {
      e.preventDefault()
      const { email, password } = e.target.elements
      app.auth().createUserWithEmailAndPassword(email.value, password.value).then((u)=>{
        var frm = document.getElementsByName('signup')[0];
        frm.reset();
        history.push('/')
      }).then((u)=>{console.log(u)})
      .catch((error) => {
          alert(error.message);
        })
    }

    return (
        <div>
            <h5 className="mb-3">Sign Up</h5>
            <form name="signup" onSubmit={handleSignUp}>
                <input type="text" name="firstName" className="txt" required placeholder="First Name"/>
                <input type="text" name="lastName" className="txt" required placeholder="Last Name"/>
                <input type="text" name="email" className="txt" required placeholder="Email address"/>
                <input type="password" name="password" className="txt" required placeholder="Password"/>
                <input type="password" className="txt mb-4" required placeholder="Retype-Password"/>
                <p>By creating an account, you agree to Privacy Policy and Terms <br/>of Use</p>
                <button type="submit" className="btn btn-dark">SIGN UP</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);
