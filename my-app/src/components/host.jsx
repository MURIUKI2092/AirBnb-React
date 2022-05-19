import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export const Host = () => {

  const [ username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [telephone,setTelephone]=useState("");
  const [location,setLocation]= useState("");
  const[price,setPrice]= useState("");
  const[ description,setDescription]= useState("");
  const[file,setFile]= useState(null);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const newHost ={
      username,
      email,
      telephone,
      location,
      price,
      description,

    }
    if(file){
      const data = new FormData();
      const filename = Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newHost.photo = filename
    }
  }
  return (
    <Grid container component="main" sx={{ height: '70vh' }}  className="post">
        
        {/* <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            maxWidth:"400",
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        <Grid item xs={12} sm={18} md={10} component={Paper} elevation={6} square>

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
          
          
          <Box component="form"  sx={{ mt: 1 }} >

            <Typography gutterBottom variant="h5" component="div" className='headerSearch'>
                
                Fill to Post
                    </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="namel"
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


            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Host location"
              name="location"
              autoComplete="location"
              onChange={setLocation}
              
            />
               <TextField
              margin="normal"
              required
              fullWidth
              id="money"
              label="Price"
              name="Price"
              autoComplete="Price"
              onChange={setPrice}
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="description"
              name="description"
              autoComplete="description"
              onChange={setDescription}
              
            />
            <input type={"file"} className="upload" onChange={(e)=>setFile(e.target.files[0])} />
                          
            <Button
            onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Post
            </Button>
            </Box>
             </Box>
            </Container>

            </Grid>
      </Grid>
  )
};