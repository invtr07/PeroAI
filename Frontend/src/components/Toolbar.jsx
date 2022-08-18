import React from 'react'
import {Link} from 'react-router-dom'
import {Divider} from '@mui/material'
import classes from './Toolbar.module.css'

export default function Toolbar() {
  return (
    <header>
        <nav className={classes.toolbarNav}>
            <div></div>
            <div className={classes.toolbarLogo}>
                Page title
            </div>
            <div className={classes.toolbarLinks}>
              <ul>
                <h3>Режимы</h3>
                <li><Link to="/">Создание текста</Link></li>
                <li><Link to="/">Мозговой штурм</Link></li>
                <li><Link to="/">Помощник писателя</Link></li>

                {/* later adjust location and thickness of the divider below */}
                <Divider style={{backgroundColor:"#6474EA"}}/>
                
                <h3>Другое</h3>
                <li><Link to="/">Сохраненные</Link></li>
                <li><Link to="/">Профиль</Link></li>
              </ul>
            </div>
        </nav>
    </header>
  )
}
