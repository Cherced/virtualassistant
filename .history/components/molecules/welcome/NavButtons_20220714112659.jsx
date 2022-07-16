import React from 'react'
import Link from 'next/link'
import { NextButton } from '../../atoms/buttons/NextButton'

export const NavButtons = () => {
  return (
    <footer className="NavButtons">
      {  <Link href="#">
        <a>Skip</a>
        </Link>}
        <NextButton type="button" title="Next"/>
    </footer>
  )
}
