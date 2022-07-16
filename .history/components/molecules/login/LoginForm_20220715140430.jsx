import React from 'react'

export const LoginForm = () => {
    const sendUserAuth = () => {
        console.log("SEEEENDEED")
    }
  return (
    <form className="loginForm" onSubmit={()=> sendUserAuth()}></form>
  )
}
