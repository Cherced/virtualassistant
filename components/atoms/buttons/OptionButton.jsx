import React from 'react'

export const OptionButton = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} onSubmit={props.onSubmit} id={props.id} className="optionButton">
        {props.title}
    </button>
  )
}
