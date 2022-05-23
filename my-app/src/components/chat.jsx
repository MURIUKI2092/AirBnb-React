import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Chat = () => {
  const [chat,setChat]= useState("");

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const newChat = {
      chat
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
            id="chat"
            label="chat"
            name="chat"
            autoComplete="chat"
            sx={{ width:'20ch'}}
            onChange={setChat}
            
          />
          <Button
          onSubmit={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
          Send Chat
          </Button>
  </Box>
  </div>
  )
}
