import React from 'react'

export const NextButton = (props) => {
  return (
    <button onClick={props.onClick} className="button__next" type={props.type} aria-label="Next Button">
        {props.title}
        <div className="button__next--Arrow">
            <h1 className="next__arrow--h1">
                &#62;
            </h1>
        </div>
    </button>
  )
}
