import React from 'react'

export const DasHeader = () => {
  return (
    <header className="dasHeader">
    <img className="dasHeader__img" src="/img/welcomeimg.png" alt="ZetaLogo"/>
    <button className="dasHeader__button" >
        onLine
    </button>
    <div className="dasHeader__user--container">
        <img className="dasHeader__user--img"/>
        <h1 className="dasHeader__user--h1">
            Ricsys
        </h1>
    </div>
    </header>
  )
}
