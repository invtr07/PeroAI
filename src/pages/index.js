import { Button, TextField } from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import AppContext from '../components/AppContext'


export default function Home() {
    const context = useContext(AppContext)

    const { handleSubmit, control, formState: {errors}} = useForm();
    const router = useRouter();

    let output;
    let output1;
    let output2;
    let output3;
    let input;

     const onSubmit=(data, event)=>{
      input = data.keyword
      event.preventDefault()
      sendRequest(event)
     }

     async function sendRequest(event){
        event.preventDefault();
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
          output = data.result
          output1= output.replaceAll(' ', '')
          output2= output1.replaceAll(/\r?\n|\r/g, '')
          output3= output2.split(',')

          context.setOutput(output3)
          router.push("/tree")

        } catch(error) {
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


  