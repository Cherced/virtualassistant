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
                <ul className="dashMain__specialist--list">
                   <li className="dashMain__specialist--item"><OptionButton title="Health" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="goverment" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="AgroTech" /></li>
                   <li className="dashMain__specialist--item"><OptionButton title="Finantial" /></li>
                </ul>
            </div>
        </section>
        <section className="dashMain__section">
            <div className="dashMain__section--ia">
                <h1 className="dashMain__ia--title">Select Your I.A</h1>
                <ul className="dashMain__ia--list">
                <li className="dashMain__ia--item"><IaCardButton/></li>
                <li className="dashMain__ia--item"><IaCardButton/></li>
                <li className="dashMain__ia--item"><IaCardButton/></li>
                <li className="dashMain__ia--item"><IaCardButton/></li>
                </ul>
            </div>
        </section>
        <section className="dashMain__section">
            <div className="dashMain__section--testimonials">
                <h1 className="dashMain__testimonials--title">Testimonials</h1>
                <ul className="dashMain__testimonials--list">
                   <li className="dashMain__testimonials--item"><TestimonialCardButton/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton/></li>
                   <li className="dashMain__testimonials--item"><TestimonialCardButton/></li>
                </ul>
            </div>
        </section>
    </main>
  )
}
