import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export const Book = () => {
      const [ username,setUsername]= useState("");
      const [email,setEmail]= useState("");
      const [telephone,setTelephone]=useState("");

      const handleSubmit = async(event)=>{
        event.preventDefault();
        const newHost ={
          username,
          email,
          telephone,
          
        }
      }
  return (
    <div className='book'>
             <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          
          <Box component="form"  sx={{ mt: 1 }}>

            <Typography gutterBottom variant="h5" component="div" className='headerSearch'>
                
                Fill to Book
                    </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={setUsername}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={setEmail}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="telephone"
              label="Telephone"
              id="telephone"
               onChange={setTelephone}
              
            />

                                        
            <Button
             onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Book
            </Button>
            </Box>
             </Box>
            </Container>
    </div>
  )
}
