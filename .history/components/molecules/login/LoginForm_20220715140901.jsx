import React from 'react'
import { BasicInput } from '../../atoms/inputs/BasicInput'
import { BasicButton } from '../../atoms/buttons/BasicButton'

export const LoginForm = () => {
    const sendUserAuth = () => {
        console.log("SEEEENDEED")
    }
  return (
    <form className="loginForm" onSubmit={()=> sendUserAuth()}>
        <div className="loginForm__inputs--container">
        <BasicInput type="text" placeholder="User Name" id="user" name="user" /> 
        <BasicInput type="password" placeholder="Password" id="passWord" name="passWord" /> 
        </div>
        <BasicButton color="black" type="submit" title="Login"/>
    </form>
  )
}
