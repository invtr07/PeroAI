import React from 'react'
import classes from './BurgerBtn.module.css'

export default function BurgerBtn(props) {
  return (
     <button className={classes.brg} onClick={props.click}>
          <div className={classes.brgLine}></div>
          <div className={classes.brgLine}></div>
          <div className={classes.brgLine}></div>
     </button>
  )
}
