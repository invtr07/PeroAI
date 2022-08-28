import React from 'react'
import Toolbar from '../../components/Toolbar'
import SavedCard from './SavedCard'

export default function SavingsPage(props) {
  return (
     <>
          <Toolbar><h2>Сохраненные</h2></Toolbar>
          <SavedCard/>
     </>
  )
}
