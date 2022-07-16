import React, {useEffect} from 'react'
import { HeaderWelcome } from '../components/molecules/welcome/HeaderWelcome'
import { MainContent } from '../components/molecules/welcome/MainContent'
import { NavButtons } from '../components/molecules/welcome/NavButtons'

const Welcome = () => {
  useEffect(()=>{
    window.onload = () => {
      document.querySelector(".arrow-right").addEventListener("click", clickRight);
      document.querySelector(".arrow-left").addEventListener("click", clickLeft);
      document
        .querySelector(".send-button")
        .addEventListener("click", e => validateForm(e));
      document.querySelectorAll(".project").forEach(element => {
        element.addEventListener("click", e => openModal(e));
      });
      document.body.addEventListener("click", e => closeModal(e));
      document.body.addEventListener("keyup", e => listenForEsc(e));
    }
    }, [])

  return (
    <div className="welcome">
        <HeaderWelcome/>
        <MainContent/>
        <NavButtons/>
    </div>
  )
}

export default Welcome