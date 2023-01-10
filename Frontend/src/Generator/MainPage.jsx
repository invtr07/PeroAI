import { Button, TextField } from '@mui/material'
import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';
import './MainPage.css'

export default function Main() {
    let navigate = useNavigate();
    const { handleSubmit, control, formState: {errors}} = useForm();

     const onSubmit=(data)=>{
          navigate('/newtree')
          console.log(data);
     }
     
  return (
    <form>
      <div className="logo"></div>
      <h2>Enter keyword</h2>

      <Controller 
      control={control}
      name="keywords"
      rules={{required:true}}
      render={({field:{ onChange }})=>(
          <TextField style={{height:"fit-content"}} variant='outlined' label="Keyword"
          onChange={onChange}
          error={Boolean(errors.keywords)}/>
      )}
      />
          <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#4B79F8"}} variant="contained">Generate</Button> 
    </form>
  )
}


