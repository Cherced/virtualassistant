import React, {useEffect} from 'react'
import Meta from '../components/meta/Meta'
import { HeaderWelcome } from '../components/molecules/welcome/HeaderWelcome'
import { MainContent } from '../components/molecules/welcome/MainContent'
import { NavButtons } from '../components/molecules/welcome/NavButtons'

const Welcome = () => {
  function listener() {
    document.body.addEventListener("click", (e) => {
       console.log(e.target.tagName)
     })
   }
 
  return (
    <div className="welcome">
      <Meta title="welcome! to Zeta"/>
        <HeaderWelcome/>
        <MainContent/>
        <NavButtons/>
    </div>
  )
}

export default Welcome