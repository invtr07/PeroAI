import React from 'react'
import Backdrop from './Backdrop'
import BurgerBtn from './BurgerBtn'
import SideDrawer from './SideDrawer'
import classes from './Toolbar.module.css'

export default function Toolbar(props) {
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const drawerToggleHandler = () =>{
      setdrawerOpen(true)
  }

  const backdropClickHandler = ()=>{
    setdrawerOpen(false)
  }

  let backdrop
  let sideDrawer

  if(drawerOpen===true){
    backdrop = <Backdrop click={backdropClickHandler}/>
    sideDrawer= <SideDrawer show={drawerToggleHandler}/>
  }

  return (
    <>
      <nav className={classes.nav}>
          <BurgerBtn click={drawerToggleHandler}/>
          {sideDrawer}
          {backdrop}
      </nav>    
    </>
  )
}
