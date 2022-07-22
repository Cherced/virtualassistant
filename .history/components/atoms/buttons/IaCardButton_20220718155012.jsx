import React from 'react'

export const IaCardButton = (props) => {
  return (
    <button className="IaCardButton">
        <ul>
            <li>
            <img src="/img/head.png" alt={props.name} />
            </li>
            <li>
            <h1>
                {props.name}
            </h1>
            </li>
            <li>
                <h2>
                {props.speciality}
                </h2>
            </li>
        </ul>
    </button>
  )
}
