import React from 'react'
import { BasicInput } from '../../atoms/inputs/BasicInput'

export const SignForm = () => {
  return (
    <div className="signForm">
        <BasicInput type="text" placeholder="Name"/>
        <BasicInput type="text" placeholder="Email"/>
        <BasicInput type="text" placeholder="Mobile Number"/>
        <BasicInput type="password" placeholder="Password"/>
        <BasicInput type="password" placeholder="Confirm Password"/>
    </div>
  )
}
