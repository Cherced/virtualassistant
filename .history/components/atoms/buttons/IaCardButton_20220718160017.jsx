import React from 'react'

export const IaCardButton = (props) => {
  return (
    <button className="IaCardButton">
        <ul className="IaCardButton__list">
            <li tabIndex="0" className="IaCardButton__list">
            <img src="/img/head.png" alt={`image of ${props.name}`} />
            </li>
            <li tabIndex="0" className="IaCardButton__list--title">
            <h1>
                {props.name}
            </h1>
            </li>
            <li tabIndex="0" className="IaCardButton__list--description">
                <h2>
                {props.speciality}
                </h2>
            </li>
        </ul>
    </button>
  )
}
