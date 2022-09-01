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

import { useForm, Controller } from "react-hook-form";

export default function GeneratorInputs(props) {
  const [category, setCategory] = React.useState('');
  const [output, setOutput] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false);

  const { handleSubmit, reset, control } = useForm();

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const OpenConfirm = () => {
    setConfirm(true)
  };

  const CloseConfirm = () => {
    setConfirm(false);
  };

  const onSubmit = (data) => {
    output ? setOutput(false) : setOutput(true)
    reset(data)
  }

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
      style={outputSize}
      />
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
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, title} }) => (
            <TextField id="outlined-basic" onChange={onChange} value={title} label="Заголовок" variant="outlined" />
        )}
      />

      <Controller
        control={control}
        name="key-words"
        render={({ field: { onChange, keywords} }) => (
          <TextField id="outlined-basic" onChange={onChange} value={keywords} label="Ключевые слова" variant="outlined" />
        )}
      />
      
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, description} }) => (
          <TextField id="outlined-basic" onChange={onChange} value={description} label="Описание аудитории" variant="outlined" />
        )}
      />
      

      <FormControl >
        <InputLabel id="demo-simple-select-label">Вид текста</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleCategory}
        >
          <MenuItem value={"Продающий"}>Продающий</MenuItem>
          <MenuItem value={"Информационный"}>Информационный</MenuItem>
          <MenuItem value={"Развлекательный"}>Развлекательный</MenuItem>
        </Select>
      </FormControl>
      {outputTextArea}
      {saveButton}
      {confirmForm}
      
      <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#4B79F8"}} variant="contained">
          Сгенерировать
      </Button>
    </form>
  )
}
