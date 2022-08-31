import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
     const[copy, setCopy]=React.useState(false) //hook for making a copy of the text to clipboard
     const[copyModal,setcopyModal]=React.useState(false)
     const[copyName, setCopyName]=React.useState("")

     //function that deletes item from an array of cards
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


     const handleCopyModal =(name)=>{
               setCopy(true)
               setCopyName(name)
     }

     React.useEffect(()=>{
          if(copyName.length!==0){
               // console.log(copyName)
               setcopyModal(true)
          }
          else{
               console.log("not copied")
          }
          
     },[copyName])

     let SuccessCopyModal
     if(copyModal){
          SuccessCopyModal=<Dialog open={copyModal} onClose={()=>{setcopyModal(false)}}>
                                   <DialogContent sx={{fontFamily:"'Roboto', sans-serif"}}>
                                        Текст файла <b>"{copyName}"</b> был скопирован
                                   </DialogContent>
          </Dialog>
     }

     let deleteModal
     if(confirm){
          deleteModal= <Dialog sx={{borderRadius:"30px"}}open={confirm} onClose={closeDeleteModal}>
                         <DialogTitle alignSelf={"center"}>Delete File</DialogTitle>
                         <DialogContent sx={{fontFamily:"'Roboto', sans-serif", width:"75%",marginLeft:"3%"}}>Are you sure you want to delete <b>"{data.FileName}"</b>?</DialogContent>
                         <DialogActions>
                              <Button variant="outlined" onClick={closeDeleteModal}>Cancel</Button>
                              <Button variant="contained" onClick={()=>{handleDelete(data)}}>Confirm</Button>
                         </DialogActions>
                    </Dialog>
     }    


  return (
    <>
          {SuccessCopyModal}
          {deleteModal}
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
                                        <CopyToClipboard text={data.PreviewText} onCopy={()=>{handleCopyModal(data.FileName)}}>
                                             <div className='copy-icon'></div>
                                        </CopyToClipboard>
                                        
                                   <div onClick={()=>(setDeleteModal(data))}className='delete-icon'></div>
                                   </div>    
                         </CardActions>
                    </Card>
               )}
          </div>
    </>
  )
}
