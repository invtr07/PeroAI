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
import DialogTitle from '@mui/material/DialogTitle';

export default function GeneratorInputs(props) {
  const [category, setCategory] = React.useState('');
  const [output, setOutput] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const getOutputText =()=>{
    setOutput(true)
  }

  const OpenConfirm = () => {
    setConfirm(true);
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
    outputTextArea = <TextareaAutosize 
    aria-label="minimum height"
    minRows={3}
    placeholder="Output from GPT-3"
    style={outputSize}>

      {/* here will go GPT-3 output */}

    </TextareaAutosize>
    saveButton=<Button variant="outlined" onClick={OpenConfirm}>Сохранить</Button>
  }

  if(confirm){
    confirmForm = <Dialog open={confirm} onClose={CloseConfirm}>
          <DialogTitle>Назовите файл</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Имя файла"
              type="email"
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
          <MenuItem value={"selling text"}>Продающий</MenuItem>
          <MenuItem value={"educational or informational text"}>Информационный</MenuItem>
          <MenuItem value={"entertaining text"}>Развлекательный</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={getOutputText} style={{backgroundColor: "#4B79F8"}} variant="contained">
        {output ? "Повторная генерация" : "Сгенерировать"}
      </Button>
      {saveButton}
      {outputTextArea}
      {confirmForm}

    </form>
  )
}
