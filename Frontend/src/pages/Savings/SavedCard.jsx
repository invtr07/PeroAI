import React from 'react'
import './SavedCard.css'

//mui 
import {Card, CardContent, Divider, Typography} from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';

export default function SavedCard() {
     let dummyObject=[
          {
               id: 1,
               FileName: "Nfactorial",
               PreviewText: "Наступила долгожданная крупная IT-выставка, где студент, прошедшие сложнейший отбор в финальную программу",
               createdTime: "11.08.2022"
          },
          {
               id: 2,
               FileName: "Как писал Эрнест Хемингуей? ",
               PreviewText: "Эрнест Хемингуей был новатором благодаря своему подходу, его работы порожали своей простотой и открытостью",
               createdTime: "13.07.2022"
          },
          {
               id: 3,
               FileName: "Как приготовить рамен в стиральной машинке ?",
               PreviewText: "Рецепт очень прост, для начала нужно убедится что машинка выключена",
               createdTime: "01.08.2022"
          }
     ]

  return (
    <>
          <div className='cards'>
               {dummyObject.map((data)=><>
                    <Card id={data.id} style={{
                         backgroundColor:""
                    }}>
                         <CardActionArea>
                              <CardContent>
                                   <Typography gutterBottom variant="h6" component="div">
                                   {data.FileName}
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                   {data.PreviewText}...
                                   </Typography>
                              </CardContent>
                         </CardActionArea>
                         <Divider/>
                         <CardActions className='action-box'>
                              <p style={{fontWeight: "normal" }}>{data.createdTime}</p>
                              <div className='icons'>
                                   <div onClick={()=>{console.log("works")}}className='copy-icon'></div>
                                   <div onClick={()=>{console.log("works")}}className='delete-icon'></div>
                              </div>    
                         </CardActions>
                    </Card>
               </>
               )}
          </div>
    </>
  )
}
