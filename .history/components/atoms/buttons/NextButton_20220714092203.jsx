import React from 'react'

export const NextButton = () => {
  return (
    <button className="button__next" type={props.type} >
        {props.title}
        <div className="button__next--Arrow">
            <h1 className="next__arrow--h1">
                >
            </h1>
        </div>
    </button>
  )
}
