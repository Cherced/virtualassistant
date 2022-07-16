import React from 'react'

export const BasicInput = (props) => {
  return (
    <input className="basicInput" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
  )
}
