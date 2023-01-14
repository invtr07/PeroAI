import { Button, TextField } from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import React from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context'

export default function Home() {

    let contextData = useAppContext();

    const { handleSubmit, control, formState: {errors}} = useForm();
    const router = useRouter();


    let input;

     const onSubmit=(data, event)=>{
      input = data.keyword
      event.preventDefault()
      sendRequest(event)
     }

     async function sendRequest(event){
        event.preventDefault();
        console.log(input)
        try {
          const response = await fetch('/api/generate', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          });

          const data = await response.json();
          if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`);
          }
          contextData = data
          console.log(contextData)
          router.push("/tree")

        } catch(error) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(error.message);
        }
     }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="logo"></div>
        <h2>Enter one keyword</h2>

        <Controller 
          control={control}
          name="keyword"
          rules={{required:true}}
          render={({field:{ onChange, value }})=>(
        <TextField style={{height:"fit-content", width:"70%"}} variant='outlined' label="Keyword"
              onChange={onChange}
              error={Boolean(errors.keywords)}
              value ={value || ""}/>
          )}
        />
        
        <Button type="submit" style={{backgroundColor: "#4B79F8", width: "70%"}} variant="contained">Generate</Button> 
      </form>
    </>
  )
}


