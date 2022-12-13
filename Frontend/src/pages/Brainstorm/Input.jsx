import { Button, TextField } from '@mui/material'
import React from 'react'
import Output from './Output'
import {Controller, useForm} from 'react-hook-form'

export default function Input() {
     const[output, setOutput]=React.useState(false)
    const { handleSubmit, control, formState: {errors}} = useForm();


     const onSubmit=(data)=>{
          output ? setOutput(false) : setOutput(true)
          console.log(data)
     }
     
  return (
    <form>
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
          <Output show={output}/>
          <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#4B79F8"}} variant="contained">{output ? "Generate again" : "Generate" }</Button> 
    </form>
  )
}


