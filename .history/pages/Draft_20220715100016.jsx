import React from 'react'
import { BasicButton } from '../components/atoms/buttons/BasicButton'


const Draft = () => {
  return (
    <div className="Draft">
      <BasicButton title="randomTitle" color="white" type="button" aria="randomTitle" />
      <BasicButton title="randomTitle" color="black" type="button" aria="randomTitle" />
    </div>
  )
}

export default Draft