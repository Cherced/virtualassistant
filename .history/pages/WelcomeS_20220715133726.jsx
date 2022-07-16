import React from 'react'
import {BasicButton} from '../components/atoms/buttons/BasicButton'

const WelcomeS = () => {
  return (
    <div className="welcomeS">
      <header className="welcomeS__header">
        <img className="welcomeS__header--img" src="/img/robotWs.png" alt="Robot"/>
      </header>
      <main className="welcomeS__main">
        <h1 className="welcomeS__main--title">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        </h1>
      </main>
      <footer className="welcomeS__footer">
          <BasicButton type="button" color="white" title="Welcome" aria="Welcome Button" />
      </footer>
    </div>
  )
}

export default WelcomeS