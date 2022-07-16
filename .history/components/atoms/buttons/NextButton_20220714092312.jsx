import React from 'react'

export const NextButton = () => {
  return (
    <button onClick={props.onClick} className="button__next" type={props.type} >
        {props.title}
        <div className="button__next--Arrow">
            <h1 className="next__arrow--h1">
                &#62;
            </h1>
        </div>
    </button>
  )
}
