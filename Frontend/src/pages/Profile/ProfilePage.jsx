import React from 'react'
import Toolbar from '../../components/Toolbar'
import PersonalDetails from './PersonalDetails'

export default function ProfilePage(props) {
  return (
     <>
      <Toolbar><h2>Профиль</h2></Toolbar>
      <PersonalDetails/>
     </>
  )
}
