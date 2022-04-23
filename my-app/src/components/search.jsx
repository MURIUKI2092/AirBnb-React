import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Search = () => {
  return (
    <div className='search'>

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
                
                Fill to search
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="telephone"
              label="Telephone"
               id="password"
              
            />

              <select name="Location" id="cars" className='Location'>
              <option value="none" selected disabled hidden>Select travel location</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Kisii">Kisii</option>
                <option value="mombasa">Mombasa</option>
                <option value="Nairobi">Nairobi</option>
              </select>
                          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Search
            </Button>
            </Box>
             </Box>
            </Container>

    </div>
  )
};
