import React from 'react'
import './BurgerBtn.css'

export default function BurgerBtn(props) {
  return (
     <button className="brg" onClick={props.click}>
          <div className="brgLine"></div>
          <div className="brgLine"></div>
          <div className="brgLine"></div>
     </button>
  )
}
