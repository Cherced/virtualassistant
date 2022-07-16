import React from 'react'
import { BasicInput } from '../components/atoms/inputs/BasicInput'



const Draft = () => {
  return (
    <div className="Draft">
      <BasicInput type="text" placeholder="User Name" id="user" name="user" /> 
    </div>
  )
}

export default Draft