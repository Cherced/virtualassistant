import React from 'react'
import { OptionButton } from '../../atoms/buttons/OptionButton'
import { IaCardButton } from '../../atoms/buttons/IaCardButton'
import {TestimonialCardButton} from '../../atoms/buttons/TestimonialCardButton'


export const DashMain = () => {
  return (
    <main className="dashMain">
        <div  className="dashMain__banner">
            <h1  className="dashMain__title">Book an Appointment With SafeHealth</h1>
        </div>
        <section className="dashMain__section">
                <h1 className="dashMain__specialist--title">Topic</h1>
                <nav className="dashMain__specialist--nav">
                <ul className="dashMain__specialist--list">
                   <li className="dashMain__specialist--item"><OptionButton title="Health" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="Goverment" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="AgroTech" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="Finantial" /></li>
                </ul>
                </nav>
        </section>
        <section className="dashMain__section">
                <h1 className="dashMain__ia--title">Select Your I.A</h1>
                <nav className="dashMain__ia--nav">
                <ul className="dashMain__ia--list">
                <li className="dashMain__ia--item"><IaCardButton name="Zeta" specialist="MultiTask" description="Ia Profession"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Cortana" specialist="Algoritmial" description="Ia Profession"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Gero" specialist="Tracker" description="Ia Profession"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Ovi" specialist="Master" description="Ia Profession"/></li>
                </ul>
                </nav>                
        </section>
        <section className="dashMain__section">
                <h1 className="dashMain__testimonials--title">Testimonials</h1>
                <nav className="dashMain__testimonials--nav">
                <ul className="dashMain__testimonials--list">
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="lorem" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="impsu" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="evo" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="kathclen" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                </ul>
                </nav>
        </section>
    </main>
  )
}
