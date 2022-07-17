import React from 'react'
import { BasicInput } from '../../atoms/inputs/BasicInput'
import { BasicButton } from '../../atoms/buttons/BasicButton'

export const SignForm = () => {
  return (
    <section className="signForm" tabIndex="2" >
        <div className="signForm__inputs--container" tabIndex="1">
        <BasicInput type="text" placeholder="Name"/>
        <BasicInput type="text" placeholder="Email"/>
        <BasicInput type="text" placeholder="Mobile Number"/>
        <BasicInput type="password" placeholder="Password"/>
        <BasicInput type="password" placeholder="Confirm Password"/>
        </div>
        <div className="signForm__checkbox--container" tabIndex="2">
        <label className="signForm__checkbox--label"><input type="checkbox"/> I Accept the policy and terms.</label>
        </div>
        <BasicButton type="button" color="black" title="Sign Up"/>
        <section tabIndex="2" className="signForm__socialMedia--container">
            <h1 tabIndex="1" className="signForm__socialMedia--title">
                Or Sign Up With 
            </h1>
            <ul tabIndex="2" className="signForm__socialMedia--imgs">
                <li tabIndex="1"><img className="signForm__socialMedia--img" src="/img/facebook.png" alt="facebook" /></li>
                <li tabIndex="2"><img className="signForm__socialMedia--img" src="/img/apple.png" alt="apple" /></li>
                <li tabIndex="3"><img className="signForm__socialMedia--img" src="/img/google.png" alt="google" /></li>
            </ul>
        </section>     
    </section>
  )
}
