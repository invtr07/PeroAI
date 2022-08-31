import React from 'react'
import { TextareaAutosize, TextField } from '@mui/material'
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function GeneratorInputs(props) {
  const [category, setCategory] = React.useState('');
  const [output, setOutput] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const getOutputText =()=>{
    output ? setOutput(false) : setOutput(true)
}

  const OpenConfirm = () => {
  };

  const CloseConfirm = () => {
    setConfirm(false);
  };

  let outputTextArea 
  let saveButton
  let outputSize
  let screenWidth = window.innerWidth  //for if else chain below
  let confirmForm

  // sizing parameters instead of media queries
  if(screenWidth <= 480){
    outputSize = {
      height: "290px"
    }
  }
  else if(screenWidth <= 767 && screenWidth > 480){
    outputSize = {
      height: "400px"
    }
  }
  else{
    outputSize = {
      height: "300px"
    }
  }

  if(output===true){
    outputTextArea = <>
      <h3 style={{color:"#4B79F8", marginBottom:"0px"}}>Результат</h3>
      <TextareaAutosize 
      aria-label="minimum height"
      minRows={3}
      placeholder=""
      style={outputSize}>

        {/* here will go GPT-3 output */}

      </TextareaAutosize>
    </>
    saveButton=<Button style={{
      backgroundColor: "#E2EBF5",
      color:"#3871B7"
      }} variant="filled" onClick={OpenConfirm}>Сохранить</Button>
  }

  if(confirm){
    confirmForm = <Dialog open={confirm} onClose={CloseConfirm}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Назовите файл"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={CloseConfirm}>Отменить</Button>
            <Button>Добавить</Button>
          </DialogActions>
        </Dialog>
  }


  return (
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
      {outputTextArea}
      {saveButton}
      {confirmForm}
      
      <Button onClick={getOutputText} style={{backgroundColor: "#4B79F8"}} variant="contained">
        {output ? "Повторная генерация" : "Сгенерировать"}
      </Button>
    </form>
  )
}
