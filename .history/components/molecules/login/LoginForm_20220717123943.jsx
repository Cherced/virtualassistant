import React from 'react'
import Link from 'next/link'
import { BasicInput } from '../../atoms/inputs/BasicInput'
import { BasicButton } from '../../atoms/buttons/BasicButton'

export const LoginForm = () => {
    const sendUserAuth = () => {
        console.log("SEEEENDEED")
    }
  return (
    <form className="loginForm" onSubmit={()=> sendUserAuth()}>
        <h1 className="loginForm__title--h1" tabIndex="0" >Login</h1>
        <div className="loginForm__inputs--container">
        <BasicInput type="text" placeholder="User Name" id="user" name="user" /> 
        <BasicInput type="password" placeholder="Password" id="passWord" name="passWord" /> 
        </div>
        <Link href="#">
        <a className="loginForm__ancord">Forgot Password?</a>
        </Link>
        <BasicButton color="black" type="submit" title="Login"/>
        <div className="loginForm__info">
        <label className="loginForm__label">Dont Have an account? 
        <Link href="#">
          <a     className="loginForm__ancord label">Register</a>  
        </Link>
        </label>
        </div>
          <div className="loginForm__separator">
          <hr className="loginForm__line"/>
          <label  className="loginForm__label--or" >or</label>
          <hr className="loginForm__line"/>
        </div>
        <BasicButton color="white" type="button" title="Guest Login"/>
    </form>
  )
}
