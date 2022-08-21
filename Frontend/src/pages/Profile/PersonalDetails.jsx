import { Button, TextField } from '@mui/material'
import React from 'react'
import './Personal.css'

export default function PersonalDetails() {

     const style={
          background: "linearGradient(45deg, #fe6b8b 30%, #ff8e53 90%)"
     }
  return (
     <div className='profile'>
          <div className='personal-details'>
               <TextField id="outlined-basic" defaultValue={"Name"} variant="outlined" />
               <TextField id="outlined-basic" defaultValue={"Email"} variant="outlined" />
               <TextField id="outlined-basic" defaultValue={"Name"} type="password" variant="outlined" />
               <Button variant="contained">Сохранить изменения</Button>
          </div>
          
          <div className='premium'>     
          <h3 style={{color:"#4B79F8"}}>Версия Pero: Beginner</h3>
          <Button variant="contained" 
          style={{
               background:'linear-gradient(to right, #4B79F8, #D15EAF)'
               }}>Получить Pero Plus</Button>
          </div>
     </div>
  )
}
