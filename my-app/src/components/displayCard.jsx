import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Axios from 'axios';


export const DisplayCard = () => {
  const [houses,setHouses]=useState([])

  useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/v1/house")
    .then(res=>{
      console.log("fetch from ", res.data)
      setHouses(res.data)
    }).catch(err=>console.log(err))
    

  },[])
  const arr = houses.map((house)=>{
    return(
      <Card sx={{ maxWidth: 300,maxHeight:400 }}  className="landingCard" >
    <CardActionArea>
      <img
      
      src='https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
      alt=''
      />
      
      <CardContent>
        
        
        <Typography gutterBottom variant="h3" component="div">
          
          <h3>{house.HostLocation}</h3>
        </Typography>
        <Typography variant="body1" color="text.primary">
         <h5>400 Km away</h5>
        </Typography>
        <Typography variant="body1" color="text.primary">
     <h5>   Price : <strong>{house.price}</strong></h5>
        </Typography>
      <Link to={"/houses/description"} className="errLink">
      <Button className='bookBtn'
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                  Book Now
                  </Button>

      </Link>
        
      </CardContent>
    </CardActionArea>
  </Card>

    )

  })
  return (
    <section className='displayCard'>

      
         
{arr}
       

          </section>

  )
}
