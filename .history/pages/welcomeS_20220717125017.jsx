import React from 'react'
import { useRouter } from 'next/router'
import {BasicButton} from '../components/atoms/buttons/BasicButton'

const WelcomeS = () => {
  const router = useRouter()
  return (
    <div className="welcomeS">
      <header className="welcomeS__header"  >
        <img tabIndex="0" className="welcomeS__header--img" src="/img/robotWs.png" alt="Robot"/>
      </header>
      <main className="welcomeS__main">
        <h1 className="welcomeS__main--title" tabIndex="0">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        </h1>
      </main>
      <footer className="welcomeS__footer">
          <BasicButton onClick={() => router.push('login')} type="button" color="white" title="Welcome" />
      </footer>
    </div>
  )
}

export default WelcomeS