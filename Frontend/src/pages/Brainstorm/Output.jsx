import React from 'react'
import { TextareaAutosize, TextField } from '@mui/material'
import { Button } from '@mui/material'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function Output(props) {
     const[confirm, setConfirm]=React.useState(false)

     let result
     let confirmForm
     let outputSize 
     let screenWidth = window.innerWidth 

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

     //function to change state when save button is clicked
     const OpenConfirm = () => {
          setConfirm(true);
        };
      
     const CloseConfirm = () => {
          setConfirm(false);
     };

     
     if(props.show===true){
          result= <>
               <h3 style={{color:"#4B79F8", marginBottom:"0px"}}>Результат</h3>
               <TextareaAutosize 
               aria-label="minimum height"
               minRows={3}
               placeholder=""
               style={outputSize}>
          
               {/* here will go GPT-3 output */}
          
               </TextareaAutosize>
               <Button 
               onClick={OpenConfirm}
               style={{
                    backgroundColor: "#E2EBF5",
                    color:"#3871B7"
               }}      
               variant="filled">Сохранить</Button>
          </>
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
    <>
     {result}
     {confirmForm}
    </>
  )
}
