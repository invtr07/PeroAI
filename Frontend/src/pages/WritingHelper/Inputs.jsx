import React from 'react'
//mui
import { TextareaAutosize, TextField } from '@mui/material'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Output from './Output';

export default function Inputs() {
     const [category, setCategory] = React.useState('');
     const [textbox, setTextbox] =React.useState(false);

     //function that changes the value of Select in inputs
     const handleChange = (event) => {
          setCategory(event.target.value);
     };

     //calls Textbox component
     const handleTextbox =()=>{
          setTextbox(true)
     }
  return (
    <>
     <form>
          <TextField id="outlined-basic" label="Заголовок" variant="outlined" />
          <TextField id="outlined-basic" label="Ключевые слова" variant="outlined" />
          <TextField id="outlined-basic" label="Описание аудитории" variant="outlined" />

          <FormControl >
          <InputLabel id="demo-simple-select-label">Вид текста</InputLabel>
          <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={category}
               label="Категория"
               onChange={handleChange}
          >
               <MenuItem value={"Продающий"}>Продающий</MenuItem>
               <MenuItem value={"Информационный"}>Информационный</MenuItem>
               <MenuItem value={"Развлекательный"}>Развлекательный</MenuItem>
          </Select>
          </FormControl>
          
          <Output show={textbox}/>

          <Button onClick={handleTextbox} variant='contained' style={{backgroundColor:"#4B79F8"}}>{textbox ? "Повторная активация" : "Активировать"}</Button>
     </form>
    </>
  )
}
