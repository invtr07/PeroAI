import { Button, TextareaAutosize,TextField } from '@mui/material'
import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Output(props) {
     const [confirm, setConfirm]=React.useState(false);

     const OpenConfirm = () => {
          setConfirm(true);
        };
      
     const CloseConfirm = () => {
     setConfirm(false);
     };

     let confirmForm;
     let outputSize;
     let screenWidth = window.innerWidth

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

     let result 
     if(props.show===true){
          result=<>
          <h3 style={{color:"#4B79F8", marginBottom:"0px"}}>Пишите здесь</h3>
               <TextareaAutosize 
               style={outputSize}
               minRows={3} 
               placeholder=''>

                    {/* Here will go user's text and live suggestions */}

               </TextareaAutosize>
               <Button onClick={OpenConfirm}style={{
               backgroundColor: "#E2EBF5",
               color:"#3871B7"
               }} variant="filled">Сохранить</Button>
               {confirmForm}
          </>
     }    
  return (
    <>
          {result}
    </>
  )
}
