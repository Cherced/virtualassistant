import React from 'react'

export const Instructions = () => {
  return (
    <section className="carrousel" aria-label="carrousel" id="slider">
      <div>
      <ul className="carrousel__list">
            <li className="carrousel__list--item">
                <h1 className="carrousel__item--title">
                Welcome!
                </h1>
            </li>
            <li className="carrousel__list--item">
                <p className="carrousel__item--parragraph">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                </p>
            </li>
        </ul>
        <ul className="carrousel__list">
            <li className="carrousel__list--item" area-hidden="true">
                <h1 className="carrousel__item--title">
                you can also improve  
                </h1>
              </li> 
            <li className="carrousel__list--item">
                <p className="carrousel__item--parragraph">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum 
                </p> 
            </li>
        </ul>
      </div>
        
        
    </section>
  )
}
