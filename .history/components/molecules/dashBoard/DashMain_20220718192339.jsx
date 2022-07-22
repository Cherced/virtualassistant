import React from 'react'
import { IaCardButton } from '../../atoms/buttons/IaCardButton'


export const DashMain = () => {
  return (
    <main className="dashMain">
        <div  className="dashMain__banner">
            <h1  className="dashMain__title">Book an Appointment With SafeHealth</h1>
        </div>
        <section className="dashMain__section">
            <div className="dashMain__section--specialist">
                <h1 className="dashMain__specialist--title">Specialist</h1>
                <ul className="dashMain__specialist--list">
                    {
                        example.map(()=> {
                            <li><IaCardButton /></li>
                        })
                    }
                </ul>
            </div>
        </section>
    </main>
  )
}
