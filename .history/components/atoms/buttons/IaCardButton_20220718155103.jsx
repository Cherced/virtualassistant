import React from 'react'

export const IaCardButton = (props) => {
  return (
    <button className="IaCardButton">
        <ul>
            <li tabIndex="0">
            <img src="/img/head.png" alt={props.name} />
            </li>
            <li tabIndex="0">
            <h1>
                {props.name}
            </h1>
            </li>
            <li tabIndex="0">
                <h2>
                {props.speciality}
                </h2>
            </li>
        </ul>
    </button>
  )
}
