import React from 'react'
import {DasHeader} from '../components/molecules/dashBoard/DasHeader'
import { DashMain } from '../components/molecules/dashBoard/DashMain'
import { DashFooter } from '../components/molecules/dashBoard/DashFooter'

const Start = () => {
  return (
    <div className="dashboard">
      <DasHeader/>
      <DashMain/>
      <DashFooter/>
    </div>
  )
}

export default Start