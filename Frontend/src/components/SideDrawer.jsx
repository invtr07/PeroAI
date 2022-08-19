import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './SideDrawer.module.css'
import { Divider} from '@mui/material/'


export default function SideDrawer(props) {

  //style of NavLink when it is opened
  const activeLinkStyle = ({isActive})=>({
      color: isActive ? "#4B79F8" : "#000000",
      fontSize: "1.3rem",
      textDecoration: "none",
    })
  
    let drawerClass= 'side-drawer';

    if(props.show){
      drawerClass= 'side-drawer open'
    }

  return(
    <>
          <nav className={classes.sideDrawer}>
              <div className={classes.items}>
                <ul>
                  <h2>Режимы</h2>

                  <li><NavLink style={activeLinkStyle} to="/generator">Создание текста</NavLink></li>

                  <li><NavLink style={activeLinkStyle} to="/brainstorm">Мозговой штурм</NavLink></li>

                  <li><NavLink style={activeLinkStyle} to="/writinghelper">Помощник писателя</NavLink></li>

                  {/* later adjust location and thickness of the divider below */}
                  <Divider style={{margin: "10%",backgroundColor:"#6474EA"}}/>
                  
                  <h2>Другое</h2>

                  <li><NavLink style={activeLinkStyle} to="/saving">Сохраненные</NavLink></li>
                  
                  <li><NavLink style={activeLinkStyle} to="/profile">Профиль</NavLink></li>
                  
                </ul>
              </div>
          </nav>
    </>
  );
}


