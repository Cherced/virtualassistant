import React from 'react'
import {BasicButton} from '../components/atoms/buttons/BasicButton'

const WelcomeS = () => {
  return (
    <div className="WelcomeS">
      <header className="WelcomeS__header">
        <img className="WelcomeS__header--img" src="/img/robotWs.png" alt=""/>
      </header>
      <main className="WelcomeS__main">
        <h1 className="WelcomeS__main--title">
          lorem
        </h1>
      </main>
      <footer className="WelcomeS__footer">
          <BasicButton type="button" color="black" title="Welcome" aria="Welcome Button" />
      </footer>
    </div>
  )
}

export default WelcomeS