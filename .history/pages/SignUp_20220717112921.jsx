import React from 'react'
import Link from 'next/link'
import { SignForm } from '../components/molecules/signUp/SignForm'

const SignUp = () => {
  return (
    <div className="signUp">
      <section className="signUp__title--container" >
        <h1 className="signUp__title--h1" tabIndex="0">Sign Up</h1>
        <p className="signUp__title--parragraph" tabIndex="1">Create an account with Zeta</p>
      </section>
        <SignForm/>
        <label className="signUp__container--label" tabIndex="3">Already have an account 
        <Link href="#">
        <a className="signUp__container--ancord">  Sign in</a>
        </Link>      
        </label>
    </div>
  )
}

export default SignUp