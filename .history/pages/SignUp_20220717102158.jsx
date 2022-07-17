import React from 'react'
import { SignForm } from '../components/molecules/signUp/SignForm'

const SignUp = () => {
  return (
    <div className="signUp">
      <div>
        <h1>Sign Up</h1>
        <p>Create an account with Zeta</p>
      </div>
        <SignForm/>
        <label>Already have an account <a>Sign in</a></label>
    </div>
  )
}

export default SignUp