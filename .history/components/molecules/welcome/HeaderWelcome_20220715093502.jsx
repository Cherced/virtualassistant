import React from 'react'

export const HeaderWelcome = () => {
  return (
    <header className="brand" aria-label="Brand Logo">
    <img className="brand__img" src="/img/welcomeImg.png" alt="brand logo"/>
    <div className="brand__container--ellipse">
      <img src="/img/Ellipse.png" alt="Ellipse"/>
    </div>
    </header>
  )
}
