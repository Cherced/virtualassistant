import React from 'react'
import Link from 'next/link'
import { SignForm } from '../components/molecules/signUp/SignForm'

const SignUp = () => {
  return (
    <div className="signUp">
      <section className="signUp__title--container" tabIndex="0">
        <h1 className="signUp__title--h1" >Sign Up</h1>
        <h2 className="signUp__title--parragraph" >Create an account with Zeta</h2>
      </section>
        <SignForm/>
        <label className="signUp__container--label" tabIndex="0">Already have an account 
        <Link href="login">
        <a className="signUp__container--ancord">  Sign in</a>
        </Link>      
        </label>
    </div>
  )
}

export default SignUp