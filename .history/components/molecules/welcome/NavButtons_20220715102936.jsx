import React from 'react'
import Link from 'next/link'
import { NextButton } from '../../atoms/buttons/NextButton'

export const NavButtons = (props) => {
  return (
    <footer className="NavButtons">
      {  <Link href="#">
        <a className="NavButtons__ancord">Skip</a>
        </Link>}
        <NextButton type="button" title="Next" redirect={props.redirect}/>
    </footer>
  )
}
