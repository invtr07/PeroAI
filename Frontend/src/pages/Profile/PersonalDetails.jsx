import { Button, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import './Personal.css'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function PersonalDetails() {
     const {handleSubmit, control, formState: {errors}}= useForm()
     const [saveModal, setSaveModal]= React.useState(false)

     // mock data
     const userData={
          name: "Нурали",
          email: "mmm@gmail.com",
          password: "12345"
     }

     const closeModal =()=>{
          setSaveModal(false)
     }

     const onSubmit=(data)=>{
          console.log(data)
          setSaveModal(true);
     }

     let savemodal
     if(saveModal){
          savemodal = <Dialog open={saveModal} onClose={closeModal}>
          <DialogContent>
            <DialogTitle>Сохранить изменения?</DialogTitle>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Отменить</Button>
            <Button>Подтвердить</Button>
          </DialogActions>
        </Dialog>
     }

  return (
     <>
          {savemodal}
          <form>
               <div className='personal-details'>
               <Controller control={control} 
               name="username" 
               rules={{required: true}}
               render={({field:{onChange}})=>(
                    <TextField id="outlined-basic" label="Имя" variant="outlined" onChange={onChange}
                    defaultValue={userData.name}/>
               )}/>
               <Controller control={control} 
               name="email" 
               rules={{required: true,
                         pattern:{
                              value: /^\S+@\S+$/i,
                              message: "Введите правильную эл.почту",
                         }}}
               render={({field:{onChange}})=>(
                    <TextField id="outlined-basic" label="Электронная почта" variant="outlined" onChange={onChange} 
                    defaultValue={userData.email}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? errors.email.message : ""}/>
               )}/>
               <Controller control={control} 
               name="password" 
               rules={{required: true}}
               render={({field:{onChange}})=>(
                    <TextField id="outlined-basic" label="Пароль" type="password" variant="outlined" onChange={onChange}
                    defaultValue={userData.password}/>
               )}/>

                    <Button onClick={handleSubmit(onSubmit)} variant="contained" >Сохранить изменения</Button>
               </div>
               
               <div className='premium'>     
               <h3 style={{color:"#4B79F8"}}>Версия Pero: Beginner</h3>
               <Button variant="contained" 
               style={{
                    background:'linear-gradient(to right, #4B79F8, #D15EAF)'
                    }}>Получить Pero Plus</Button>
               </div>
          </form>
     </>
  )
}
