import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export const SendReview = () => {
  const [review,setReview]= useState("")

  const handleSubmit =  async(event)=>{
    event.preventDefault();
    const newReview ={
      review

    }
  }
  return (
    <div  className='sendReview'>
      <Box
      
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
              margin="normal"
              required
              fullWidth
              id="review"
              label="review"
              name="review"
              autoComplete="review"
              sx={{ width:'20ch'}}
              onChange={setReview}
              
            />
            <Button
            onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Send Review
            </Button>
    </Box>
    
    
    </div>
  )
}
