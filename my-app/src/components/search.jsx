import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NativeSelect from '@mui/material/NativeSelect';


export const Search = () => {
  return (
    <div className='searchLocale'>

       <Container component="main" maxWidth="xs"
        sx={{
          marginTop: 1,
          
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          
          <Box component="form"  sx={{ mt: 1 }}>

            <Typography gutterBottom variant="h5" component="div" className='headerSearch'>
                
                Fill to search
                    </Typography>
         

        <NativeSelect
        className='Location'
          defaultValue={"none"}
          inputProps={{
            name: 'towns',
            id: '',
          }}
        >
          <option value="none" selected disabled hidden>Select travel location</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Kisii">Kisii</option>
                <option value="mombasa">Mombasa</option>
                <option value="Nairobi">Nairobi</option>
          </NativeSelect>

    
            <Button
              type="submit"
              
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
