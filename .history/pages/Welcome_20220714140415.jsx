import React from 'react'
import { HeaderWelcome } from '../components/molecules/welcome/HeaderWelcome'
import { MainContent } from '../components/molecules/welcome/MainContent'
import { NavButtons } from '../components/molecules/welcome/NavButtons'

const Welcome = () => {
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
};
  return (
    <div className="welcome">
        <HeaderWelcome/>
        <section className="carrousel" aria-label="carrousel" >
        <ul className="carrousel__list" id="slider">
            <li className="carrousel__list--item">
                <h1 className="carrousel__item--title">
                Welcome!
                </h1>
                <p className="carrousel__item--parragraph">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                </p>
            </li>
            <li className="carrousel__list--item" area-hidden="true">
                <h1 className="carrousel__item--title">
                you can also improve
                </h1>
                <p className="carrousel__item--parragraph">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum 
                </p>
            </li>
        </ul>
    </section>
        <NavButtons/>
    </div>
  )
}

export default Welcome