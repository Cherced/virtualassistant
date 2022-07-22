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
            <div className="dashMain__section--specialist">
                <h1 className="dashMain__specialist--title">Topic</h1>
                <nav className="dashMain__specialist--nav">
                <ul className="dashMain__specialist--list">
                   <li className="dashMain__specialist--item"><OptionButton title="Health" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="Goverment" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="AgroTech" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="Finantial" /></li>
                </ul>
                </nav>
            </div>
        </section>
        <section className="dashMain__section">
            <div className="dashMain__section--ia">
                <h1 className="dashMain__ia--title">Select Your I.A</h1>
                <ul className="dashMain__ia--list">
                <li className="dashMain__ia--item"><IaCardButton name="Zeta" specialist="MultiTask" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Cortana" specialist="Algoritmial" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Gero" specialist="Tracker" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                <li className="dashMain__ia--item"><IaCardButton name="Ovi" specialist="Master" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                </ul>
            </div>
        </section>
        <section className="dashMain__section">
            <div className="dashMain__section--testimonials">
                <h1 className="dashMain__testimonials--title">Testimonials</h1>
                <ul className="dashMain__testimonials--list">
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="lorem" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="impsu" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="evo" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton name="kathclen" speciality="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"/></li>
                </ul>
            </div>
        </section>
    </main>
  )
}
