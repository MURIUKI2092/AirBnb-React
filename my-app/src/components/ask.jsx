import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Ask = () => {
  const  [ question,setQuestion]= useState("")

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const newQuestion ={
      question
    }
  }
  return (
    <div>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField id="standard-basic" 
          label="Ask your Question"
           variant="standard" 
          
           onChange={setQuestion}
           />
          <Button
          onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Ask
            </Button>
    </Box>
    
    </div>
  )
}
