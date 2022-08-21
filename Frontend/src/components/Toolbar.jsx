import React from 'react'
import Backdrop from './Backdrop'
import BurgerBtn from './BurgerBtn'
import SideDrawer from './SideDrawer'
import './Toolbar.css'

export default function Toolbar(props) {
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const drawerToggleHandler = () =>{
      setdrawerOpen(true)
  }

  const backdropClickHandler = ()=>{
    setdrawerOpen(false)
  }

  let backdrop

  if(drawerOpen===true){
    backdrop = <Backdrop click={backdropClickHandler}/>
  }

  return (
    <>
      <nav className="nav">
        <div className='nav-stroke'>
          <div className='nav-action'>
            <BurgerBtn click={drawerToggleHandler}/>
              {props.children} 
              <div></div>
          </div>
          <div className='stroke'>
          </div>
        </div>
        
          <SideDrawer show={drawerOpen}/>
          {backdrop}
      </nav>    
    </>
  )
}
