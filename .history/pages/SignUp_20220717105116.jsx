import React from 'react'
import Link from 'next/link'
import { SignForm } from '../components/molecules/signUp/SignForm'

const SignUp = () => {
  return (
    <div className="signUp">
      <ul className="signUp__title--container">
        <li className="signUp__title--h1">Sign Up</li>
        <li className="signUp__title--parragraph">Create an account with Zeta</li>
      </ul>
        <SignForm/>
        <label className="signUp__container--label">Already have an account  
        <Link href="#">
        <a className="signUp__container--ancord">  Sign in</a>
        </Link>      
        </label>
    </div>
  )
}

export default SignUp