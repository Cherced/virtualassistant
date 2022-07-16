import React from 'react'
import { HeaderWelcome } from '../components/molecules/welcome/HeaderWelcome'
import { MainContent } from '../components/molecules/welcome/MainContent'
import { NavButtons } from '../components/molecules/welcome/NavButtons'

const Welcome = () => {
  return (
    <div className="welcome">
        <HeaderWelcome/>
        <MainContent/>
        <NavButtons/>
    </div>
  )
}

export default Welcome