import { Inter } from '@next/font/google'
import { Button, TextField } from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import React from 'react'


const inter = Inter({ subsets: ['latin'] });

export default function Home() {

    const { handleSubmit, control, formState: {errors}} = useForm();


     const onSubmit=(data)=>{
      console.log(data)
     }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="logo"></div>
        <h2>Enter keyword</h2>

        <Controller 
          control={control}
          name="keywords"
          rules={{required:true}}
          render={({field:{ onChange, value }})=>(
        <TextField style={{height:"fit-content"}} variant='outlined' label="Keyword"
              onChange={onChange}
              error={Boolean(errors.keywords)}
              value ={value || ""}/>
          )}
        />
        
        <Button type="submit" style={{backgroundColor: "#4B79F8"}} variant="contained">Generate</Button> 
      </form>
    </>
  )
}

// onClick={handleSubmit()}
