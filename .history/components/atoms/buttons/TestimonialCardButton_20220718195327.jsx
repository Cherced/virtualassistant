import React from 'react'

export const TestimonialCardButton = (props) => {
  return (
    <button className="testimonialCardButton">
        <ul className="iaCardButton__list">
            <li tabIndex="0" className="iaCardButton__list--img">
            <img src="/img/head.png" alt={`image of ${props.name}`} />
            </li>
            <li tabIndex="0" className="iaCardButton__list--title">
            <h1>
                {props.name}
            </h1>
            </li>
            <li tabIndex="0" className="iaCardButton__list--description">
                <h2>
                {props.speciality}
                </h2>
            </li>
        </ul>
    </button>
  )
}
