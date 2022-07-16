import React from 'react'
import { BasicInput } from '../../atoms/inputs/BasicInput'

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
        <label><input type="checkbox"/>I Accept the policy and terms</label>
    </div>
  )
}
