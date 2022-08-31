import { Button, TextField } from '@mui/material'
import React from 'react'
import Output from './Output'

export default function Input() {

     const[output, setOutput]=React.useState(false)

     const handleOutput=()=>{
          output ? setOutput(false) : setOutput(true)
     }
     
  return (
    <form>
          <TextField style={{height:"fit-content"}} variant='outlined' label="Ключевые слова"/>
          <Output show={output}/>
          <Button onClick={handleOutput} style={{backgroundColor: "#4B79F8"}} variant="contained">{output ? "Повторная генерация" : "Сгенерировать" }</Button> 
    </form>
  )
}


