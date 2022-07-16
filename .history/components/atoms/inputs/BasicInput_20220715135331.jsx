import React from 'react'

export const BasicInput = (props) => {
  return (
    <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
  )
}
