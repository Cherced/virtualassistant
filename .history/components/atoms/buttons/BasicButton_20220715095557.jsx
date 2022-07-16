import React from 'react'

export const BasicButton = (props) => {
  return (
    <button className={`basic__button--${props.color}`} type={props.type} aria-label={props.aria}>

    </button>
  )
}
