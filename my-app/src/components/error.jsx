import React from 'react';
import Button from '@mui/material/Button';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const  Error = () => {
  return (
    <div  className='errorPage'>
      <div className ="errImg">
        <SentimentVeryDissatisfiedIcon  className='sadEmoji'style={{ fontSize: 250 }} />
      </div>
      <div className='errInfo'>
          <h1>404  -  PAGE NOT FOUND!</h1>
          <p>The page you  are looking for might have been removed, had it's name changed
             or is temporarily unavailable</p>
             <Button
              type="submit"
              className='errBtn'
              variant="contained"
              sx={{ mt: 3, mb: 2,borderRadius:5 }}
            >
            HomePage
            </Button>
      </div>
    

    </div>
  )
}
