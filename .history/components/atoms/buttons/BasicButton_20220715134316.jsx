import React from 'react'

export const BasicButton = (props) => {
  return (
    <button onClick={props.onClick} className={`basic__button ${props.color}`} type={props.type} aria-label={props.aria}>
      {props.title}
    </button>
  )
}
