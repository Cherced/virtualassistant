import React from 'react'

export const DasHeader = () => {
  return (
    <header className="dashFooter">
    <img className="dashFooter__img" src="/img/welcomeimg.png" alt="ZetaLogo"/>
    <button className="dashFooter__button" >
        onLine
    </button>
    <div className="dashFooter__user--container">
        <img className="dashFooter__user--img"/>
        <h1 className="dashFooter__user--h1">
            {props.name}
        </h1>
    </div>
    </header>
  )
}
