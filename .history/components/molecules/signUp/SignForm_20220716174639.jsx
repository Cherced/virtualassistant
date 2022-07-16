import React from 'react'
import { BasicInput } from '../../atoms/inputs/BasicInput'
import { BasicButton } from '../../atoms/buttons/BasicButton'

export const SignForm = () => {
  return (
    <div className="signForm">
        <div className="signForm__inputs--container">
        <BasicInput type="text" placeholder="Name"/>
        <BasicInput type="text" placeholder="Email"/>
        <BasicInput type="text" placeholder="Mobile Number"/>
        <BasicInput type="password" placeholder="Password"/>
        <BasicInput type="password" placeholder="Confirm Password"/>
        </div>
        <div className="signForm__checkbox--container">
        <label className="signForm__checkbox--label"><input type="checkbox"/>    I Accept the policy and terms.</label>
        </div>
        <BasicButton type="button" color="black" title="Sign Up"/>
        <div className="signForm__socialMedia--container">
            <h1 className="signForm__socialMedia--title">
                Or Sign Up With 
            </h1>
            <div className="signForm__socialMedia--imgs">
                <img className="signForm__socialMedia--img" src="/img/facebook.png" alt="facebook" />
                <img className="signForm__socialMedia--img" src="/img/apple.png" alt="apple" />
                <img className="signForm__socialMedia--img" src="/img/google.png" alt="google" />
            </div>
        </div>     
    </div>
  )
}
