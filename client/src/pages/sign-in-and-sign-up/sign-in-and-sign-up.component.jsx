import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

function SignInAndSignUp({ history }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <SignIn history={history}/>
                </div>
                <div className="col-md-6">
                    <SignUp history={history}/>
                </div>
            </div>
        </div>
    )
}

export default SignInAndSignUp
