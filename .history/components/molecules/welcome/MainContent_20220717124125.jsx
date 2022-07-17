import React from 'react'
import { Instructions } from '../../atoms/Carrousels/Instructions'

export const MainContent = () => {
  return (
    <main className="main__Content--welcome" aria-label="main content">
      <h1 className="main__Content--title" tabIndex="0">This is Zeta</h1>
        <Instructions/>
    </main>
  )
}
