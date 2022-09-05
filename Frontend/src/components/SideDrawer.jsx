import React from 'react'
import {NavLink} from 'react-router-dom'
import './SideDrawer.css'
import { Divider} from '@mui/material/'


export default function SideDrawer(props) {

  const activeLinkStyle = ({isActive})=>({
      color: isActive ? "#4B79F8" : "#000000",
      fontSize: "1.3rem",
      textDecoration: "none",
    })
  
    let drawerClass= 'side-drawer';
 
      if(props.show===true){
        drawerClass= 'side-drawer open'
      }
    
  return(
    <>
          <nav className={drawerClass}>
              <div className="items">
                <ul>
                  <h2>Режимы</h2>
                  {/* <img src='../assets/Vector.png'/> */}
                  <li><NavLink style={activeLinkStyle} to="/">Создание текста</NavLink></li>
                  <li><NavLink style={activeLinkStyle} to="/brainstorm">Мозговой штурм</NavLink></li>
                  {/* <li><NavLink style={activeLinkStyle} to="/writinghelper">Помощник писателя</NavLink></li> */}

                {/* Думаю помощник писателя это НЕ нужная фича потому что есть Граммарли и плюс это не тот рынок который нам доступен в плане бюджета (тяжело будет сделать в плане оплаты за gpt-3) */}

                  {/* later adjust location and thickness of the divider below */}
                  <Divider style={{width:"100%",marginTop:"10%", marginBottom: "10%", backgroundColor:"#6474EA"}}/>
                  
                  <h2>Другое</h2>

                 <li><NavLink style={activeLinkStyle} to="/saving">Сохраненные</NavLink></li>
                  <li><NavLink style={activeLinkStyle} to="/profile">Профиль</NavLink></li>
                  
                </ul>
              </div>
          </nav>
    </>
  );
}


