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
import FormHelperText from '@mui/material/FormHelperText'

import { useForm, Controller } from "react-hook-form";

import axios from 'axios'
import cors from 'cors'

export default function GeneratorInputs(props) {
  const [output, setOutput] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false);

  const { handleSubmit, control, formState: {errors}} = useForm();

  const OpenConfirm = () => {
    setConfirm(true)
  };

  const CloseConfirm = () => {
    setConfirm(false);
  };


  const onSubmit = (data) => {
    output ? setOutput(false) : setOutput(true)
    sendData(data)
  }

  const sendData = async (data) => {
    try{
      await axios({
        method: "post",
        url: "https://test-1981d-default-rtdb.europe-west1.firebasedatabase.app/", 
        data: JSON(data),
      })
    }
    catch(err){
      console.error(err)
    }
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
      {/* title */}
      <Controller
        control={control}
        rules={{ required: true}}
        name="title"
        render={({ field: { onChange} }) => (
          <>
            <TextField id="outlined-basic" onChange={onChange} label="Заголовок" variant="outlined" 
            error={Boolean(errors.title)}
            helperText={errors.title ? errors.title.message : ""}/>
          </>  
        )}
      />

      {/* keywords */}
      <Controller
        control={control}
        rules={{ required: true}}
        name="keywords"
        render={({ field: { onChange } }) => (
          <TextField id="outlined-basic" onChange={onChange} label="Ключевые слова" variant="outlined"
          error={Boolean(errors.keywords)}
          helperText={errors.keywords ? errors.keywords.message : ""} />
        )}
      />
      
      {/* audience */}
      <Controller
        control={control}
        rules={{ required: true}}
        name="description"
        render={({ field: { onChange} }) => (
          <TextField id="outlined-basic" onChange={onChange} label="Описание аудитории" variant="outlined" 
          error={Boolean(errors.description)}
          helperText={errors.description ? errors.description.message : ""}/>
        )}
      />
      
          {/* category select */}
      <FormControl >
        <Controller 
          control={control}
          name="category"
          rules={{ required: true}}
          render={({field: {onChange, value}, fieldState})=>(
            <>
            <InputLabel error={!!fieldState.error} id="demo-simple-select-label">Вид текста</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value || ''}
              label="Категория"
              onChange={onChange}
              error={!!fieldState.error}
            >
              {["Продающий","Информационный", "Развлекательный"].map((item)=>(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
            </Select>
            {/* error message */}
            {fieldState.error ? (
              <FormHelperText error>{fieldState.error?.message}</FormHelperText>
            ) : null}
            </> 
          )}
        />
      </FormControl>
      
           {/* modals */}
      {outputTextArea}
      {saveButton}  
      {confirmForm}
      
      <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#4B79F8"}} variant="contained">
          {output ? "Повторная генерация" : "Сгенерировать"}
      </Button>
    </form>
  )
}
