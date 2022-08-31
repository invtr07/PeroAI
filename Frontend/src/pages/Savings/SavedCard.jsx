import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './SavedCard.css'

//mui 
import {Card, CardContent, DialogContent, Divider, Typography} from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Button, DialogTitle } from '@mui/material'

export default function SavedCard() {
     const[cards, setCards]=React.useState([
          {
               key: uuidv4(),
               FileName: "Nfactorial",
               PreviewText: "Наступила долгожданная крупная IT-выставка, где студент, прошедшие сложнейший отбор в финальную программу",
               createdTime: "11.08.2022"
          },
          {
               key: uuidv4(),
               FileName: "Как писал Эрнест Хемингуей? ",
               PreviewText: "Эрнест Хемингуей был новатором благодаря своему подходу, его работы порожали своей простотой и открытостью",
               createdTime: "13.07.2022"
          },
          {
               key: uuidv4(),
               FileName: "Как приготовить рамен в стиральной машинке ?",
               PreviewText: "Рецепт очень прост, для начала нужно убедится что машинка выключена",
               createdTime: "01.08.2022"
          }
     ])
     const[confirm, setConfirm]=React.useState(false) //hook that makes Close modal appear
     const[data, setData]=React.useState() //hook for entering data about chosen card into 

     const handleDelete =({key})=>{
          const itemIndex = cards.findIndex((item)=> item.key ===key);
          const leftSideofArray = cards.slice(0, itemIndex);
          const rightSideofArray = cards.slice(itemIndex+1, cards.length);

          setCards([...leftSideofArray, ...rightSideofArray]);
          setConfirm(false)
     }

     //confirm before delete modal 

     const closeDeleteModal =()=>setConfirm(false)

     const setDeleteModal =(data)=>{
          setConfirm(true);
          setData(data);
     }

     let modal
     if(confirm){
          modal= <Dialog sx={{borderRadius:"30px"}}open={confirm} onClose={closeDeleteModal}>
                         <DialogTitle alignSelf={"center"}>Delete File</DialogTitle>
                         <DialogContent sx={{fontFamily:"'Roboto', sans-serif", width:"80%"}}>Are you sure you want to delete "{data.FileName}" file</DialogContent>
                         <DialogActions>
                              <Button variant="outlined" onClick={closeDeleteModal}>Cancel</Button>
                              <Button variant="contained" onClick={()=>{handleDelete(data)}}>Confirm</Button>
                         </DialogActions>
                    </Dialog>
     }
          

  return (
    <>
          {modal}
          <div className='cards'>
               {cards.map((data)=>
                    <Card sx={{boxShadow:"0px 0px 5px 0px grey"}}key={data.key}>
                         <CardActionArea>
                              <CardContent>
                                   <Typography gutterBottom variant="h6" component="div">
                                   {data.FileName}
                                   </Typography>
                                   <Typography variant="body1" color="text.secondary">
                                   {data.PreviewText}...
                                   </Typography>
                              </CardContent>
             </CardActionArea>
                         <Divider/>
                         <CardActions className='action-box'>
                              <div style={{fontSize:"15px"}}>{data.createdTime}</div>
                              <div className='icons'>
                                   <div className='copy-icon'></div>
                                   <div onClick={()=>(setDeleteModal(data))}className='delete-icon'></div>
                              </div>    
                         </CardActions>
                    </Card>
               )}
          </div>
    </>
  )
}
