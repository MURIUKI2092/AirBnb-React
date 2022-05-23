import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Inspiration = () => {
  return (
    <>
    <h2 className='inspirationHeader'>Inspiration for your next travel</h2>
      <div  className='inspiration'>
      <Card sx={{ maxWidth: 345,maxHeight:500 }} className="landingCard">
    <CardActionArea>
      <img
      
      src='https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
      alt=''
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Kisumu
        </Typography>
        <Typography variant="body1" color="text.primary">
         400 Km away
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 345,maxHeight:500 }} className="landingCard">
    <CardActionArea>
      <img
      
      src='https://images.unsplash.com/photo-1543490791-db8323d8e5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      alt=''
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Nakuru
        </Typography>
        <Typography variant="body1" color="text.primary">
         40 Km away
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 345,maxHeight:500 }} className="landingCard">
    <CardActionArea>
      <img
      
      src='https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      alt=''
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         Mombasa
        </Typography>
        <Typography variant="body1" color="text.primary">
         100 Km away
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
 
  <Card sx={{ maxWidth: 345,maxHeight:500 }} className="landingCard">
    <CardActionArea>
      <img
      
      src='https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      alt=''
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Nyeri
        </Typography>
        <Typography variant="body1" color="text.primary">
         400 Km away
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>



  </div>
    </>
  
  )
}