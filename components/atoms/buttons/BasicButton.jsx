import React from 'react'

export const BasicButton = (props) => {
  return (
    <button onSubmit={props.onSubmit} onClick={props.onClick} className={`basic__button ${props.color}`} type={props.type} aria-label={props.aria}>
      {props.title}
    </button>
  )
}
